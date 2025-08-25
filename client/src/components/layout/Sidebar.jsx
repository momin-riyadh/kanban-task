import iconBoard from '../../assets/images/icon-board.svg';
import Moon from '../../assets/images/moon.svg';
import Sun from '../../assets/images/sun.svg';
import {useState} from 'react';
import IconShow from '../../assets/images/icon-show-sidebar.svg';
import IconHide from '../../assets/images/icon-hide-sidebar.svg';

function Sidebar({ onSidebarToggle }) {
    const [isDark, setIsDark] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const menuItems = [
        {name: 'Home', href: '#', isActive: true, icon: iconBoard},
        {name: 'Tasks', href: '#', isActive: false, icon: iconBoard},
        {name: 'Projects', href: '#', isActive: false, icon: iconBoard},
        {name: '+ Create New Board', href: '#', isActive: false, icon: iconBoard}
    ];

    const toggleSidebar = () => {
        const newVisibility = !isSidebarVisible;
        setIsSidebarVisible(newVisibility);
        // Notify parent component about the sidebar state change
        if (onSidebarToggle) {
            onSidebarToggle(newVisibility);
        }
    };

    return (
        <>
            {/* Main Sidebar */}
            <div
                className={`fixed left-0 top-0 w-72 bg-white h-full border-r-1 border-[#E4EBFA] pt-20 flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 ${
                    isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/*All boards*/}
                <div className="">
                    <h2 className="text-[12px] font-semibold mb-4 text-[#828FA3] uppercase p-4">
                        All Boards (3)
                    </h2>
                    <ul className="space-y-2 max-h-[calc(100vh-275px)] overflow-y-auto scrollbar-thin px-4">
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
                {/*End All boards*/}

                {/*Sidebar Footer*/}
                <div className="flex flex-col items-center mt-auto p-4">
                    <div className="flex items-center  justify-center bg-[#F4F7FD] gap-5 px-2 py-5 w-full rounded-xl">
                        <img src={Sun} alt=""/>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" onChange={e => setIsDark(e.target.checked)}/>
                            <div
                                className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#635FC7]"></div>
                        </label>
                        <img src={Moon} alt=""/>
                    </div>

                    <div
                        className="flex items-center justify-start gap-2 mt-4 font-semibold text-[#828FA3] w-full cursor-pointer hover:text-[#635FC7] transition-colors duration-200"
                        onClick={toggleSidebar}
                    >
                        <img src={IconHide} alt=""/> Hide Sidebar
                    </div>
                </div>
                {/*End Sidebar Footer*/}
            </div>

            {/* Show Sidebar Button - appears when sidebar is hidden */}
            <button
                onClick={toggleSidebar}
                className={`fixed bottom-12 left-0 bg-[#635FC7] hover:bg-[#A8A4FF] p-3 rounded-r-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-50 ${
                    isSidebarVisible ? 'opacity-0 pointer-events-none -translate-x-full' : 'opacity-100 pointer-events-auto translate-x-0'
                }`}
                aria-label="Show Sidebar"
            >
                <img src={IconShow} alt="" className="w-6 h-4"/>
            </button>
        </>
    );
}

export default Sidebar;
