import React from 'react';

const EditLiabilityStatement = ({setRegister, setEditGRN, setCreate }) => {
    const handleGetBack = () =>{
        setRegister(''); 
        setEditGRN(''); 
        setCreate(''); 
    }
    return (
        <div className='w-100'>
            <div className='mt-8'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Create Liability Statement</h2>
                        </div>

                        <div>
                            <div>

                            <div className='flex justify-between'>
                                <div class="form-control w-full max-w-lg text-input">
                                    <label class="label">
                                        <span class="label-text">Project Code</span>
                                        
                                    </label>
                                    <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                    
                                </div>

                                
                                <div class="form-control w-full max-w-lg text-input">
                                    <label class="label">
                                        <span class="label-text">Project Code</span>
                                        
                                    </label>
                                    <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                    
                                </div>
                                
                                <div class="form-control w-full max-w-lg text-input">
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
            </div>
            <button  class="create-button btn block text-white mx-auto action-button">Create</button>
        </div>
    );
};

export default EditLiabilityStatement;