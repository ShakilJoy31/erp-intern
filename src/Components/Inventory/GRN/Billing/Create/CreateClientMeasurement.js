import React from 'react';

const CreateClientMeasurement = ({setCreate, setEdit}) => {
    const handleGetBack = () => {
        setCreate('');
        setEdit('');
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-24'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fa-solid fa-arrow-left text-4xl"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
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
                                        <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info" />
                                    </div>



                                    <div class="form-control w-100 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">From</span>

                                        </label>
                                        <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info" />
                                    </div>


                                    <div class="form-control w-100 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">To</span>

                                        </label>
                                        <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info" />
                                    </div>

                                </div>
                                <div>
                                    <div class="form-control w-100 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">RA No</span>

                                        </label>
                                        <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Search</button>
        </div>
    );
};

export default CreateClientMeasurement;