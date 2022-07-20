import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import BillingSchedule from './BillingSchedule/BillingSchedule';
import DailyMeasurementSheet from './DailyMeasurementSheet/DailyMeasurementSheet';
import LiabilityStatement from './LiabilityStatement/LiabilityStatement';
import PrestartStatement from './PrestartEstimate/PrestartStatement';
import ProjectMilestones from './ProjectMilestones/ProjectMilestones';
import PRPOschedule from './PRPOschedule/PRPOschedule';

const Planning = () => {
    const [dailyMeasurement, setDailyMeasurement] = useState('');
    const [PRPO, setPRPO] = useState('');
    const [prestart, setPrestart] = useState('');
    const [billing, setBilling] = useState('');
    const [project, setProject] = useState('');
    const [liability, setLiability] = useState('');

    const dailyMeasurementSheet = () => {
        setDailyMeasurement('setDailyMeasurement')
        setPRPO('')
        setPrestart('')
        setBilling('')
        setProject('')
        setLiability('')

    }
    const pRPOSchedule = () => {
        setDailyMeasurement('')
        setPRPO('setPRPO')
        setPrestart('')
        setBilling('')
        setProject('')
        setLiability('')
    }
    const preStartEstimate = () => {
        setDailyMeasurement('')
        setPRPO('')
        setPrestart('setPrestart')
        setBilling('')
        setProject('')
        setLiability('')
    }
    const billingSchedule = () => {
        setDailyMeasurement('')
        setPRPO('')
        setPrestart('')
        setBilling('setBilling')
        setProject('')
        setLiability('')
    }
    const projectMilestones = () => {
        setDailyMeasurement('')
        setPRPO('')
        setPrestart('')
        setBilling('')
        setProject('setProject')
        setLiability('')
    }
    const liabilityStatement = () => {
        setDailyMeasurement('')
        setPRPO('')
        setPrestart('')
        setBilling('')
        setProject('')
        setLiability('setLiability')
    }

    return (
        <div className='inventory-card'>
            {
                (!dailyMeasurement && !PRPO && !prestart && !billing && !project && !liability) ? <div className='  mx-16 mt-24'>
                <div class="card bg-white flex justify-center shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Planning</h2>
                        </div>
                        <div onClick={dailyMeasurementSheet} className='flex forHover'>
                            <p className='my-2'>Daily Measurement Sheet for Subcontractor</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={pRPOSchedule} className='flex forHover'>
                            <p className='my-2'>PR-PO Schedule</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={preStartEstimate} className='flex forHover'>
                            <p className='my-2'>Pre Start Estimate</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={billingSchedule} className='flex forHover'>
                            <p className='my-2'>Billing Schedule</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={projectMilestones} className='flex forHover'>
                            <p className='my-2'>Project Milestones</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={liabilityStatement} className='flex forHover'>
                            <p className='my-2'>Liability Statement</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div> : <div>
                {
                    dailyMeasurement && <DailyMeasurementSheet setDailyMeasurement={setDailyMeasurement} setPRPO={setPRPO} setPrestart={setPrestart} setBilling={setBilling} setProject={setProject} setLiability={setLiability} data={['Create', 'Edit/View/Delete', 'Register']}></DailyMeasurementSheet>
                }
                {
                    PRPO && <PRPOschedule setDailyMeasurement={setDailyMeasurement} setPRPO={setPRPO} setPrestart={setPrestart} setBilling={setBilling} setProject={setProject} setLiability={setLiability} data={['Create', 'Edit/View/Delete', 'Register']}></PRPOschedule>
                }
                {
                    prestart && <PrestartStatement setDailyMeasurement={setDailyMeasurement} setPRPO={setPRPO} setPrestart={setPrestart} setBilling={setBilling} setProject={setProject} setLiability={setLiability} data={['Create Fresh Estimate', 'Copy From Tender Estimation']}></PrestartStatement>
                }
                {
                    billing && <BillingSchedule setDailyMeasurement={setDailyMeasurement} setPRPO={setPRPO} setPrestart={setPrestart} setBilling={setBilling} setProject={setProject} setLiability={setLiability} data={['New Bill', 'Copy From Ref Billing Schedule']}></BillingSchedule>
                }
                {
                    project && <ProjectMilestones setDailyMeasurement={setDailyMeasurement} setPRPO={setPRPO} setPrestart={setPrestart} setBilling={setBilling} setProject={setProject} setLiability={setLiability} data={['Create', 'Edit/View/Delete', 'Register']}></ProjectMilestones>
                }
                {
                    liability && <LiabilityStatement setDailyMeasurement={setDailyMeasurement} setPRPO={setPRPO} setPrestart={setPrestart} setBilling={setBilling} setProject={setProject} setLiability={setLiability} data={['Create', 'Edit/View/Delete', 'Register']}></LiabilityStatement>
                }
            </div>
            }
        </div>
    );
};

export default Planning;