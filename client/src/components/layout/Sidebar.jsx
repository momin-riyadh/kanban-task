import iconBoard from '../../assets/images/icon-board.svg';
import Moon from '../../assets/images/moon.svg';
import Sun from '../../assets/images/sun.svg';
import {useState} from 'react';
import IconShow from '../../assets/images/icon-show-sidebar.svg';
import IconHide from '../../assets/images/icon-hide-sidebar.svg';

function Sidebar() {
    const [isDark, setIsDark] = useState(false);
    const menuItems = [
        {name: 'Home', href: '#', isActive: true, icon: iconBoard},
        {name: 'Tasks', href: '#', isActive: false, icon: iconBoard},
        {name: 'Projects', href: '#', isActive: false, icon: iconBoard},
        {name: '+ Create New Board', href: '#', isActive: false, icon: iconBoard}
    ];

    return (
        <div className="w-72 bg-white h-full border-r-1 border-[#E4EBFA] pt-20">
            <div className="p-4">
                <h2 className="text-[12px] font-semibold mb-4 text-[#828FA3] uppercase">
                    All Boards (3)
                </h2>
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}
                            className="hover:bg-[#635FC7] hover:text-white rounded-r-3xl -ml-4 pl-2">
                            <a
                                href={item.href}
                                className={`flex items-center p-2 hover:text-white active:bg-[#635FC7] active:text-white ${
                                    item.isActive ? 'text-[#635FC7]' : 'text-gray-600'
                                }`}
                            >
                                <img src={item.icon} alt="" className="inline-block mr-2 w-4 h-4"/>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            {/*Sidebar Footer*/}
            <div className="flex flex-col items-center mt-auto p-4">
                <div className="flex items-center gap-2">
                    <img src={Sun} alt=""/>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" onChange={e => setIsDark(e.target.checked)}/>
                        <div
                            className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#635FC7]"></div>
                    </label>
                    <img src={Moon} alt=""/>
                </div>

                <div className="flex items-center gap-2 mt-4">
                    <img src={IconHide} alt=""/> Hide Sidebar
                </div>
            </div>
            {/*End Sidebar Footer*/}

        </div>
    );
}

export default Sidebar;
