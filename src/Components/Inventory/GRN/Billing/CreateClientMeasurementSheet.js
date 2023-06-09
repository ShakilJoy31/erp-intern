import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import { useState } from 'react';
import CreateClientMeasurement from './Create/CreateClientMeasurement';
import EditClientMeasurement from './Edit/EditClientMeasurement';
import RegisterDailyMeasurement from '../Planning/DailyMeasurementSheet/RegisterDailyMeasurement';

const CreateClientMeasurementSheet = ({data, setClientMeasurementSheet, setsubcontractorMeasurementSheet}) => {
    const [create, setCreate] = useState(''); 
    const [edit, setEdit] = useState(''); 
    const [register, setRegister] = useState(''); 
    const handleGetBack = () =>{
        setClientMeasurementSheet(''); 
        setsubcontractorMeasurementSheet('');
    }
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
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
        <div>
            {
                (!create && !edit && !register) ? <div className='mx-16 mt-8 '>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                    </div>
            <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body"> 
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Client Measurement Sheet</h2>
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
                create && <CreateClientMeasurement setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></CreateClientMeasurement>
            }
            {
                edit && <EditClientMeasurement setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></EditClientMeasurement>
            }
            {
                register && <RegisterDailyMeasurement setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></RegisterDailyMeasurement>
            }
        </div>  
            }
        </div>
    );
};

export default CreateClientMeasurementSheet;