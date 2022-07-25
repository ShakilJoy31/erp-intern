import React from 'react';

const ExecutiveDashboard = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-16 mt-8'>
            <div class="card flex box-shadow justify-center bg-white box-shadow shadow-2xl">
                <div class="card-body">
                    <div className='flex'>
                    <div className='flex GRN'></div>
                    <h2 class="card-title">Executive Dashboard</h2>
                    </div>
                    <div>
                    <p className='py-4 forHover'>Create</p>
                    <hr className='w-screen line'></hr>
                    <p className='py-4 forHover'>Edit/View</p>
                    <hr className='w-screen line'></hr>
                    <p className='py-4 forHover'>Register</p>
                    <hr className='w-screen line'></hr>
                    </div>
                </div>       
            </div>
        </div>
        </div>
    );
};

export default ExecutiveDashboard;