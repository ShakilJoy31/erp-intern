import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg'; 

const StakeholderMGT = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-16 mt-24'>
                <div class="card flex bg-white justify-center shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Stakeholder Management</h2>
                        </div>
                        <div className='flex mt-4'>
                            <p>Client</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Vendor</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Agency</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakeholderMGT;