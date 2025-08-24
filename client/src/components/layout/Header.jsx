import LOGO from '../../assets/images/logo.svg';
import React from "react";

function Header() {
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
                    <i className="bi bi-three-dots-vertical text-[#828FA3] text-[20px] cursor-pointer"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
