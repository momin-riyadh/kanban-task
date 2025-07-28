import LOGO from './assets/images/logo.svg'
import './App.css'

function App() {


    return (
        <>
            <div className="h-screen w-full flex flex-col bg-[#f4f7fd]">

                {/* Top Navigation Bar */}
                <div className="h-20 bg-white fixed top-0 left-0 right-0 z-50">

                    <div className="px-4 py-2 flex justify-between items-center">
                        <a href="" className="w-70">
                            <img width={120} src={LOGO} alt="Logo" className="h-16"/>
                        </a>
                        <button className=" bg-[#635FC7] text-white px-4 py-2 rounded-3xl"> + Add New Task </button>
                    </div>

                </div>

                <div className="flex flex-1">
                    {/* Sidebar */}
                    <div className="w-72 bg-white h-full border-r-1 border-[#E4EBFA] pt-20">
                        <div className="p-4">
                            <h2 className="text-[12px] font-semibold mb-4 text-[#828FA3] uppercase">All Boards (3)</h2>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-[#635FC7] hover:underline">Home</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Tasks</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Projects</a></li>
                                <li><a href="#" className="text-gray-600 hover:underline">Settings</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 mt-22">

                    </div>
                </div>
            </div>
        </>
    )
}

export default App
