import React, { useState } from 'react';
import rightArrow from './../../../../../icons/Vector (8).svg'; 
import CreateditemAnalysis from './CreateditemAnalysis';

const CreateItemAnalysis = ({ setRateAnalysis, setTenderEstimation, setItemAnalysis, data }) => {
    const [create, setCreate] = useState(''); 
    const handleGetBack = () =>{
        setRateAnalysis('');
        setTenderEstimation('');
        setItemAnalysis('');
    }
    const handleCreate = () =>{
            setCreate('setCreate'); 
    }
    return (
        <div className='mt-8'>
            {
                (!create) ? <div>
                <div>
                    <i onClick={handleGetBack} class="fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
            <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Tender Estimation</h2>
                </div>
                    </div>
                    
                    {
                        data.map(singleData => <div>
                            <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
                                <p className='py-4'>{singleData}</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr className='w-screen line'></hr>
                        </div>)
                    }
                </div>
            </div>

            <div class="card flex box-shadow justify-center box-shadow mt-8 shadow-2xl bg-white">
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
                
                <div>
                <button onClick={handleCreate} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Create</button>
                </div>
                </div>  : <div>
                    {
                        create && <CreateditemAnalysis setCreate={setCreate}></CreateditemAnalysis>
                    }
                </div>
            }
        </div>
    );
};

export default CreateItemAnalysis;