import React from 'react';

const AllRegisteredTransferedNote = ({setRegisterNote}) => {
    const handleGetBack = () =>{
        setRegisterNote(''); 
    }

    const handleCreateProject = () =>{
         
    }
    return (
        <div className='mt-8 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Transfer Note</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                        <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>ID No.</th>
                                        <th>Transfer From</th>
                                        <th>Transfer to</th>

                                        <th>Transfer Date</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>46539</td>
                                        <td>Pitam Pura</td>
                                        <td>Dwarka Sec - 21</td>
                                        <td>25 May 2022</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div> 
    );
};

export default AllRegisteredTransferedNote;