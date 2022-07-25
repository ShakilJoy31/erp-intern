import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreatePRPO from './CreatePRPO';
import EditPRPO from './EditPRPO';
import RegisterPRPO from './RegisterPRPO';

const PRPOschedule = ({ setDailyMeasurement, setPRPO, setPrestart, setBilling, setProject, setLiability, data}) => {
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
            setRegister(getString); 
            setEditGRN(); 
            setCreate(''); 
        } 
    }
    return (
        <div className='mx-16 mt-8'>
                    {
                        (!create && !editGRN && !register) ? <div>
                        <div>
                            <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                            </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                        
                            <div>
                            <div className='flex items-center mt-4'>
                            <div className='GRN'></div>
                            <h2 class="card-title">PR - PO Schedule</h2>
                        </div>
                            </div>
                            
                            {
                                data.map(singleData => <div>
                                    <div onClick={()=>handleCreate(singleData)} className='flex  forHover'>
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
                                create && <CreatePRPO setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></CreatePRPO>
                            }
                            {
                                editGRN && <EditPRPO setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></EditPRPO>
                            }
                            {
                                register && <RegisterPRPO setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></RegisterPRPO>
                            }
                        </div>
                    }
            </div>
    );
};

export default PRPOschedule;