import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateDailyMeasurement from './CreateDailyMeasurement';
import EditDailyMeasurement from './EditDailyMeasurement';
import RegisterDailyMeasurement from './RegisterDailyMeasurement';

const DailyMeasurementSheet = ( { setDailyMeasurement, setPRPO, setPrestart, setBilling, setProject, setLiability, data}) => {
    const [create, setCreate] = useState(''); 
    const [edit, setEdit] = useState(''); 
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
           setEdit('');
           setRegister(''); 
        }
        else if(getString === 'Edit/View/Delete'){
            setEdit(getString); 
            setCreate(''); 
            setRegister('');
        }
        else{
            setRegister(getString); 
            setEdit(); 
            setCreate(''); 
        } 
    }
    return (
        <div>
            {
                (!create && !edit && !register) ? <div className='  mx-16 mt-24'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
            <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Daily Measurement Sheet for Subcontractor</h2>
                </div>
                    </div>
                    
                    {
                        data.map(singleData => <div>
                            <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
                                <p className='my-2'>{singleData}</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                        </div>)
                    }
                </div>
            </div>
        </div> : <div>
            {
                edit && <EditDailyMeasurement setCreate={setCreate} setEdit={setEdit}setRegister={setRegister}></EditDailyMeasurement>
            }
            {
                create && <CreateDailyMeasurement setCreate={setCreate} setEdit={setEdit}setRegister={setRegister}></CreateDailyMeasurement>
            }
            {
                register && <RegisterDailyMeasurement setCreate={setCreate} setEdit={setEdit}setRegister={setRegister}></RegisterDailyMeasurement>
            }
        </div>
            }
        </div>
    );
};

export default DailyMeasurementSheet;