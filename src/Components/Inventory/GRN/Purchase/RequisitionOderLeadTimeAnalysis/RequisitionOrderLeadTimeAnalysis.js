import React, { useState } from 'react';

const RequisitionOrderLeadTimeAnalysis = ({data, setPurchaseRequisitionStatus, setCreateOrder, setOrderAmendment, setOrderStatus, setRequisitionOrderLeadTimeAnalysis, setRequestforQuotation, setVendorRegister, setComparativeStatement, setPBGProformaInvoiceDetails, setBudgetVSAllocatedStatus, setPDCAndLCdetails}) => {
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
            setRegister(''); 
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
            (!create && !editGRN && ! register) ? <div className='mx-16 mt-24'>
                <div>
                    <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                    </div>
            <div class="card flex justify-center shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Requisition- Order Lead Time analysis</h2>
                </div>
                    </div>
                    {
                        data.map(singleData => <div>
                            <div onClick={()=>handleCreate(singleData)} className='flex my-2'>
                                <p>{singleData}</p>
                                {/* <img src={rightArrow} alt="" /> */}
                            </div>
                            <hr />
                        </div>)
                    }
                </div>
            </div>
        </div> : <div>
        
        </div>
        }
    </div>
    );
};

export default RequisitionOrderLeadTimeAnalysis;