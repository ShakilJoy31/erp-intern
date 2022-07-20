import React, { useState } from 'react';
import EditNewProject from './EditNewProject';

const EditedNewProject = ({ setCreate, setEdit, setRegister }) => {
    const [edited, setEdited] = useState(''); 
    const handleGetBack = () =>{
        setCreate('')
        setEdit('')
        setRegister('')
    }
    const handleCreate = () =>{
        setEdited('setEdited'); 
    }
    return (
        <div className='w-100'>
            {
                (!edited) ? <div>
                    <div className='mt-24'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fa-solid fa-arrow-left text-3xl"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Register Stock Statement</h2>
                        </div>

                        <div>
                            <div>

                                <div className='flex'>
                                <div class="form-control w-80 max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Project Code</span>
                                        
                                    </label>
                                    <input type="text" placeholder="Project Code" class="input max-w-lg border border-info hover:border-error" />
                                    
                                </div>

                                <div className='mx-12'>
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
            <button onClick={handleCreate} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Register</button>
                </div> : <div>
                    {
                        edited && <EditNewProject setEdited={setEdited}></EditNewProject>
                    }
                </div>
            }
        </div>
    );
};

export default EditedNewProject;