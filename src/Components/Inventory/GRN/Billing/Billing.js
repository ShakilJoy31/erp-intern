import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg';

const Billing = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-16 mt-24'>
                <div class="card flex justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Billing</h2>
                        </div>
                        <div className='flex mt-4'>
                            <p>Client Measurement Sheet</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Subcontractor Measurement Sheet</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;