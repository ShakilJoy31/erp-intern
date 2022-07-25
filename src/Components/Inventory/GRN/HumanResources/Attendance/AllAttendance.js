import React from 'react';

const AllAttendance = ({setList}) => {
    const handleGetBack = () =>{
        setList(''); 
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
                    <h1 className='text-3xl mb-10'>Create Attendance</h1>

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
                                        <th>Staff</th>
                                        <th>Staff ID</th>
                                        <th>Department</th>

                                        <th>Project Code</th>
                                        <th>
                                            <div>
                                                <p className='ageing'>Date</p>
                                                <div className='flex mr-4'>
                                                    <p className='mr-4'>1</p>
                                                    <p className='mr-4'>2</p>
                                                    <p className='mr-4'>3</p>
                                                    <p className='mr-4'>4</p>
                                                    <p className='mr-4'>5</p>
                                                    <p className='mr-4'>6</p>
                                                    <p className='mr-4'>7</p>
                                                    <p className='mr-4'>8</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>10</p>
                                                    <p className='mr-4'>11</p>
                                                    <p className='mr-4'>12</p>
                                                    <p className='mr-4'>13</p>
                                                    <p className='mr-4'>14</p>
                                                    <p className='mr-4'>15</p>
                                                    <p className='mr-4'>16</p>
                                                    <p className='mr-4'>17</p>
                                                    <p className='mr-4'>18</p>
                                                    <p className='mr-4'>19</p>
                                                    <p className='mr-4'>20</p>
                                                    <p className='mr-4'>21</p>
                                                    <p className='mr-4'>22</p>
                                                    <p className='mr-4'>23</p>
                                                    <p className='mr-4'>24</p>
                                                    <p className='mr-4'>25</p>
                                                    <p className='mr-4'>26</p>
                                                    <p className='mr-4'>27</p>
                                                    <p className='mr-4'>28</p>
                                                    <p className='mr-4'>29</p>
                                                    <p className='mr-4'>30</p>
                                                </div> 
                                            </div>
                                        </th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>adm-4321</td>
                                        <td>Sales</td>
                                        <td>PKL53431</td>
                                        <td>
                                        <div className='flex mr-4'>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>9</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                    <p className='mr-4'>p</p>
                                                </div> 
                                        </td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div> 
    );
};

export default AllAttendance;