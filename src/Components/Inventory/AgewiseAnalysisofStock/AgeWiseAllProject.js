import React, { useState } from 'react';
import AllProject from './AllProject';

const AgeWiseAllProject = ({ setAgeWiseIndividualProject, setAgeWiseAllProject }) => {
    const [allProject, setAllProject] = useState('');
    const handleGetBack = () => {
        setAgeWiseIndividualProject('');
        setAgeWiseAllProject('');
    }
    const handleCreate = () =>{
        setAllProject('setAllProject'); 
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-24 '>
                {
                    (!allProject) ? <div>
                        <div onClick={handleGetBack} className='left-arrow'>
                            <i class="fa-solid fa-arrow-left text-4xl"></i>
                        </div>
                        <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                            <div class="card-body">
                                <div className='flex items-center'>
                                    <div className='GRN'></div>
                                    <h2 class="card-title">All Project - Agewise Analysis of Stock</h2>
                                </div>

                                <div class="form-control w-100 max-w-lg">
                                    <label class="label">
                                        <span class="label-text">As On Date</span>

                                    </label>
                                    <input style={{ width: '350px' }} type="text" class="input max-w-lg border border-info hover:border-error" />
                                </div>
                            </div>
                            <button onClick={handleCreate} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button mb-8 btn block text-white mx-auto ">Register</button>
                        </div>
                    </div> : <div>
                        {
                            allProject && <AllProject setAllProject={setAllProject}></AllProject>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default AgeWiseAllProject;