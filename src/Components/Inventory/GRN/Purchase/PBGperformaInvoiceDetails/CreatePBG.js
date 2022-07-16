import React from 'react';

const CreatePBG = ({ setCreate, setEditGRN, setRegister}) => {
    const handleGetBack = () =>{
        setCreate('')
        setEditGRN('')
        setRegister('')
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-24'>
                <div>
                    <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
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
                                    <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info" />
                                    
                                </div>


                                <div class="form-control w-full max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Receipt Type</span>
                                        
                                    </label>
                                    <input type="text" placeholder="" class="input w-100 max-w-lg border border-info ml-12" />
                                </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Create</button>
        </div>
    );
};

export default CreatePBG;