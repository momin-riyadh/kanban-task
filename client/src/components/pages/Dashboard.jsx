import React from 'react';
import Card from "../Card.jsx";
import PageLayout from "../layout/PageLayout.jsx";

const Dashboard = () => {
    return (
        <PageLayout>
            <div className="dashboard h-full p-4">
                {/*Board Columns*/}
                <div className="flex flex-nowrap gap-4">
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                To Do (1)
                            </h2>
                        </div>
                        <div className="column-body flex flex-col gap-4">
                            <Card className="max-w-md flex-shrink-0">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                <p className="text-gray-600">This is the content of the card. You can put any content here.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                To Do (1)
                            </h2>
                        </div>
                        <div className="column-body">
                            <Card className="max-w-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                <p className="text-gray-600">This is the content of the card. You can put any content here.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                To Do (1)
                            </h2>
                        </div>
                        <div className="column-body">
                            <Card className="max-w-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                <p className="text-gray-600">This is the content of the card. You can put any content here.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                To Do (1)
                            </h2>
                        </div>
                        <div className="column-body">
                            <Card className="max-w-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                <p className="text-gray-600">This is the content of the card. You can put any content here.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                To Do (1)
                            </h2>
                        </div>
                        <div className="column-body">
                            <Card className="max-w-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                <p className="text-gray-600">This is the content of the card. You can put any content here.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                To Do (1)
                            </h2>
                        </div>
                        <div className="column-body">
                            <Card className="max-w-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                <p className="text-gray-600">This is the content of the card. You can put any content here.</p>
                            </Card>
                        </div>
                    </div>
                    <div className="single-column flex-shrink-0 w-2xs">
                        <div className="column-header text-center">
                            <h2 className="text-[16px] font-semibold mb-4 text-[#828FA3] uppercase">
                                To Do (1)
                            </h2>
                        </div>
                        <div className="column-body">
                            <Card className="max-w-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                                <p className="text-gray-600">This is the content of the card. You can put any content here.</p>
                            </Card>
                        </div>
                    </div>

                    {/*Make New Column*/}
                    <div className="single-column make-new-column flex-shrink-0 w-2xs grid place-items-center min-h-[calc(100vh-160px)] bg-[#E9EFFA]">
                            <h3 className="text-[24px] h-lh font-semibold text-[#635FC7]"> + New Column</h3>
                    </div>
                    {/*End Make New Column*/}
                </div>
                {/*End Board Columns*/}

                {/*State: When No cards are added to the board*/}
                <div className="hidden flex flex-col items-center justify-center h-full vh-full">
                    <div className="font-semibold text-xl mb-3 text-[#828FA3]">This board is empty. Create a new column
                        to get
                        started.
                    </div>
                    <button
                        className="bg-[#635FC7] hover:bg-[#A8A4FF] text-white px-4 py-3 rounded-3xl transition-colors duration-400 cursor-pointer">
                        <i className="bi bi-plus"></i> Add New Task
                    </button>
                </div>
                {/*End State*/}

            </div>
        </PageLayout>
    );
};

export default Dashboard;
