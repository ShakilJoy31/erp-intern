import React, { useState } from 'react';
import NewScurve from './NewScurve';

const CreatedScurve = ({setCreate}) => {
    const [sCurve, setScurve] = useState(''); 
    const handleGetBack = () =>{
        setCreate(''); 
    }
    const handleCreateProject = () =>{
        setScurve('setScurve'); 
    }
    return (
        <div className='mx-16 mt-12'>
            {
                !sCurve ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                <h1 className='mb-10 text-3xl'>Create S-Curve</h1>

                <div className='flex items-center justify-end mb-8 add-projects'>
                <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-12" />

                <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                </div>
                </div>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table w-full">

                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>I</th>
                                        <th>II</th>
                                        <th>III</th>
                                        <th>IV</th>
                                        <th>V</th>
                                        <th>VI</th>
                                        <th>VII</th>
                                        <th>VIII</th>
                                        <th>IX</th>
                                        <th>X</th>
                                        <th>
                                            <div>
                                                <h1 className='flex justify-center'>Task Name</h1>
                                            </div>
                                        </th>
                                        <th>Duration</th>
                                        <th>Start</th>
                                        <th>Finish</th>
                                        <th>% Complete</th>


                                        <th className='grid'>
                                            <h1 className='flex justify-center'>Planned</h1>
                                            <div className='flex'>
                                               <p className='mr-8'>Jan-22</p>
                                                <p className='mr-8'>Feb-22</p>
                                                <p className='mr-8'>Mar-22</p>
                                                <p className='mr-8'>APr-22</p>
                                                <p className='mr-8'>May-22</p>
                                                <p className='mr-8'>Jun-22</p>
                                                <p className='mr-8'>Jul-22</p>
                                                <p className='mr-8'>Aug-22</p>
                                                <p className='mr-8'>Sep-22</p>
                                                <p className='mr-8'>Oct-22</p>
                                                <p className='mr-8'>Nov-22</p>
                                                <p className='mr-8'>Dec-22</p>
                                                
                                            </div>
                                        </th>
                                        <th>
                                            <h1 className='flex justify-center'>Achieved</h1>
                                            <div className='flex'>
                                               <p className='mr-8'>Jan-22</p>
                                                <p className='mr-8'>Feb-22</p>
                                                <p className='mr-8'>Mar-22</p>
                                                <p className='mr-8'>APr-22</p>
                                                <p className='mr-8'>May-22</p>
                                                <p className='mr-8'>Jun-22</p>
                                                <p className='mr-8'>Jul-22</p>
                                                <p className='mr-8'>Aug-22</p>
                                                <p className='mr-8'>Sep-22</p>
                                                <p className='mr-8'>Oct-22</p>
                                                <p className='mr-8'>Nov-22</p>
                                                <p className='mr-8'>Dec-22</p>
                                                
                                            </div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>01</td>
                                        <td>Design, Engineering & statutory Clearances</td>
                                        <td>145 Days</td>
                                        <td>01-06-22</td>
                                        <td>01-06-22</td>
                                        <td>10%</td>
                                        <td>
                                            <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div className='flex'>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                                <p className='ml-4 mr-8'>01</p>
                                            </div>
                                        </td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <div>
              {
                sCurve && <NewScurve setScurve={setScurve}></NewScurve>
              }
            </div>
            }
        </div>
    );
};

export default CreatedScurve;