import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import AllBOQ from './CreateBOQ/AllBOQ';
import AllEditedBOQ from './EditBOQ/AllEditedBOQ';

const ClientBOQ = ({data, setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill}) => {
    const [create, setCreate] = useState(''); 
    const [edit, setEdit] = useState(''); 
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
           
        }
        else{
            setEdit(getString); 
            setCreate(''); 
        }
        
    }
    return (
        <div className='mx-16 mt-24'>
                    {
                        (!create && !edit) ? <div>
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
                                create && <AllBOQ setCreate={setCreate} setEdit={setEdit}></AllBOQ>
                            }
                            {
                                edit && <AllEditedBOQ setCreate={setCreate} setEdit={setEdit}></AllEditedBOQ>
                            }
                        </div>
                    }
            </div>
    );
};

export default ClientBOQ;