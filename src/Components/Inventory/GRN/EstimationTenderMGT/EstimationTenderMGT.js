import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg'; 

const EstimationTenderMGT = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-16 mt-24'>
                <div class="card flex bg-white justify-center shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'>       
                            </div>
                            <h2 class="card-title">Estimation and Tendering</h2>
                        </div>
                        <div className='flex mt-4 forHover'>
                            <p>New Tender</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4 forHover'>
                            <p>BOQ</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4 forHover'>
                            <p>Estimation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4 forHover'>
                            <p>Billing Schedule</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4 forHover'>
                            <p>Generate Bidding Overview</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstimationTenderMGT;