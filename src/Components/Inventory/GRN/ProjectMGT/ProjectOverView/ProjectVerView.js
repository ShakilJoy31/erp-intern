import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg';
import CreatedCashFlowPlanned from './CashFlowVSactual/CreatedCashFlowPlanned';
import PlannedVSachieved from './PlannedvsAchieved/PlannedVSachieved';
import CreatedProjectContribution from './ProjectContribution/CreatedProjectContribution';
import CreateScurve from './SCurve/CreateScurve';

const ProjectVerView = ({ data, setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill }) => {
    const [sCurve, setScurve] = useState('');
    const [planned, setPlanned] = useState('');
    const [estimated, setEstimated] = useState('');
    const [cashFlow, setCashflow] = useState('');
    const [projectContribution, setProjectContribution] = useState('');
    const handleGetBack = () => {
        setProject('');
        setClientBOQ('');
        setUploadDocuments('');
        setProjectSalient('');
        setLabourProductivity('');
        setClientBill('');
        setProjectCost('');
        setPurchaseRequisition('');
        setInternalProgress('');
        setClientProgress('');
        setProjectOverView('');
        setWeeklyFund('');
        setPaymentProposal('');
        setClientBillStatus('');
        setVendorBill('');
    }
    const handleCreate = (getString) => {
        if (getString === 'S-Curve') {
            setScurve(getString);
            setPlanned('');
            setEstimated('');
            setCashflow('');
            setProjectContribution('');
        }
        else if (getString === 'Planned Vs Achieved Progress') {
            setScurve('');
            setPlanned(getString);
            setEstimated('');
            setCashflow('');
            setProjectContribution('');
        }
        else if (getString === 'Estimated Cost VS Actual Cost') {
            setScurve('');
            setPlanned('');
            setEstimated('');
            setCashflow('');
            setProjectContribution('');
        }
        else if (getString === 'Cash Flow Planned Vs Actual') {
            setScurve('');
            setPlanned('');
            setEstimated('');
            setCashflow(getString);
            setProjectContribution('');
        }
        else {

            setScurve('');
            setPlanned('');
            setEstimated('');
            setCashflow('');
            setProjectContribution(getString);
        }
    }
    return (
        <div className='  mx-16 mt-24'>
            {
                (!sCurve && !planned && !estimated && !cashFlow && !projectContribution) ? <div>
                <div>
                <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">S-Curve</h2>
                    </div>
                        </div>
                        
                        {
                            data.map(singleData => <div>
                                <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
                                    <p className='my-2'>{singleData}</p>
                                    <img src={rightArrow} alt="" />
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
            </div> : <div>
                {
                    sCurve && <CreateScurve setScurve={setScurve} setPlanned={setPlanned} setEstimated={setEstimated} setCashflow={setCashflow} setProjectContribution={setProjectContribution} data={['Create', 'Edit/View/Delete']}></CreateScurve>
                }
                {
                    planned && <PlannedVSachieved setScurve={setScurve} setPlanned={setPlanned} setEstimated={setEstimated} setCashflow={setCashflow} setProjectContribution={setProjectContribution} data={['Create', 'Edit/View/Delete']}></PlannedVSachieved>
                }
                {
                    cashFlow && <CreatedCashFlowPlanned setScurve={setScurve} setPlanned={setPlanned} setEstimated={setEstimated} setCashflow={setCashflow} setProjectContribution={setProjectContribution}></CreatedCashFlowPlanned>
                }
                {
                    projectContribution && <CreatedProjectContribution setScurve={setScurve} setPlanned={setPlanned} setEstimated={setEstimated} setCashflow={setCashflow} setProjectContribution={setProjectContribution}></CreatedProjectContribution>
                }
                
            </div>
            }
        </div>
    );
};

export default ProjectVerView;