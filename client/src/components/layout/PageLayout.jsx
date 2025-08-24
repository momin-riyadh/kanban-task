import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';

function PageLayout({children}) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const handleSidebarToggle = (isVisible) => {
        setIsSidebarVisible(isVisible);
    };

    return (
        <div className="h-screen w-full flex flex-col bg-[#f4f7fd]">
            <Header/>
            <div className="flex flex-1">
                <Sidebar onSidebarToggle={handleSidebarToggle}/>
                {/* Main Content */}
                <div className={`flex-1 p-4 me-4 mt-20 overflow-x-auto transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isSidebarVisible ? 'ml-[285px]' : 'ml-0'
                }`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageLayout;
