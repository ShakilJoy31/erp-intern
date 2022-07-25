import React from 'react';
import { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateServiceRecordLetter from './CreateServiceRecordLetter';

const ServiceRecordLetter = ({data,  setEmployeeDetails, setAttedance, setLeaveManagement, setOfferLettter, setServiceRecordLetter, setHandoverFormalLetter, setPayroll, setDayLabourReport}) => {
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
            setEditGRN(''); 
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
        setEmployeeDetails('')
        setAttedance('') 
        setLeaveManagement('') 
        setOfferLettter('') 
        setServiceRecordLetter('') 
        setHandoverFormalLetter('') 
        setPayroll('') 
        setDayLabourReport('')
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
                        <h2 class="card-title">Service Record Letter</h2>
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
                    create && <CreateServiceRecordLetter setCreate={setCreate}
                    setEditGRN={setEditGRN}
                    setRegister={setRegister}></CreateServiceRecordLetter>
                }
            </div>
            }
        </div>
    );
};

export default ServiceRecordLetter;