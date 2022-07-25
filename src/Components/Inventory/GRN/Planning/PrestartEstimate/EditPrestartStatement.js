import React, {useState} from 'react';
import TenderRateAnalysis from './TenderRateAnalysis';


const EditPrestartStatement = ({ setRegister, setEditGRN, setCreate }) => {
    const [register, setRegistered] = useState(''); 
    const handleGetBack = () =>{
        setRegister('')
        setEditGRN('')
        setCreate('')
    }
    const handleCreate = () =>{
        setRegistered('setRegistered');
    }
    return (
        <div className='w-100'>
            <div className='mt-8 '>
                {
                    (!register) ? <div>
                    <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                    </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Edit Prestart Statement</h2>
                            </div>
    
                            <div>
                                <div>
    
                                <div className='flex'>
                                    <div class="form-control w-80 max-w-lg mr-12 text-input">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
                                    <div class="form-control w-80 max-w-lg text-input">
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
                <button onClick={handleCreate}  class="create-button btn block text-white mx-auto action-button">Create</button>
                    </div> : <div>
                        {
                            register && <TenderRateAnalysis setRegistered={setRegistered}></TenderRateAnalysis>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default EditPrestartStatement;