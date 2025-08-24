import LOGO from '../../assets/images/logo.svg';
import React, { useState, useRef, useEffect } from "react";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="h-20 bg-white fixed top-0 left-0 right-0 z-50">
            <div className="px-4 py-2 flex justify-between items-center">
                <a href="" className="w-70">
                    <img width={120} src={LOGO} alt="Logo" className="h-16"/>
                </a>
                <div className="flex items-center gap-2">
                    <button
                        className="bg-[#635FC7] hover:bg-[#A8A4FF] text-white px-4 py-3 rounded-3xl transition-colors duration-400 cursor-pointer">
                        <i className="bi bi-plus"></i> Add New Task
                    </button>
                    <div className="relative" ref={dropdownRef}>
                        <i
                            className="bi bi-three-dots-vertical text-[#828FA3] text-[20px] cursor-pointer hover:text-[#635FC7] transition-colors duration-200"
                            onClick={toggleDropdown}
                        ></i>
                        {isDropdownOpen && (
                            <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60">
                                <button className="w-full text-left px-4 py-2 text-[#828FA3] hover:bg-gray-50 transition-colors duration-200">
                                    Edit Board
                                </button>
                                <button className="w-full text-left px-4 py-2 text-[#EA5555] hover:bg-gray-50 transition-colors duration-200">
                                    Delete Board
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
