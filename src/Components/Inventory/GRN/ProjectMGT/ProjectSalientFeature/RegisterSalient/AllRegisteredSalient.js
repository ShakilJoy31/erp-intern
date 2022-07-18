import React from 'react';
import { useState } from 'react';
import RegisterSalient from './RegisterSalient';

const AllRegisteredSalient = ({ setRegister, setEdit, setCreate}) => {
    const [editedProject, setEditedProject] = useState(''); 
    const handleGetBack = () => {
        setRegister('');
        setEdit('');
        setCreate('');
    }
    const handleGoToEditedProject = () =>{
        setEditedProject('setEditedProject'); 
    }
    return (
        <div>
            {
                !editedProject ? <div className='w-100'>
                <div className='mx-16 mt-24'>
                    <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fa-solid fa-arrow-left text-4xl"></i>
                    </div>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Register</h2>
                            </div>
    
                            <div>
                                <div>
    
                                    <div className='flex'>
                                    <div class="form-control max-w-lg mr-12">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input style={{width: '350px'}} type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
    
                                    <div className=''>
                                        <div class="form-control max-w-lg w-80">
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
                </div>
                <button onClick={handleGoToEditedProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Save</button>
            </div> : <div>
                {
                    editedProject && <RegisterSalient setEditedProject={setEditedProject}></RegisterSalient>
                }
            </div>
            }
        </div>
    );
};

export default AllRegisteredSalient;