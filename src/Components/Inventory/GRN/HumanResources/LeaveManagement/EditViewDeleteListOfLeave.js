import React from 'react';

const EditViewDeleteListOfLeave = ({setList}) => {
    const handleGetBack = () =>{
        setList(''); 
    }

    const handleCreateProject = () =>{
         
    }
    return (
        <div className='mt-12 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Edit View Delete Leave</h1>

                    <div className='flex items-center justify-end mb-8 add-projects'>
                        <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                        <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Employee ID ID</th>

                                        <th>Roll</th>
                                        <th>
                                            <div>
                                                <p className='mb-2'>Leave Requested for</p>
                                                <div className='flex'>
                                                    <p className='mr-6'>From</p>
                                                    <p className='mr-6'>To</p>
                                                    
                                                </div>
                                            </div>
                                        </th>
                                        <th>Number of Days</th>
                                        <th>Type of Leave</th>
                                        <th>Reason</th>
                                        <th>Current Status</th>
                                        <th>Action</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'>21-5-22</p>
                                                <p className='mr-6'>30-5-22</p>
                                                
                                            </div>
                                        </td>
                                        <td>9</td>
                                        <td>PL</td>
                                        <td>Wedding</td>
                                        <td>Approved</td>
                                        <td>Edit</td>
                                        
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default EditViewDeleteListOfLeave;