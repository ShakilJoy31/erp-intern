import React, { useState } from 'react';
import RegisteredList from './RegisteredList';

const RegisterProjectMGT = ( { setRegister, setEdit, setCreate}) => {
    const [list, setList] = useState(''); 
    
    const handleCreate = () =>{
        setList('setList'); 
    }
    const handleGetBack = () =>{
        setRegister('');
         setEdit('');
        setCreate('');
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-8 '>
                {
                    (!list) ? <div>
                    <div>
                        <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Register Client</h2>
                            </div>
    
                            <div>
                                <div>
    
                                    <div className='flex'>
                                    <div style={{width: '350px'}} class="form-control w-full max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
    
                                    <div className='mx-12'>
                                        <div class="form-control max-w-lg w-80">
                                            <label class="label">
                                                <span class="label-text">Type</span>
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
                <button onClick={handleCreate} class="create-button btn block text-white mx-auto action-button">Create</button>
                    
                    </div> : <div>
                        {
                            list && <RegisteredList setList={setList}></RegisteredList>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default RegisterProjectMGT;