import {useState} from 'react'
import './App.css'

function App() {


    return (
        <>
            <div className="h-screen w-full flex flex-col">
                {/* Top Navigation Bar */}
                <div className="h-16 bg-gray-800 fixed top-0 left-0 right-0 z-50">
                </div>

                <div className="flex flex-1 bg-gray-200">
                    {/* Sidebar */}
                    <div className="w-72 bg-gray-100 h-full">
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 mt-3">
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
