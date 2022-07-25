import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateBillingSchedule from './CreateBillingSchedule';
import EditBillingSchedule from './EditBillingSchedule';
import RegisterBillingSchedule from './RegisterBillingSchedule';

const BillingSchedule = ({setTender, setBoq, setEstimation, setBilling, data}) => {
    const [create, setCreate] = useState('')
    const [edit, setEdit] = useState('')
    const [register, setRegister] = useState('')
    const handleGetBack = () =>{
        setTender('');
        setBoq('');
        setEstimation('');
        setBilling('');
    }
    const handleCreate = (getString) =>{
        if(getString==='Create'){
            setCreate(getString);
            setEdit('');
            setRegister('');
        }
        else if(getString === 'Edit/View/Delete'){
            setCreate('');
            setEdit(getString);
            setRegister('');
        }
        else{
            setCreate('');
            setEdit('');
            setRegister(getString);
        }
    }
    return (
        <div className='mx-16 mt-8'>
            {
                (!create && !edit && !register) ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
            <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
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
                                <p className='py-4'>{singleData}</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr/>
                        </div>)
                    }
                </div>
            </div>
                </div>  : <div>
                    {
                        create && <CreateBillingSchedule setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></CreateBillingSchedule>
                    }
                    {
                        edit && <EditBillingSchedule setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></EditBillingSchedule>
                    }
                    {
                        register && <RegisterBillingSchedule setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></RegisterBillingSchedule>
                    }
                </div>
            }
        </div>
    );
};

export default BillingSchedule;