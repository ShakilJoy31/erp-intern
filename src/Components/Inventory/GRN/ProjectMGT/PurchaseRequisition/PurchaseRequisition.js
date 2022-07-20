import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreatePurchaseRequisition from './CreatePurchaseRequisition';
import EditPurchaseRequisition from './EditPurchaseRequisition';
import RegisterPurchaseRequisition from './RegisterPurchaseRequisition';

const PurchaseRequisition = ({data, setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill}) => {
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
        else if(getString === 'Edit/View/Register'){
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
        <div className='  mx-16 mt-24'>
                    {
                        (!create && !edit && !register) ? <div>
                        <div>
                            <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                            </div>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                        
                            <div>
                            <div className='flex items-center mt-4'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Purchase Requisition</h2>
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
                                create && <CreatePurchaseRequisition setRegister={setRegister} setEdit={setEdit} setCreate={setCreate} ></CreatePurchaseRequisition>
                            }
                            {
                                edit && <EditPurchaseRequisition setRegister={setRegister} setEdit={setEdit} setCreate={setCreate}></EditPurchaseRequisition>
                            }
                            {
                                register && <RegisterPurchaseRequisition setRegister={setRegister} setEdit={setEdit} setCreate={setCreate}></RegisterPurchaseRequisition>
                            }
                        </div>
                    }
            </div>
    );
};

export default PurchaseRequisition;