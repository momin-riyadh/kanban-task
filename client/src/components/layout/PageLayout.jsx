import Header from './Header';
import Sidebar from './Sidebar';

function PageLayout({children}) {
    return (
        <div className="h-screen w-full flex flex-col bg-[#f4f7fd]">
            <Header/>
            <div className="flex flex-1">
                <Sidebar/>
                {/* Main Content */}
                <div className="flex-1 p-4 mt-20">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageLayout;
