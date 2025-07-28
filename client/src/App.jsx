import {LOGO} from './assets/images/logo.svg'
import './App.css'

function App() {


    return (
        <>
            <div className="h-screen w-full flex flex-col bg-[#f4f7fd]">
                {/* Top Navigation Bar */}
                <div className="h-20 bg-white fixed top-0 left-0 right-0 z-50">
                    <a href="">
                        <img src={LOGO} alt="Logo" className="h-16 mx-auto mt-2"/>
                    </a>
                </div>

                <div className="flex flex-1">
                    {/* Sidebar */}
                    <div className="w-72 bg-white h-full">
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 mt-22">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi autem corporis eaque
                        eligendi id ipsam maiores, modi rerum veritatis? Dolores fuga laudantium neque quisquam sit.
                        Culpa ipsam iure neque.
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
