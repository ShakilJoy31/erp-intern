import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import CreateClientMeasurementSheet from './CreateClientMeasurementSheet';
import SubcontractorMeasurementSheet from './SubcontractorMeasurementSheet';

const Billing = () => {
    const [clientMeasurementSheet, setClientMeasurementSheet] = useState(''); 
    const [subcontractorMeasurementSheet, setsubcontractorMeasurementSheet] = useState(''); 

    const handleClientMeasurementSheet = () =>{
        setClientMeasurementSheet('ClientMeasurementSheet'); 
    }
    const handleSubcontractorMeasurementSheet = () =>{
        setsubcontractorMeasurementSheet('SubcontractorMeasurementSheet')
    }
    return (
        <div className='inventory-card'>
            {
                (!clientMeasurementSheet && !subcontractorMeasurementSheet) ? <div className='mx-16 mt-8 '>
                <div class="card flex box-shadow justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Billing</h2>
                        </div>
                        <div>
                        <div onClick={handleClientMeasurementSheet} className='flex forHover'>
                            <p className='py-4'>Client Measurement Sheet</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleSubcontractorMeasurementSheet} className='flex forHover'>
                            <p className='py-4'>Subcontractor Measurement Sheet</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        </div>
                    </div>
                </div>
            </div> : <div>
                {
                    clientMeasurementSheet && <CreateClientMeasurementSheet data={['Create', 'Edit/View/Delete', 'Register']} setClientMeasurementSheet={setClientMeasurementSheet} setsubcontractorMeasurementSheet={setsubcontractorMeasurementSheet}></CreateClientMeasurementSheet>
                }
                {
                    subcontractorMeasurementSheet && <SubcontractorMeasurementSheet data={['Create', 'Edit/View/Delete', 'Register']} setClientMeasurementSheet={setClientMeasurementSheet} setsubcontractorMeasurementSheet={setsubcontractorMeasurementSheet}></SubcontractorMeasurementSheet>
                }
            </div>
            }
        </div>
    );
};

export default Billing;