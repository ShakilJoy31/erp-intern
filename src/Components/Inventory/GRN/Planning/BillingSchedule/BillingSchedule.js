import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CopyFromBillingSchedule from './CopyFromBillingSchedule';
import CreateBilling from './CreateBilling';

const BillingSchedule = ({ setDailyMeasurement, setPRPO, setPrestart, setBilling, setProject, setLiability, data}) => {
    const [create, setCreate] = useState(''); 
    const [editGRN, setEditGRN] = useState(''); 
    const [register, setRegister] = useState('');
    const handleGetBack = () =>{
        setDailyMeasurement('');
        setPRPO('');
        setPrestart(''); 
        setBilling('');
        setProject(''); 
        setLiability('');
    }
    const handleCreate = (getString) =>{
        if(getString === 'New Bill'){
           setCreate(getString); 
           setEditGRN('');
           setRegister(''); 
        }
        else if(getString === 'Copy From Ref Billing Schedule'){
            setEditGRN(getString); 
            setCreate(''); 
            setRegister('');
        }
        else{
            setRegister(getString); 
            setEditGRN(); 
            setCreate(''); 
        } 
    }
    return (
            <div className='mx-16 mt-8 '>
                    {
                        (!create && !editGRN) ? <div>
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
                                    <hr className='w-screen line'></hr>
                                </div>)
                            }
                        </div>
                    </div>
                        </div> : <div>
                            {
                                create && <CreateBilling setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate} ></CreateBilling>
                            }
                            {
                                editGRN && <CopyFromBillingSchedule setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></CopyFromBillingSchedule>
                            }
                        </div>
                    }
            </div>
    );
};

export default BillingSchedule;