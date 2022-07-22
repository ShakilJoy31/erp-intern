import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateAttendance from './CreateAttendance';
import EditViewDeleteAttendance from './EditViewDeleteAttendance';

const Attedance = ({data,  setEmployeeDetails, setAttedance, setLeaveManagement, setOfferLettter, setServiceRecordLetter, setHandoverFormalLetter, setPayroll, setDayLabourReport}) => {
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
                (!create && !editGRN && ! register) ? <div className='mx-16 mt-24 '>
                    <div>
                        <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                        </div>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Attendance</h2>
                    </div>
                        </div>
                        {
                            data.map(singleData => <div>
                                <div onClick={()=>handleCreate(singleData)} className='flex my-2 forHover'>
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
                create && <CreateAttendance setCreate={setCreate} setEditGRN={setEditGRN} setRegister={setRegister}></CreateAttendance>
            }
            {
                editGRN && <EditViewDeleteAttendance setCreate={setCreate} setEditGRN={setEditGRN} setRegister={setRegister}></EditViewDeleteAttendance>
            }
            </div>
            }
        </div>
    );
};

export default Attedance;