import React, {useState} from 'react';
import Register from './Register';

const RegisteredProject = ({ setEdited }) => {
    const [register, setRegister] = useState(''); 
    const handleGetBack = () =>{
        setEdited(''); 
    }
    const handleCreate = () =>{
        setRegister('setEdited'); 
    }
    return (
        <div className='w-100'>
            {
                (!register) ? <div>
                    <div className='mt-24'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fa-solid fa-arrow-left text-3xl"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
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