import React, {useState} from 'react';
import AllAttendance from './AllAttendance';

const EditViewDeleteAttendance = ({ setCreate, setEditGRN, setRegister}) => {
    const [list, setList] = useState(''); 
    const handleGetBack = () =>{
        setCreate('')
        setEditGRN('')
        setRegister('')
    }
    const handleCreate = () =>{
        setList('setList')
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
                                <h2 class="card-title">Edit/View/Delete</h2>
                            </div>
    
                            <div>
                                <div>
    
                                    <div className='flex justify-between'>
                                    <div class="form-control w-80 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
                                    <div class="form-control w-80 max-w-lg mx-12">
                                        <label class="label">
                                            <span class="label-text">Employee Name</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Employee Name" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
                                    <div class="form-control w-80 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">For the Date</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Type the date" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
    
                                    </div>
    
    
                                    <div className='flex'>
    
                                    <div>
                                        <div class="form-control w-80 max-w-lg">
                                            <label class="label">
                                                <span class="label-text">Action</span>
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
                <button onClick={handleCreate} class="create-button mb-8 btn block text-white mx-auto action-button">Search</button>
                    </div> : <div>
                        {
                            list && <AllAttendance setList={setList}></AllAttendance>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default EditViewDeleteAttendance;