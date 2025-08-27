import React, {useEffect, useState, useRef} from 'react';
import Card from "../Card.jsx";
import PageLayout from "../layout/PageLayout.jsx";

const Dashboard = () => {
// Modal state for "+ New Column"
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
    const [isBoardModalVisible, setIsBoardModalVisible] = useState(false);

    // Form state (mocked for UI only)
    const [boardName, setBoardName] = useState('Platform Launch');
    const [columns, setColumns] = useState(['Todo', 'Doing', 'Done']);

    // Task details modal (opens when clicking any card)
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
    const [isTaskMenuOpen, setIsTaskMenuOpen] = useState(false);
    const taskMenuRef = useRef(null);

    const openBoardModal = () => {
        setIsBoardModalOpen(true);
        // next paint to allow transition
        setTimeout(() => setIsBoardModalVisible(true), 0);
    };

    const closeBoardModal = () => {
        setIsBoardModalVisible(false);
        setTimeout(() => setIsBoardModalOpen(false), 300); // match transition
    };

    const openTaskModal = () => {
        setIsTaskModalOpen(true);
        setTimeout(() => setIsTaskModalVisible(true), 0);
    };
    const closeTaskModal = () => {
        setIsTaskModalVisible(false);
        setTimeout(() => {
            setIsTaskModalOpen(false);
            setIsTaskMenuOpen(false);
        }, 300);
    };

    useEffect(() => {
        if (!isBoardModalOpen) return;
        const onKey = (e) => e.key === 'Escape' && closeBoardModal();
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isBoardModalOpen]);

    useEffect(() => {
        if (!isTaskModalOpen) return;
        const onKey = (e) => e.key === 'Escape' && closeTaskModal();
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isTaskModalOpen]);

    useEffect(() => {
        if (!isTaskMenuOpen) return;
        const onDocClick = (e) => {
            if (taskMenuRef.current && !taskMenuRef.current.contains(e.target)) {
                setIsTaskMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [isTaskMenuOpen]);

    const addColumn = () => setColumns((prev) => [...prev, '']);
    const removeColumn = (idx) => setColumns((prev) => prev.filter((_, i) => i !== idx));
    const updateColumn = (idx, val) =>
        setColumns((prev) => prev.map((c, i) => (i === idx ? val : c)));

    const saveChanges = (e) => {
        e.preventDefault();
        // TODO: Persist boardName and columns
        closeBoardModal();
    };

    // Make cards accessible: open modal on Enter/Space as well
    const handleCardKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openTaskModal();
        }
    };

    return (
        <PageLayout>
            <div className="dashboard h-full p-4">
                {/*Board Columns*/}
                <div className="flex flex-nowrap gap-[24px]">
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                <div className="flex gap-2.5 justify-start items-center">
                                    <span className="w-4 h-4 rounded-full bg-[lime] inline-block"></span> <span
                                    className="h-lh">To
                                    Do </span> (1)
                                </div>
                            </h2>
                        </div>
                        <div className="column-body flex flex-col gap-[24px]">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md flex-shrink-0">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md flex-shrink-0">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lorem ipsum dolor sit amet,
                                        consectetur radicalising.</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                <div className="flex gap-2.5 justify-start items-center">
                                    <span className="w-4 h-4 rounded-full bg-[teal] inline-block"></span> <span
                                    className="h-lh">To
                                    Do </span> (1)
                                </div>
                            </h2>
                        </div>
                        <div className="column-body">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                <div className="flex gap-2.5 justify-start items-center">
                                    <span className="w-4 h-4 rounded-full bg-[gray] inline-block"></span> <span
                                    className="h-lh">To
                                    Do </span> (1)
                                </div>
                            </h2>
                        </div>
                        <div className="column-body">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                <div className="flex gap-2.5 justify-start items-center">
                                    <span className="w-4 h-4 rounded-full bg-[orange] inline-block"></span> <span
                                    className="h-lh">To
                                    Do </span> (1)
                                </div>
                            </h2>
                        </div>
                        <div className="column-body">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                <div className="flex gap-2.5 justify-start items-center">
                                    <span className="w-4 h-4 rounded-full bg-[olive] inline-block"></span> <span
                                    className="h-lh">To
                                    Do </span> (1)
                                </div>
                            </h2>
                        </div>
                        <div className="column-body">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                <div className="flex gap-2.5 justify-start items-center">
                                    <span className="w-4 h-4 rounded-full bg-[olive] inline-block"></span> <span
                                    className="h-lh">To
                                    Do </span> (1)
                                </div>
                            </h2>
                        </div>
                        <div className="column-body">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                <div className="flex gap-2.5 justify-start items-center">
                                    <span className="w-4 h-4 rounded-full bg-[crimson] inline-block"></span> <span
                                    className="h-lh">To
                                    Do </span> (1)
                                </div>
                            </h2>
                        </div>
                        <div className="column-body">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openTaskModal}
                                onKeyDown={handleCardKeyDown}
                                className="cursor-pointer"
                            >
                                <Card className="max-w-md">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                    <p className="text-[#828FA3] text-[12px] font-bold">1 of 3 subtasks.</p>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/*Make New Column*/}
                    <div
                        className="single-column make-new-column flex-shrink-0 w-2xs grid place-items-center min-h-[calc(100vh-160px)] bg-[#E9EFFA] cursor-pointer hover:opacity-90 transition"
                        onClick={openBoardModal}
                        aria-label="+ New Column"
                        role="button"
                    >
                        <h3 className="text-[24px] h-lh font-bold text-[#635FC7]"> + New Column</h3>
                    </div>
                    {/*End Make New Column*/}
                </div>
                {/*End Board Columns*/}

                {/*State: When No cards are added to the board*/}
                <div className="hidden flex flex-col items-center justify-center h-full vh-full">
                    <div className="font-semibold text-xl mb-3 text-[#828FA3]">This board is empty. Create a new column
                        to get
                        started.
                    </div>
                    <button
                        className="bg-[#635FC7] hover:bg-[#A8A4FF] text-white px-4 py-3 rounded-3xl transition-colors duration-400 cursor-pointer">
                        <i className="bi bi-plus"></i> Add New Task
                    </button>
                </div>
                {/*End State*/}
            </div>

            {/* Task Details Modal (opens on card click) */}
            {isTaskModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
                    <div
                        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isTaskModalVisible ? 'opacity-100' : 'opacity-0'}`}
                        onClick={closeTaskModal}
                    />
                    <div
                        className={`relative w-full max-w-[480px] mx-4 bg-white rounded-lg shadow-xl p-6 transition-all duration-300
                        ${isTaskModalVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold pr-4">
                                Card Title: lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                            <div className="relative" ref={taskMenuRef}>
                                <i
                                    className="bi bi-three-dots-vertical text-[#828FA3] text-[20px] cursor-pointer hover:text-[#635FC7] transition-colors duration-200"
                                    onClick={() => setIsTaskMenuOpen((v) => !v)}
                                />
                                {isTaskMenuOpen && (
                                    <div
                                        className="absolute right-0 top-7 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[101]">
                                        <button
                                            className="w-full text-left px-4 py-2 text-[#828FA3] hover:bg-gray-50">Edit
                                            Task
                                        </button>
                                        <button
                                            className="w-full text-left px-4 py-2 text-[#EA5555] hover:bg-gray-50">Delete
                                            Task
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <p className="text-sm text-[#828FA3] mb-4">
                            This is a short description for the selected task. Replace with real task data when wired
                            up.
                        </p>

                        <div className="mb-4">
                            <div className="text-xs font-semibold text-[#828FA3] mb-2">Subtasks (2 of 3)</div>
                            <div className="space-y-2">
                                <label className="flex gap-3 items-center bg-[#F4F7FD] p-3 rounded-md cursor-pointer">
                                    <input type="checkbox" className="accent-[#635FC7]"/>
                                    <span className="text-sm">First subtask goes here</span>
                                </label>
                                <label className="flex gap-3 items-center bg-[#F4F7FD] p-3 rounded-md cursor-pointer">
                                    <input type="checkbox" className="accent-[#635FC7]"/>
                                    <span className="text-sm">Second subtask goes here</span>
                                </label>
                                <label className="flex gap-3 items-center bg-[#F4F7FD] p-3 rounded-md cursor-pointer">
                                    <input type="checkbox" className="accent-[#635FC7]"/>
                                    <span className="text-sm">Third subtask goes here</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-[#828FA3] mb-2">Current Status</label>
                            <select
                                className="w-full border border-[#E4EBFA] rounded-md px-3 py-2 outline-none focus:border-[#635FC7] bg-white">
                                <option>Todo</option>
                                <option>Doing</option>
                                <option>Done</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Board Modal (triggered by + New Column) */}
            {isBoardModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
                    <div
                        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isBoardModalVisible ? 'opacity-100' : 'opacity-0'}`}
                        onClick={closeBoardModal}
                    />
                    <div
                        className={`relative w-full max-w-xl mx-4 bg-white rounded-lg shadow-xl p-6 transition-all duration-300
                        ${isBoardModalVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold">Edit Board</h3>
                            <button
                                className="text-[#828FA3] hover:text-[#635FC7]"
                                onClick={closeBoardModal}
                                aria-label="Close"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                        <form onSubmit={saveChanges} className="space-y-4">
                            <div>
                                <label className="block text-sm text-[#828FA3] mb-2">Board Name</label>
                                <input
                                    type="text"
                                    value={boardName}
                                    onChange={(e) => setBoardName(e.target.value)}
                                    className="w-full border border-[#E4EBFA] rounded-md px-3 py-2 outline-none focus:border-[#635FC7]"
                                    placeholder="e.g. Platform Launch"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-[#828FA3] mb-2">Board Columns</label>
                                <div className="space-y-2">
                                    {columns.map((c, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={c}
                                                onChange={(e) => updateColumn(idx, e.target.value)}
                                                className="flex-1 border border-[#E4EBFA] rounded-md px-3 py-2 outline-none focus:border-[#635FC7]"
                                                placeholder={`Column ${idx + 1}`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeColumn(idx)}
                                                className="px-3 py-2 rounded-md text-[#828FA3] hover:text-[#EA5555] hover:bg-gray-50"
                                                aria-label="Remove column"
                                            >
                                                <i className="bi bi-x-lg"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={addColumn}
                                    className="mt-3 w-full bg-[#635FC71A] text-[#635FC7] hover:bg-[#635FC733] px-3 py-2 rounded-3xl font-semibold"
                                >
                                    + Add New Column
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#635FC7] hover:bg-[#A8A4FF] text-white px-4 py-3 rounded-3xl transition-colors duration-300 font-semibold"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </PageLayout>
    );
};

export default Dashboard;
