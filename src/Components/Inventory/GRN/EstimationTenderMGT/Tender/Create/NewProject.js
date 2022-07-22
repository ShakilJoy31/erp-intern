import React from 'react';

const NewProject = ({setCreateTender}) => {
    const handleGetBack = () =>{
        setCreateTender(''); 
    }
    return (
        <div className='mt-12'>
            {
                <div classNme='w-full'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <h1 className='mb-12 text-3xl'>Create Tender</h1>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex justify-around'>
                            <div className='flex'>
                                <div className=''>
                                    <p className='flex justify-end mt-6 mr-4 text-xl'>Project Description</p>
                                    <p className='flex justify-end mr-4 text-xl mt-14'>Date of Completion of Work</p>
                                    <p className='flex justify-end mt-12 mr-4 text-xl'>Tender No</p>
                                    <p className='flex justify-end mr-4 text-xl mt-14'>Defect Liability Period</p>
                                    <p className='flex justify-end mt-12 mr-4 text-xl'>Employer</p>
                                    <p className='flex justify-end mt-12 mr-4 text-xl'>Main Function of this Package</p>
                                    <p className='flex justify-end mr-4 text-xl mt-14'>Contractor</p>
                                </div>

                                <div className='grid'>
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                </div>
                            </div>



                            <div className='flex'>
                                <div className=''>
                                    <p className='flex justify-end mt-6 mr-4 text-xl'>Project Description</p>
                                    <p className='flex justify-end mr-4 text-xl mt-14'>Date of Completion of Work</p>
                                    <p className='flex justify-end mt-12 mr-4 text-xl'>Tender No</p>
                                    <p className='flex justify-end mr-4 text-xl mt-14'>Defect Liability Period</p>
                                    <p className='flex justify-end mt-12 mr-4 text-xl'>Employer</p>
                                    <p className='flex justify-end mt-12 mr-4 text-xl'>Main Function of this Package</p>
                                    <p className='flex justify-end mr-4 text-xl mt-14'>Contractor</p>
                                </div>

                                <div className='grid'>
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                    <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-end mt-24 mr-8'>
                        <button class="create-button btn text-white action-button">Create</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>


    );
};

export default NewProject;