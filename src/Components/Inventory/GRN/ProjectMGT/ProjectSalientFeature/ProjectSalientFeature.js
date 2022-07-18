import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import AllSalient from './CreateSalient/AllSalient';
import AllEditedSalient from './EditSalient/AllEditedSalient';
import AllRegisteredSalient from './RegisterSalient/AllRegisteredSalient';

const ProjectSalientFeature = ({data, setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill}) => {
    const [create, setCreate] = useState(''); 
    const [edit, setEdit] = useState(''); 
    const [register, setRegister] = useState('');
    const handleGetBack = () =>{
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
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
           setCreate(getString); 
           setEdit('');
           setRegister(''); 
        }
        else if(getString === 'Edit/View/Delete'){
            setEdit(getString); 
            setCreate(''); 
            setRegister('');
        }
        else{
            setRegister(getString); 
            setEdit(); 
            setCreate(''); 
        } 
    }
    return (
        <div className='mx-16 mt-24'>
                    {
                        (!create && !register && !edit) ? <div>
                        <div>
                            <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                            </div>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                        
                            <div>
                            <div className='flex items-center mt-4'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Billing Schedule</h2>
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
                                create && <AllSalient setRegister={setRegister}  setEdit={setEdit} setCreate={setCreate} ></AllSalient>
                            }
                            {
                                edit && <AllEditedSalient setRegister={setRegister}  setEdit={setEdit} setCreate={setCreate}></AllEditedSalient>
                            }
                            {
                                register && <AllRegisteredSalient setRegister={setRegister}  setEdit={setEdit} setCreate={setCreate}></AllRegisteredSalient>
                            }
                        </div>
                    }
            </div>
    );
};

export default ProjectSalientFeature;