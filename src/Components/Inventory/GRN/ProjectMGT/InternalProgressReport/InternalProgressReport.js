import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg';
import AllCreatedInternalProgress from './AllCreatedInternalProgress';
import AllEditedInternalProgress from './AllEditedInternalProgress';

const InternalProgressReport = ({ data, setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill }) => {
    const [create, setCreate] = useState('');
    const [edit, setEdit] = useState('');
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
        if (getString === 'Create') {
            setCreate(getString);
            setEdit('');
        }
        else {
            setEdit(getString);
            setCreate('');
        }
    }
    return (
        <div className='mx-16 mt-8'>
            {
                (!create && !edit) ? <div>
                <div>
                            <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                            </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                        
                            <div>
                            <div className='flex items-center mt-4'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Internal Progress Report</h2>
                        </div>
                            </div>
                            
                            {
                                data.map(singleData => <div>
                                    <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
                                        <p className='py-4'>{singleData}</p>
                                        <img src={rightArrow} alt="" />
                                    </div>
                                    <hr className='w-screen line'></hr>
                                </div>)
                            }
                        </div>
                    </div>
                </div> : <div>
                    {
                        create && <AllCreatedInternalProgress setEdit={setEdit} setCreate={setCreate}></AllCreatedInternalProgress>
                    }
                    {
                        edit && <AllEditedInternalProgress setEdit={setEdit} setCreate={setCreate}></AllEditedInternalProgress>
                    }
                </div>
            }
        </div>
    );
};

export default InternalProgressReport;