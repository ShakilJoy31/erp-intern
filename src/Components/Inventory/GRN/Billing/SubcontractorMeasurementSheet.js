import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import { useState } from 'react';
import CreateSubContractorMeasurement from './Create/CreateSubContractorMeasurement';
import EditSubContractoeMeasurement from './Edit/EditSubContractoeMeasurement';
import RegisterSubContractor from './RegisterSubContractor';

const SubcontractorMeasurementSheet = ({data, setClientMeasurementSheet, setsubcontractorMeasurementSheet}) => {
    const [create, setCreate] = useState(''); 
    const [edit, setEdit] = useState(''); 
    const [deleteMeasurement, setDeleteMeasurement] = useState(''); 

    const handleGetBack = () =>{
        setClientMeasurementSheet(''); 
        setsubcontractorMeasurementSheet('');
    }
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
            setCreate(getString);
            setEdit('');
            setDeleteMeasurement('');
        }
        else if(getString === 'Edit/View/Delete'){
            setCreate('');
            setEdit(getString);
            setDeleteMeasurement('');
        }
        else{
            setCreate('');
            setEdit('');
            setDeleteMeasurement(getString); 
        }
    }
    return (
        <div>
            {
                (!create && !edit && !deleteMeasurement) ? <div className='mx-16 mt-8 '>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
            <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body"> 
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Subcontractor Measurement Sheet</h2>
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
                create && <CreateSubContractorMeasurement setCreate={setCreate} setEdit={setEdit} setDeleteMeasurement={setDeleteMeasurement}></CreateSubContractorMeasurement>
            }
            {
                edit && <EditSubContractoeMeasurement setCreate={setCreate} setEdit={setEdit} setDeleteMeasurement={setDeleteMeasurement}></EditSubContractoeMeasurement>
            }
            {
                deleteMeasurement && <RegisterSubContractor setCreate={setCreate} setEdit={setEdit} setDeleteMeasurement={setDeleteMeasurement}></RegisterSubContractor>
            }
        </div>  
            }
        </div>
    );
};

export default SubcontractorMeasurementSheet;