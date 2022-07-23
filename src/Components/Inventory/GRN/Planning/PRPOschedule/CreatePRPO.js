import React, {useState} from 'react';
import CreatedList from './CreatedList';

const CreatePRPO = ({ setRegister, setEditGRN, setCreate }) => {
    const [create, setRegistered] = useState(''); 
    const handleGetBack = () =>{
        setRegister('')
        setEditGRN('')
        setCreate('')
    }
    const handleCreate = () =>{
        setRegistered('setRegistered'); 
    }
    return (
        <div className='w-100'>
            <div className='mt-24 '>
                {
                    (!create) ? <div>
                    <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fa-solid fa-arrow-left text-4xl"></i>
                    </div>
                    <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Create PRPO Schedule</h2>
                            </div>
    
                            <div>
                                <div>
    
                                <div className='flex justify-between'>
                                    <div class="form-control w-80 max-w-lg text-input">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>

                                    </div>
    
                                </div>
                            </div>
    
                        </div>
                    </div>
                <button onClick={handleCreate}  class="create-button btn block text-white mx-auto action-button">Create</button>
                    </div> : <div>
                        {
                            create && <CreatedList setRegistered={setRegistered}></CreatedList>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default CreatePRPO;