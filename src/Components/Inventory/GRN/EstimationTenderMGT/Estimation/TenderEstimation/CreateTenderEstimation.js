import React from 'react';

const CreateTenderEstimation = ({setRate}) => {
    const handleGetBack = () =>{
        setRate(''); 
    }
    return (
        <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">

                        <div>
                            <div className='flex items-center mt-4'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Create Tender Estimation</h2>
                            </div>
                        </div>

                        <div className='flex'>
                        <div class="form-control w-80 max-w-lg mr-12">
                            <label class="label">
                                <span class="label-text">Project Code</span>

                            </label>
                            <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                        </div>

                        <div class="form-control w-80 max-w-lg">
                            <label class="label">
                                <span class="label-text">Project Code</span>

                            </label>
                            <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                        </div>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default CreateTenderEstimation;