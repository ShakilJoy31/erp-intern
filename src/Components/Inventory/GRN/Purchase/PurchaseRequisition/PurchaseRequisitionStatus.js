import React, { useState } from 'react';
import CreatePurchaseRequisition from './CreatePurchaseRequisition';
import EditPurchaseRequisition from './EditPurchaseRequisition';
import RegisterPurchaseRequisition from './RegisterPurchaseRequisition';
import rightArrow from './../../../../icons/Vector (8).svg'; 

const PurchaseRequisitionStatus = ({data, setPurchaseRequisitionStatus, setCreateOrder, setOrderAmendment, setOrderStatus, setRequisitionOrderLeadTimeAnalysis, setRequestforQuotation, setVendorRegister, setComparativeStatement, setPBGProformaInvoiceDetails, setBudgetVSAllocatedStatus, setPDCAndLCdetails}) => {
    const [create, setCreate] = useState(''); 
    const [editGRN, setEditGRN] = useState(''); 
    const [register, setRegister] = useState(''); 
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
           setCreate(getString); 
           setEditGRN('');
           setRegister(''); 
        }
        else if(getString === 'Edit/View/Delete'){
            setEditGRN(getString); 
            setCreate(''); 
            setRegister('');
        }
        else{
            setRegister('setRegister'); 
            setEditGRN(); 
            setCreate(''); 
        } 
    }

    const handleGetBack = () =>{
        setPurchaseRequisitionStatus(''); 
        setCreateOrder(''); 
        setOrderAmendment(''); 
        setOrderStatus(''); setRequisitionOrderLeadTimeAnalysis(''); setRequestforQuotation(''); 
        setVendorRegister(''); 
        setComparativeStatement(''); setPBGProformaInvoiceDetails(''); setBudgetVSAllocatedStatus(''); 
        setPDCAndLCdetails('');
    }
    return (
        <div>
            {
                (!create && !editGRN && ! register) ? <div className='mx-16 mt-8 '>
                    <div>
                        <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                        </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Purchase Requisition Status</h2>
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
                    create && <CreatePurchaseRequisition setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate} ></CreatePurchaseRequisition>
                }
                {
                    editGRN && <EditPurchaseRequisition setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></EditPurchaseRequisition>
                }
                {
                    register && <RegisterPurchaseRequisition setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></RegisterPurchaseRequisition>
                }
            </div>
            }
        </div>
    );
};

export default PurchaseRequisitionStatus;