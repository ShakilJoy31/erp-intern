import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg';

const HumanResources = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-16 mt-24'>
                <div class="card flex justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Human Resources</h2>
                        </div>
                        <div className='flex mt-4'>
                            <p>Employees Details</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Attendance</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Leave Management</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Offer Letter</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Service Record Letter</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Handover Formal Letter</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Payroll</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Daily Labour Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanResources;