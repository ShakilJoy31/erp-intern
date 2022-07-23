import React from 'react';

const ExecutiveDashboard = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-12 mt-24'>
            <div class="card flex justify-center bg-white shadow-2xl">
                <div class="card-body">
                    <div className='flex'>
                    <div className='flex GRN'></div>
                    <h2 class="card-title">Executive Dashboard</h2>
                    </div>
                    <p className='forHover'>Create</p>
                    <hr />
                    <p className='forHover'>Edit/View</p>
                    <hr />
                    <p className='forHover'>Register</p>
                </div>       
            </div>
        </div>
        </div>
    );
};

export default ExecutiveDashboard;