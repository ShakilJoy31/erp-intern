import React, {useState} from 'react';
import ListOfServiceRecordLetter from './ListOfServiceRecordLetter';

const CreateServiceRecordLetter = ({ setCreate, setEditGRN, setRegister}) => {
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
                                <h2 class="card-title">Create Service Record Letter</h2>
                            </div>
    
                            <div>
                                <div>
    
                                    <div className='flex'>
                                    <div class="form-control w-100 max-w-lg mr-12">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input style={{width: '350px'}} type="text" class="input max-w-lg border border-info hover:border-error" />
                                    </div>
    
    
                                    <div class="form-control w-100 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Employee ID</span>
                                            
                                        </label>
                                        <input style={{width: '350px'}} type="text" class="input max-w-lg border border-info hover:border-error" />
                                    </div>
    
                                    </div>
    
                                    
                                </div>
                            </div>
    
                        </div>
                    </div>
                <button onClick={handleCreate} class="create-button btn block text-white mx-auto action-button">Create</button>
                    </div> : <div>
                        {
                            list && <ListOfServiceRecordLetter setList={setList}></ListOfServiceRecordLetter>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default CreateServiceRecordLetter;