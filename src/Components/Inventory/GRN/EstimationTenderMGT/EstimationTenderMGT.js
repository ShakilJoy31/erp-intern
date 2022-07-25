import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import BillingSchedule from './BillingSchedule/BillingSchedule';
import BOQ from './BOQ/BOQ';
import Estimation from './Estimation/Estimation';
import Tender from './Tender/Tender';

const EstimationTenderMGT = () => {
    const [tender, setTender] = useState('')
    const [boq, setBoq] = useState('')
    const [estimation, setEstimation] = useState('')
    const [billing, setBilling] = useState('')
    const handleTender = () => {
        setTender('setTender');
        setBoq('');
        setEstimation('');
        setBilling('');
    }
    const handleBOQ = () => {
        setTender('');
        setBoq('setBoq');
        setEstimation('');
        setBilling('');
    }
    const handleEstimation = () => {
        setTender('');
        setBoq('');
        setEstimation('setEstimation');
        setBilling('');
    }
    const handleBillingSchedile = () => {
        setTender('');
        setBoq('');
        setEstimation('');
        setBilling('setBilling');
    }
    return (
        <div className='inventory-card'>
            {
                (!tender && !boq && !estimation && !billing) ? <div className='mx-16 mt-8 '>
                <div class="card flex box-shadow bg-white justify-center shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'>
                            </div>
                            <h2 class="card-title">Estimation and Tendering</h2>
                        </div>
                        <div>
                        <div onClick={handleTender} className='flex forHover'>
                            <p className='py-4'>New Tender</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleBOQ} className='flex forHover'>
                            <p className='py-4'>BOQ</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleEstimation} className='flex forHover'>
                            <p className='py-4'>Estimation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleBillingSchedile} className='flex forHover'>
                            <p className='py-4'>Billing Schedule</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div className='flex forHover'>
                            <p className='py-4'>Generate Bidding Overview</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        </div>
                    </div>
                </div>
            </div> : <div>
                {
                    tender && <Tender setTender={setTender} setBoq={setBoq} setEstimation={setEstimation} setBilling={setBilling} data={['Create', 'Edit/View/Delete', 'Register']}></Tender>
                }
                {
                    boq && <BOQ setTender={setTender} setBoq={setBoq} setEstimation={setEstimation} setBilling={setBilling} data={['Create', 'Edit/View/Delete']}></BOQ>
                }
                {
                    estimation && <Estimation setTender={setTender} setBoq={setBoq} setEstimation={setEstimation} setBilling={setBilling} data={['Rate analysis Master data', 'Tender Estimation', 'Item analysis']}></Estimation>
                }
                {
                    billing && <BillingSchedule setTender={setTender} setBoq={setBoq} setEstimation={setEstimation} setBilling={setBilling} data={['Create', 'Edit/View/Delete', 'Register']}></BillingSchedule>
                }
            </div>
            }
        </div>
    );
};

export default EstimationTenderMGT;