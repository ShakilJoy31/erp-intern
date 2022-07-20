import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import ClientBillStatus from './ClientBillStatus/ClientBillStatus';
import CreatedCliendBillStatus from './ClientBillStatus/CreatedCliendBillStatus';
import AllSubConTractorReport from './ClientBillSubContractorBill/AllSubConTractorReport';
import ClientBOQ from './ClientBOQ/ClientBOQ';
import ClientProgressReport from './ClientProgressReport/ClientProgressReport';
import InternalProgressReport from './InternalProgressReport/InternalProgressReport';
import LabourProductivityReport from './LabourProductivityReport/LabourProductivityReport';
import PaymentProposal from './PaymentProposal/PaymentProposal';
import Project from './Project/Project';
import ProjectCostReport from './ProjectCostReport/ProjectCostReport';
import ProjectVerView from './ProjectOverView/ProjectVerView';
import ProjectSalientFeature from './ProjectSalientFeature/ProjectSalientFeature';
import PurchaseRequisition from './PurchaseRequisition/PurchaseRequisition';
import UploadDocuments from './UploadDocuments/UploadDocuments';
import CreatedVendorBill from './VendorBill/CreatedVendorBill';
import WeeklySiteFund from './WeeklySiteFund/WeeklySiteFund';

const ProjectMGT = () => {
    const [project, setProject] = useState('');
    const [clientBOQ, setClientBOQ] = useState('');
    const [uploadDocuments, setUploadDocuments] = useState('');
    const [projectSalient, setProjectSalient] = useState('');
    const [labourProductivity, setLabourProductivity] = useState('');
    const [clientBill, setClientBill] = useState('');
    const [projectCost, setProjectCost] = useState('');
    const [purchaseRequisition, setPurchaseRequisition] = useState('');
    const [internalProgress, setInternalProgress] = useState('');
    const [clientProgress, setClientProgress] = useState('');
    const [projectOverview, setProjectOverView] = useState('');
    const [weeklyFund, setWeeklyFund] = useState('');
    const [paymentProposal, setPaymentProposal] = useState('');
    const [clientBillStatus, setClientBillStatus] = useState('');
    const [vendorBill, setVendorBill] = useState('');
    const handleProject = () => {
        setProject('setProject')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleClientBOQ = () => {
        setProject('')
        setClientBOQ('setClientBOQ')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleUploadDocuments = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('setUploadDocuments')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleProjectSalientFeature = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('setProjectSalient')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleLabourProductivityReport = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('setLabourProductivity')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleClientBillVsSubcontractorBillReconciliation = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('setClientBill')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleProjectCostReport = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('setProjectCost')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handlePurchaseRequisition = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('setPurchaseRequisition')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleInternalProgressReport = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('setInternalProgress')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleClientProgressReport = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('setClientProgress')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleProjectOverview = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('setProjectOverView')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handleWeeklySiteFund = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('setWeeklyFund')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('')
    }
    const handlePaymentProposal = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('setPaymentProposal')
        setClientBillStatus('')
        setVendorBill('')
    }

    const handleClientBillStatus = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('setClientBillStatus')
        setVendorBill('')
    }
    const handleVendorBillStatus = () => {
        setProject('')
        setClientBOQ('')
        setUploadDocuments('')
        setProjectSalient('')
        setLabourProductivity('')
        setClientBill('')
        setProjectCost('')
        setPurchaseRequisition('')
        setInternalProgress('')
        setClientProgress('')
        setProjectOverView('')
        setWeeklyFund('')
        setPaymentProposal('')
        setClientBillStatus('')
        setVendorBill('setVendorBill')
    }
    return (
        <div className='inventory-card'>
            {
                (!project && !clientBOQ && !uploadDocuments && !projectSalient && !labourProductivity && !clientBill && !projectCost && !purchaseRequisition && !internalProgress && !clientProgress && !projectOverview && !weeklyFund && !paymentProposal && !vendorBill && !clientBillStatus) ? <div className='  mx-16 mt-24'>
                <div class="card flex justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='flex GRN'></div>
                            <h2 class="card-title">Project Management Module</h2>
                        </div>
                        <div onClick={handleProject} className='flex forHover'>
                            <p className='my-2'>Project</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleClientBOQ} className='flex forHover'>
                            <p className='my-2'>Client BOQ</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleUploadDocuments} className='flex forHover'>
                            <p className='my-2'>Upload Documents</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleProjectSalientFeature} className='flex forHover'>
                            <p className='my-2'>Project Salient Feature</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleLabourProductivityReport} className='flex forHover'>
                            <p className='my-2'>Labour Productivity Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleClientBillVsSubcontractorBillReconciliation} className='flex forHover'>
                            <p className='my-2'>Client Bill Vs Subcontractor Bill Reconciliation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleProjectCostReport} className='flex forHover'>
                            <p className='my-2'>Project Cost Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handlePurchaseRequisition} className='flex forHover'>
                            <p className='my-2'>Purchase Requisition</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleInternalProgressReport} className='flex forHover'>
                            <p className='my-2'>Internal Progress Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleClientProgressReport} className='flex forHover'>
                            <p className='my-2'>Client Progress Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleProjectOverview} className='flex forHover'>
                            <p className='my-2'>Project Overview</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleWeeklySiteFund} className='flex forHover'>
                            <p className='my-2'>Weekly Site Fund</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handlePaymentProposal} className='flex forHover'>
                            <p className='my-2'>Payment Proposal</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleClientBillStatus} className='flex forHover'>
                            <p className='my-2'>Client Bill Status</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleVendorBillStatus} className='flex forHover'>
                            <p className='my-2'>Vendor Bill Status</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />

                    </div>
                </div>
            </div> : <div>
            {
                    project && <Project setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Create', 'Edit/View/Register', 'Register']}></Project>
                }
                {
                    clientBOQ && <ClientBOQ setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Create', 'Edit/View/Register']}></ClientBOQ>
                }
                {
                    uploadDocuments && <UploadDocuments setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Add Documents', 'View Documents']}></UploadDocuments>
                }
                {
                    projectSalient && <ProjectSalientFeature setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Create', 'Edit/View/Register', 'Register']}></ProjectSalientFeature>
                }
                {
                    labourProductivity && <LabourProductivityReport setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill}></LabourProductivityReport> 
                    // Different style.
                }
                {
                    projectCost && <ProjectCostReport setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill}></ProjectCostReport>
                }
                {
                    purchaseRequisition && <PurchaseRequisition setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Create', 'Edit/View/Register', 'Register']}></PurchaseRequisition>
                }
                {
                    internalProgress && <InternalProgressReport setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Create', 'Edit/View/Register']}></InternalProgressReport>
                }
                {
                    clientProgress && <ClientProgressReport setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill}></ClientProgressReport>
                    // Different Style
                }
                {
                    projectOverview && <ProjectVerView setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['S-Curve', 'Planned Vs Achieved Progress', 'Estimated Cost VS Actual Cost', 'Cash Flow Planned Vs Actual', 'Project Contribution']}></ProjectVerView>
                }
                {
                    weeklyFund && <WeeklySiteFund setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Create', 'Edit/View/Delete']}></WeeklySiteFund>
                }
                {
                    paymentProposal && <PaymentProposal setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill} data={['Create', 'Edit/View/Register']}></PaymentProposal>
                }
                {
                    clientBill && <AllSubConTractorReport setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill}></AllSubConTractorReport>
                }

                {
                    clientBillStatus && <CreatedCliendBillStatus setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill}></CreatedCliendBillStatus>
                }
                {
                    vendorBill && <CreatedVendorBill setProject={setProject} setClientBOQ={setClientBOQ} setUploadDocuments={setUploadDocuments} setProjectSalient={setProjectSalient} setLabourProductivity={setLabourProductivity} setClientBill={setClientBill} setProjectCost={setProjectCost} setPurchaseRequisition={setPurchaseRequisition} setInternalProgress={setInternalProgress} setClientProgress={setClientProgress} setProjectOverView={setProjectOverView} setWeeklyFund={setWeeklyFund} setPaymentProposal={setPaymentProposal} setClientBillStatus={setClientBillStatus} setVendorBill={setVendorBill}></CreatedVendorBill>
                }
            </div>
            }
        </div>
    );
};

export default ProjectMGT;