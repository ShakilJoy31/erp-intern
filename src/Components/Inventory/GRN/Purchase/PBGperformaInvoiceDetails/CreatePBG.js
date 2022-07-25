import React from 'react';

const CreatePBG = ({ setCreate, setEditGRN, setRegister}) => {
    const handleGetBack = () =>{
        setCreate('')
        setEditGRN('')
        setRegister('')
    }
    return (
        <div className='w-100'>
            <div className='  mx-16 mt-8'>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Create Performa Invoice</h2>
                        </div>

                        <div>
                            <div>

                                <div className='flex'>
                                <div class="form-control w-full max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Project Code</span>
                                        
                                    </label>
                                    <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                    
                                </div>


                                <div class="form-control w-full max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Receipt Type</span>
                                        
                                    </label>
                                    <input type="text" placeholder="" class="input w-100 max-w-lg border border-info hover:border-error ml-12" />
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

export default CreatePBG;