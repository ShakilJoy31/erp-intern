import React from 'react';

const EditClientMeasurement = ({setCreate, setEdit}) => {
    const handleGetBack = () =>{
        setCreate(''); 
        setEdit(''); 
    }
    return (
        <div className='w-100'>
            <div className='  mx-16 mt-8'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Edit/View/Delete Measurement Sheet</h2>
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
                                            <span class="label-text">Client Sheet No.</span>

                                        </label>
                                        <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info hover:border-error" />
                                    </div>


                                    <div class="form-control w-100 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Action</span>

                                        </label>
                                        <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info hover:border-error" />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button  class="create-button btn block text-white mx-auto action-button">Search</button>
        </div>
    );
};

export default EditClientMeasurement;