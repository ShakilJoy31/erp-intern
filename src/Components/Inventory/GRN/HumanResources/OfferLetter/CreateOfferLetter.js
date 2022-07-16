import React from 'react';

const CreateOfferLetter = ({ setCreate, setEditGRN, setRegister}) => {
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
                            <h2 class="card-title">Create Offer Letter</h2>
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
            </div>
            <button  class="create-button btn block text-white mx-auto action-button">Create</button>
        </div>
    );
};

export default CreateOfferLetter;