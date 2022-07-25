import React from 'react';

const RateAnalysisCreate = ({setRate}) => {
    const handleGetBack = () => {
        setRate(''); 
    }
    return (
        <div className='mt-8'>

            <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">

                        <div>
                            <div className='flex items-center mt-4'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Rate Analysis</h2>
                            </div>
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



            <div className='my-8'>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">

                        <div>
                            <div className='flex items-center mt-4'>
                                <div className='GRN'></div>
                                <h2 class="card-title">View Rate Analysis</h2>
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

            <div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">

                        <div>
                            <div className='flex items-center mt-4'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Register</h2>
                            </div>
                        </div>

                        <div className='flex'>
                        <div class="form-control w-80 max-w-lg">
                            <label class="label">
                                <span class="label-text">Project Code</span>

                            </label>
                            <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                        </div>
                        <div class="form-control w-80 mx-12 max-w-lg">
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

        </div>
    );
};

export default RateAnalysisCreate;