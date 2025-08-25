import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PageLayout from './components/layout/PageLayout';
import Dashboard from "./components/pages/Dashboard.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                {/*<Route path="/" element={<Navigate to="/dashboard" replace/>}/>*/}
            </Routes>
        </Router>

    );
}

export default App;
