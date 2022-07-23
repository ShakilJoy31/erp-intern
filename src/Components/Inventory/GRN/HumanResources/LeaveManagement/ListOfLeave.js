import React from 'react';

const ListOfLeave = ({setList}) => {
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
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Create Attendance</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

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
                                        <th>Reporting Officer</th>
                                        <th>
                                            <div>
                                                <p className='mb-2'>Type of Leave</p>
                                                <div className='flex'>
                                                    <p className='mr-6'>SL</p>
                                                    <p className='mr-6'>CL</p>
                                                    <p className='mr-6'>PL</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th>Available Leave</th>
                                        <th>Requested Days for Leave</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Reason</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>
                                        <td>Rohit</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='mr-6'></p>
                                                <p className='mr-6'>3</p>
                                                <p className='mr-6'></p>
                                            </div>
                                        </td>
                                        <td>20</td>
                                        <td>10</td>
                                        <td>21-05-22</td>
                                        <td>30-5-22</td>
                                        <td>Wedding</td>
                                        
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button class="create-button mb-8 btn block text-white mx-auto action-button">Send for Approval</button>
                </div>
            </div> 
    );
};

export default ListOfLeave;