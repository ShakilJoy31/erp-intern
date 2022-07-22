import React from 'react';

const ListAttendence = ({setList}) => {
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
                    <h1 className='mb-10 text-3xl'>Create Attendance</h1>

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
                                        <th>Staff</th>
                                        <th>Staff ID</th>
                                        <th>Department</th>

                                        <th>Project Code</th>
                                        <th>For the date</th>
                                        <th>Status mark as</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>20 May 2022</td>
                                        <td>Present</td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div> 
    );
};

export default ListAttendence;