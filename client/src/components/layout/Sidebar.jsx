function Sidebar() {
    const menuItems = [
        { name: 'Home', href: '#', isActive: true },
        { name: 'Tasks', href: '#', isActive: false },
        { name: 'Projects', href: '#', isActive: false },
        { name: 'Settings', href: '#', isActive: false }
    ];

    return (
        <div className="w-72 bg-white h-full border-r-1 border-[#E4EBFA] pt-20">
            <div className="p-4">
                <h2 className="text-[12px] font-semibold mb-4 text-[#828FA3] uppercase">
                    All Boards (3)
                </h2>
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="hover:bg-[#635FC7] hover:text-white rounded-r-3xl -ml-4 pl-2"
                        >
                            <a
                                href={item.href}
                                className={`block p-2 hover:text-white active:bg-[#635FC7] active:text-white ${
                                    item.isActive ? 'text-[#635FC7]' : 'text-gray-600'
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
