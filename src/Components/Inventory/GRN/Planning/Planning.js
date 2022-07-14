import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg';

const Planning = () => {
    return (
        <div>
            <div className='mx-16 mt-24'>
                <div class="card bg-white flex inventory-card justify-center shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Planning</h2>
                        </div>
                        <div className='flex mt-4'>
                            <p>Daily Measurement Sheet for Subcontractor</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>PR-PO Schedule</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Pre Start Estimate</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Billing Schedule</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Project Milestones</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Liability Statement</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Planning;