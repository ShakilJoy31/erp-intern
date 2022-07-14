import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg'; 

const ProjectMGT = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-16 mt-24'>
                <div class="card flex justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN flex'></div>
                            <h2 class="card-title">Project Management Module</h2>
                        </div>
                        <div className='flex mt-4'>
                            <p>Project</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Client BOQ</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Upload Documents</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Project Salient Feature</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Labour Productivity Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Client Bill Vs Subcontractor Bill Reconciliation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Project Cost Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Purchase Requisition</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Internal Progress Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Client Progress Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Project Overview</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Weekly Site Fund</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Payment Proposal</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Client Bill Status</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Vendor Bill Status</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectMGT;