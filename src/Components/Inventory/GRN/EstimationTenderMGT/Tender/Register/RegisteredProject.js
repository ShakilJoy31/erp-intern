import React, {useState} from 'react';
import Register from './Register';

const RegisteredProject = ({ setCreate, setEdit, setRegister }) => {
    const [register, setRegistered] = useState(''); 
    const handleGetBack = () =>{
        setCreate('');
        setEdit('');
        setRegister('');
    }
    const handleCreate = () =>{
        setRegistered('setEdited'); 
    }
    return (
        <div className='w-100'>
            {
                (!register) ? <div>
                    <div className='mt-8'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fas text-3xl fa-long-arrow-alt-left mb-10"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Register</h2>
                        </div>

                        <div>
                            <div>

                                <div className='flex justify-between'>
                                <div class="form-control w-full max-w-lg">
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
            <button onClick={handleCreate} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Register</button>
                </div> : <div>
                    {
                        register && <Register setRegister={setRegister}></Register>
                    }
                </div>
            }
        </div>
    );
};

export default RegisteredProject;