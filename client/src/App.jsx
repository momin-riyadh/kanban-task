import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PageLayout from './components/layout/PageLayout';

function App() {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </PageLayout>
        </Router>

    );
}

export default App;
