import React, {useState} from 'react';
import IndivisualProjects from './IndivisualProjects';

const AgeWiseIndividualProject = ({setAgeWiseIndividualProject, setAgeWiseAllProject}) => {
    const [individul, setIndividul] = useState(''); 
    const handleGetBack = () =>{
        setAgeWiseIndividualProject(''); 
        setAgeWiseAllProject(''); 
    }
    const handleCreate = () =>{
        setIndividul('setIndividul'); 
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-8 '>
                {
                    (!individul) ? <div>
                    <div onClick={handleGetBack} className='left-arrow'>
                            <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                            </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Individual Project - Agewise Analysis of Stock</h2>
                        </div>

                        <div>
                            <div className='flex justify-between'>
                            <div class="form-control w-100 max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Project Code</span>
                                        
                                    </label>
                                    <input style={{width: '350px'}} type="text" class="input max-w-lg" />
                                </div>


                                <div className='mx-12'>
                                    <div class="form-control max-w-lg w-80">
                                        <label class="label">
                                            <span class="label-text">Sub Inventory</span>
                                        </label>
                                        <select class="select select-bordered">
                                            <option disabled selected>PO</option>
                                            <option>Client Receipt</option>
                                            <option>Subcontractor's Stock</option>
                                            <option>Cash Purchase</option>
                                        </select>
                                    </div>
                                </div>

                                
                                <div class="form-control w-100 max-w-lg">
                                    <label class="label">
                                        <span class="label-text">As On Date</span>
                                        
                                    </label>
                                    <input style={{width: '350px'}} type="text" class="input max-w-lg" />
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            <button onClick={handleCreate} style={{backgroundColor: '#7E76CA', width:'235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px'}} class="create-button btn block text-white mx-auto ">Register</button>
            </div> : <div>
                {
                    individul && <IndivisualProjects setIndividul={setIndividul}></IndivisualProjects>
                }
            </div>
                }
                </div>
            </div>
    );
};

export default AgeWiseIndividualProject;