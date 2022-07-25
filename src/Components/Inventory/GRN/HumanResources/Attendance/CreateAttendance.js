import React, {useState} from 'react';
import ListAttendence from './ListAttendence';

const CreateAttendance = ({ setCreate, setEditGRN, setRegister}) => {
    const [list, setList] = useState(''); 
    const handleGetBack = () =>{
        setCreate('')
        setEditGRN('')
        setRegister('')
    }
    const handleCreate = () =>{
        setList('setList')
    }
    console.log('I am here'); 
    return (
        <div className='w-100'>
            <div className='mx-16 mt-8 '>
                {
                    (!list) ? <div>
                    <div>
                        <i onClick={handleGetBack} class="fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Create Attendance</h2>
                            </div>
    
                            <div>
                                <div>
    
                                    <div className='flex justify-between'>
                                    <div class="form-control w-80 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Project Code" class="input w-100 max-w-lg" />
                                        
                                    </div>
    
                                    <div className='mx-12'>
                                        <div class="form-control max-w-lg w-80">
                                            <label class="label">
                                                <span class="label-text">Type</span>
                                            </label>
                                            <select class="select select-bordered">
                                                <option disabled selected>PO</option>
                                                <option>Client Receipt</option>
                                                <option>Subcontractor's Stock</option>
                                                <option>Cash Purchase</option>
                                            </select>
                                        </div>
                                    </div>
    
    
                                    <div class="form-control w-80 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">For the Date</span>
                                            
                                        </label>
                                        <input type="text" placeholder="" class="input w-100 max-w-lg" />
                                    </div>
                                    </div>
    
                                    
                                </div>
                            </div>
    
                        </div>
                    </div>
                <button onClick={handleCreate} class="create-button mb-8 btn block text-white mx-auto action-button">Create</button>
                    </div> : <div>
                        {
                            list && <ListAttendence setList={setList}></ListAttendence>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default CreateAttendance;