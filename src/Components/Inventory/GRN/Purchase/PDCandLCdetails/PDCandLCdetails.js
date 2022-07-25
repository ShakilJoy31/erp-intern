import React, { useState } from 'react';
import CreatePDC from './CreatePDC';
import EditPDC from './EditPDC';
import RegisterPDC from './RegisterPDC';
import rightArrow from './../../../../icons/Vector (8).svg'; 

const PDCandLCdetails = ({data, setPurchaseRequisitionStatus, setCreateOrder, setOrderAmendment, setOrderStatus, setRequisitionOrderLeadTimeAnalysis, setRequestforQuotation, setVendorRegister, setComparativeStatement, setPBGProformaInvoiceDetails, setBudgetVSAllocatedStatus, setPDCAndLCdetails}) => {
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
            setRegister('setEditGRN'); 
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
                    <h2 class="card-title">PDC & LC details</h2>
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
                create && <CreatePDC setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></CreatePDC>
            }
            {
                editGRN && <EditPDC setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></EditPDC>
            }
            {
                register && <RegisterPDC setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></RegisterPDC>
            }
        </div>
        }
    </div>
    );
};

export default PDCandLCdetails;