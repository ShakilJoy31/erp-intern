import React from 'react';
import { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateDailyLabourReport from './CreateDailyLabourReport';
import EditLabourReport from './EditLabourReport';
import RegisterDailyLabourReport from './RegisterDailyLabourReport';

const DailyLabourReport = ({data,  setEmployeeDetails, setAttedance, setLeaveManagement, setOfferLettter, setServiceRecordLetter, setHandoverFormalLetter, setPayroll, setDayLabourReport}) => {
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
                (!create && !editGRN && ! register) ? <div className='mx-16 mt-8 '>
                    <div>
                        <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                        </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Daily Labour Report</h2>
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
                    create && <CreateDailyLabourReport setCreate={setCreate}
                    setEditGRN={setEditGRN}
                    setRegister={setRegister}></CreateDailyLabourReport>
                }
                {
                    editGRN && <EditLabourReport setCreate={setCreate}
                    setEditGRN={setEditGRN}
                    setRegister={setRegister}></EditLabourReport>
                }
                {
                    register && <RegisterDailyLabourReport setCreate={setCreate}
                    setEditGRN={setEditGRN}
                    setRegister={setRegister}></RegisterDailyLabourReport>
                }
            </div>
            }
        </div>
    );
};

export default DailyLabourReport;