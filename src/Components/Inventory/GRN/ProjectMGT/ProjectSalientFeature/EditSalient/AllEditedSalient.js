import React, { useState } from 'react';
import EditSalient from './EditSalient';

const AllEditedSalient = ({ setRegister, setEdit, setCreate}) => {
    const [editSalient, setEditedSalient] = useState(''); 
    const handleGetBack = () => {
        setRegister('');
        setEdit('');
        setCreate('');
    }
    const handleRegisterProject = () =>{
        setEditedSalient('setViewEditedProject'); 
    }
    return (
        <div className='w-100'>
            {
                !editSalient ? <div>
                <div className='  mx-16 mt-8'>
                    <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                    </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Register Project</h2>
                            </div>
    
                            <div>
                                <div>
    
                                    <div className='flex'>
                                    <div class="form-control mr-12 w-72 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
    
                                    <div class="form-control max-w-lg w-72">
                                            <label class="label">
                                                <span class="label-text">Type of Stock</span>
                                            </label>
                                            <select class="select select-bordered border border-info hover:border-error">
                                                <option disabled selected>PO</option>
                                                <option>Client Receipt</option>
                                                <option>Subcontractor's Stock</option>
                                                <option>Cash Purchase</option>
                                            </select>
                                        </div>
                                    
                                    </div>
    
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                <button onClick={handleRegisterProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Register</button>
                </div> : <div>
                    {
                        editSalient && <EditSalient setEditedSalient={setEditedSalient}></EditSalient>
                    }
                </div>
            }
        </div>
    );
};

export default AllEditedSalient;