import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PageLayout from './components/layout/PageLayout';

function App() {
    return (
        <PageLayout>
            {/* Your main content goes here */}
            <div>
                <h1 className="text-2xl font-bold mb-4">Welcome to Kanban Board</h1>
                <p className="text-gray-600">Your kanban content will go here...</p>
            </div>
        </PageLayout>
    );
}

export default App;
