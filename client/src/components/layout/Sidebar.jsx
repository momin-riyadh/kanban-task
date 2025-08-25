import iconBoard from '../../assets/images/icon-board.svg';
import Moon from '../../assets/images/moon.svg';
import Sun from '../../assets/images/sun.svg';
import {useState} from 'react';
import IconShow from '../../assets/images/icon-show-sidebar.svg';
import IconHide from '../../assets/images/icon-hide-sidebar.svg';

function Sidebar({ onSidebarToggle }) {
    const [isDark, setIsDark] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    // --- Add New Board modal state ---
    const [showAddBoard, setShowAddBoard] = useState(false);
    const [boardName, setBoardName] = useState('');
    const [columns, setColumns] = useState([{ id: 1, name: 'Todo' }, { id: 2, name: 'Doing' }]);

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

    // Open the Add New Board modal
    const handleCreateNewBoardClick = (e) => {
        e.preventDefault();
        setShowAddBoard(true);
    };

    // Modal helpers
    const handleAddColumn = () => {
        const nextId = (columns[columns.length - 1]?.id || 0) + 1;
        setColumns([...columns, { id: nextId, name: '' }]);
    };

    const handleRemoveColumn = (id) => {
        setColumns(columns.filter(c => c.id !== id));
    };

    const handleChangeColumn = (id, value) => {
        setColumns(columns.map(c => c.id === id ? { ...c, name: value } : c));
    };

    const handleSubmitBoard = (e) => {
        e.preventDefault();
        // Basic validation (can be enhanced/connected to app state later)
        const trimmedName = boardName.trim();
        const trimmedCols = columns.map(c => ({ ...c, name: c.name.trim() })).filter(c => c.name !== '');
        if (!trimmedName || trimmedCols.length === 0) {
            // Simple feedback for now
            alert('Please provide a board name and at least one column.');
            return;
        }
        // TODO: Lift this data to parent/store as needed
        console.log('New Board:', { name: trimmedName, columns: trimmedCols });
        setShowAddBoard(false);
        setBoardName('');
        setColumns([{ id: 1, name: 'Todo' }, { id: 2, name: 'Doing' }]);
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
                                    // When clicking the Create New Board item, open modal instead of navigating
                                    onClick={item.name === '+ Create New Board' ? handleCreateNewBoardClick : undefined}
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

            {/* Add New Board Modal */}
            {showAddBoard && (
                <div className="fixed inset-0 z-[60]">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setShowAddBoard(false)}
                        aria-hidden="true"
                    />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] max-w-[92vw] bg-white rounded-xl p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-900">Add New Board</h3>
                        <form className="mt-6 space-y-4" onSubmit={handleSubmitBoard}>
                            <div>
                                <label className="block text-xs font-semibold text-[#828FA3] mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#635FC7]"
                                    placeholder="e.g. Web Design"
                                    value={boardName}
                                    onChange={(e) => setBoardName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#828FA3] mb-2">Columns</label>
                                <div className="space-y-2">
                                    {columns.map(col => (
                                        <div key={col.id} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                className="flex-1 border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#635FC7]"
                                                value={col.name}
                                                onChange={(e) => handleChangeColumn(col.id, e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="text-[#828FA3] hover:text-red-500 px-2"
                                                onClick={() => handleRemoveColumn(col.id)}
                                                aria-label="Remove column"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={handleAddColumn}
                                    className="mt-3 w-full bg-[#F4F7FD] text-[#635FC7] font-semibold rounded-full py-2 hover:bg-[#EBEDFB] transition"
                                >
                                    + Add New Column
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#635FC7] hover:bg-[#A8A4FF] text-white font-semibold rounded-full py-3 transition"
                            >
                                Create New Board
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Sidebar;
