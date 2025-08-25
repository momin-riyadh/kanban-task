import LOGO from '../../assets/images/logo.svg';
import React, {useState, useRef, useEffect} from "react";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    // Add: task modal and simple form state
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [subtasks, setSubtasks] = useState(["", ""]);
    const [status, setStatus] = useState("Todo");

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
// ... existing code ...
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Add: modal helpers
    const openTaskModal = () => setIsTaskModalOpen(true);
    const closeTaskModal = () => setIsTaskModalOpen(false);

    useEffect(() => {
        if (!isTaskModalOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") closeTaskModal();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isTaskModalOpen]);

    const addSubtask = () => setSubtasks((prev) => [...prev, ""]);
    const removeSubtask = (index) =>
        setSubtasks((prev) => prev.filter((_, i) => i !== index));
    const updateSubtask = (index, value) =>
        setSubtasks((prev) => prev.map((s, i) => (i === index ? value : s)));

    const handleCreateTask = (e) => {
        e.preventDefault();
        // TODO: wire up to your state/store
        // Example payload shape:
        // { title: taskTitle, description: taskDescription, subtasks, status }
        closeTaskModal();
        setTaskTitle("");
        setTaskDescription("");
        setSubtasks(["", ""]);
        setStatus("Todo");
    };

    return (
        <div className="h-20 bg-white fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center">
                <div className="w-72 pl-4">
                    <a href="" className="w-full">
                        <img width={120} src={LOGO} alt="Logo" className="h-16"/>
                    </a>
                </div>
                <div
                    className="flex justify-between flex-1 items-center gap-2 border-b-1 border-l-1 border-[#E4EBFA] h-20">
                    <div className="pl-5.5">
                        <h4 className="font-semibold text-2xl">Platform Launch</h4>
                    </div>
                    <div className="flex items-center gap-2 pe-4">
                        <button
                            onClick={openTaskModal}
                            className="bg-[#635FC7] hover:bg-[#A8A4FF] text-white px-4 py-3 rounded-3xl transition-colors duration-400 cursor-pointer">
                            <i className="bi bi-plus"></i> Add New Task
                        </button>
                        <div className="relative" ref={dropdownRef}>
                            <i
                                className="bi bi-three-dots-vertical text-[#828FA3] text-[20px] cursor-pointer hover:text-[#635FC7] transition-colors duration-200"
                                onClick={toggleDropdown}
                            ></i>
                            {isDropdownOpen && (
                                <div
                                    className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60">
                                    <button
                                        className="w-full text-left px-4 py-2 text-[#828FA3] hover:bg-gray-50 transition-colors duration-200">
                                        Edit Board
                                    </button>
                                    <button
                                        className="w-full text-left px-4 py-2 text-[#EA5555] hover:bg-gray-50 transition-colors duration-200">
                                        Delete Board
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add: Task Modal */}
            {isTaskModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={closeTaskModal}
                    />
                    <div className="relative w-full max-w-lg mx-4 bg-white rounded-lg shadow-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold">Add New Task</h3>
                            <button
                                className="text-[#828FA3] hover:text-[#635FC7]"
                                onClick={closeTaskModal}
                                aria-label="Close"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                        <form onSubmit={handleCreateTask} className="space-y-4">
                            <div>
                                <label className="block text-sm text-[#828FA3] mb-2">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    placeholder="e.g. Take coffee break"
                                    className="w-full border border-[#E4EBFA] rounded-md px-3 py-2 outline-none focus:border-[#635FC7]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-[#828FA3] mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={taskDescription}
                                    onChange={(e) => setTaskDescription(e.target.value)}
                                    placeholder="e.g. It’s always good to take a break..."
                                    className="w-full border border-[#E4EBFA] rounded-md px-3 py-2 outline-none focus:border-[#635FC7] min-h-24"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-[#828FA3] mb-2">
                                    Subtasks
                                </label>
                                <div className="space-y-2">
                                    {subtasks.map((s, i) => (
                                        <div key={i} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={s}
                                                onChange={(e) => updateSubtask(i, e.target.value)}
                                                placeholder="e.g. Make coffee"
                                                className="flex-1 border border-[#E4EBFA] rounded-md px-3 py-2 outline-none focus:border-[#635FC7]"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeSubtask(i)}
                                                className="px-3 py-2 rounded-md text-[#828FA3] hover:text-[#EA5555] hover:bg-gray-50"
                                                aria-label="Remove subtask"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={addSubtask}
                                    className="mt-2 w-full bg-[#635FC71A] text-[#635FC7] hover:bg-[#635FC733] px-3 py-2 rounded-3xl font-semibold">
                                    + Add New Subtask
                                </button>
                            </div>

                            <div>
                                <label className="block text-sm text-[#828FA3] mb-2">
                                    Status
                                </label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full border border-[#E4EBFA] rounded-md px-3 py-2 outline-none focus:border-[#635FC7] bg-white">
                                    <option value="Todo">Todo</option>
                                    <option value="Doing">Doing</option>
                                    <option value="Done">Done</option>
                                    <option value="inprogress">In Progress</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#635FC7] hover:bg-[#A8A4FF] text-white px-4 py-3 rounded-3xl"
                            >
                                Create Task
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
