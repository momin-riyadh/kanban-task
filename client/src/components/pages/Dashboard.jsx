import React from 'react';
import PageLayout from "../layout/PageLayout.jsx";

const Dashboard = () => {
    return (
        <PageLayout>
            <div className="dashboard h-full">

                <div  className="flex flex-col items-center justify-center h-full vh-full">
                    <div className="font-semibold text-xl mb-3 text-[#828FA3]">This board is empty. Create a new column
                        to get
                        started.
                    </div>
                    <button className="bg-[#635FC7] text-white px-4 py-3 rounded-3xl">
                        <i className="bi bi-plus"></i> Add New Task
                    </button>
                </div>

            </div>
        </PageLayout>
    );
};

export default Dashboard;
