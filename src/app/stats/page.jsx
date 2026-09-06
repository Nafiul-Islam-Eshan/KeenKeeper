import React from 'react';

const StatsPage = () => {
    return (
        <div className='my-20'>
            <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>
            <div className="bg-white p-8 space-y-6">
                <h3 className="text-[#244D3F] text-lg">By Interaction Type</h3>

                {/* Piechart */}
                <div className="">
                    
                </div>

                {/* Defination */}
                <div className="flex gap-6 justify-center">
                    <div className="">
                        <span className="bg-[#7E35E1] w-2 h-2 inline-block mr-1 rounded-full"></span>
                        <span className='text-gray-600'>Call</span>
                    </div>
                    <div className="">
                        <span className="bg-[#244D3F] w-2 h-2 inline-block mr-1 rounded-full"></span>
                        <span className='text-gray-600'>Text</span>
                    </div>
                    <div className="">
                        <span className="bg-[#37A163]  w-2 h-2 inline-block mr-1 rounded-full"></span>
                        <span className='text-gray-600'>Video</span>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default StatsPage;