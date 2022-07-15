import React from 'react';
import { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateOfferLetter from './CreateOfferLetter';
import EditOfferLetter from './EditOfferLetter';
import RegisterOfferLetter from './RegisterOfferLetter';

const OffferLetter = ({data,  setEmployeeDetails, setAttedance, setLeaveManagement, setOfferLettter, setServiceRecordLetter, setHandoverFormalLetter, setPayroll, setDayLabourReport}) => {
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
            setRegister(getString); 
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
                (!create && !editGRN && ! register) ? <div className='mx-16 mt-24'>
                    <div>
                        <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                        </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Offer Letter</h2>
                    </div>
                        </div>
                        {
                            data.map(singleData => <div>
                                <div onClick={()=>handleCreate(singleData)} className='flex my-2'>
                                    <p>{singleData}</p>
                                    <img src={rightArrow} alt="" />
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
            </div> : <div>
                {
                    create && <CreateOfferLetter setCreate={setCreate}
                    setEditGRN={setEditGRN}
                    setRegister={setRegister} ></CreateOfferLetter>
                }
                {
                   editGRN && <EditOfferLetter setCreate={setCreate}
                   setEditGRN={setEditGRN}
                   setRegister={setRegister}></EditOfferLetter> 
                }
                {
                    register && <RegisterOfferLetter setCreate={setCreate}
                    setEditGRN={setEditGRN}
                    setRegister={setRegister}></RegisterOfferLetter>
                }
            </div>
            }
        </div>
    );
};

export default OffferLetter;