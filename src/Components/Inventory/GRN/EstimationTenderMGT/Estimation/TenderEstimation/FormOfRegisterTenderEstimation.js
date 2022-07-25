import React from 'react';

const FormOfRegisterTenderEstimation = ({setRate}) => {
    const handleGetBack = () =>{
        setRate(''); 
    }
    return (
        <div className='w-100'>
            {
                 <div>
                    <div className='mt-8'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fas text-3xl fa-long-arrow-alt-left text-3xl mb-10"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Register Tender Estimation</h2>
                        </div>

                        <div>
                            <div>

                                <div className='flex'>
                                <div class="form-control w-full max-w-lg mr-12">
                                    <label class="label">
                                        <span class="label-text">From</span>
                                        
                                    </label>
                                    <input type="text" placeholder="" class="input w-80 max-w-lg border border-info hover:border-error" />
                                </div>

                                <div class="form-control w-full max-w-lg">
                                    <label class="label">
                                        <span class="label-text">From</span>
                                        
                                    </label>
                                    <input type="text" placeholder="" class="input w-80 max-w-lg border border-info hover:border-error" />
                                </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Register</button>
                </div>
            }
        </div>
    );
};

export default FormOfRegisterTenderEstimation;