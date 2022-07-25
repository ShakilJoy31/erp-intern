import React, {useState} from 'react';
import AllCreatedBilling from './AllCreatedBilling';

const CreateClientMeasurement = ({setCreate, setEdit}) => {
    const [create, setCreateClient] = useState('')
    const handleGetBack = () => {
        setCreate('');
        setEdit('');
    }
    const handleCreate = () =>{
        setCreateClient('setCreateClient')
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-8 '>
                {
                    (!create) ? <div>
                    <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                    </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Create Client Measurement Sheet</h2>
                            </div>
    
                            <div>
                                <div>
                                    <div className='flex justify-between'>
    
    
                                        <div class="form-control w-100 max-w-lg">
                                            <label class="label">
                                                <span class="label-text">Project Code</span>
    
                                            </label>
                                            <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info hover:border-error" />
                                        </div>
    
    
    
                                        <div class="form-control w-100 max-w-lg">
                                            <label class="label">
                                                <span class="label-text">From</span>
    
                                            </label>
                                            <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info hover:border-error" />
                                        </div>
    
    
                                        <div class="form-control w-100 max-w-lg">
                                            <label class="label">
                                                <span class="label-text">To</span>
    
                                            </label>
                                            <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info hover:border-error" />
                                        </div>
    
                                    </div>
                                    <div>
                                        <div class="form-control w-100 max-w-lg">
                                            <label class="label">
                                                <span class="label-text">RA No</span>
    
                                            </label>
                                            <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info hover:border-error" />
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                <button onClick={handleCreate} class="create-button mb-8 btn block text-white mx-auto action-button">Create</button>
                    </div>
                </div> : <div>
                    {
                        create && <AllCreatedBilling setCreateClient={setCreateClient}></AllCreatedBilling>
                    }
                </div>
                }
                </div>
            </div>
    );
};

export default CreateClientMeasurement;