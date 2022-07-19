import React from 'react';

const CreatePlannedAchieved = ({setCurve}) => {
    const handleGetBack = () =>{
        setCurve(''); 
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
                                <h2 class="card-title">Create Planned Achieved</h2>
                            </div>
    
                            <div>
                                <div>
    
                                    <div className='flex justify-between'>
                                    <div class="form-control w-72 mr-12 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Project Code</span>
                                            
                                        </label>
                                        <input type="text" placeholder="Project Code" class="input max-w-lg border border-info hover:border-error" />
                                        
                                    </div>
    
                                    <div class="form-control w-72 mr-12 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">From</span>
                                            
                                        </label>
                                        <input type="text" placeholder="" class="input max-w-lg border-info hover:border-error" />
                                    </div>

                                    <div class="form-control w-72 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">From</span>
                                            
                                        </label>
                                        <input type="text" placeholder="" class="input max-w-lg border-info hover:border-error" />
                                    </div>
                                    
                                    </div>

                                    <div class="form-control w-64 max-w-lg">
                                        <label class="label">
                                            <span class="label-text">From</span>
                                            
                                        </label>
                                        <input type="text" placeholder="" class="input max-w-lg border-info hover:border-error" />
                                    </div>
    
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Register</button>
                </div> 
    );
};

export default CreatePlannedAchieved;