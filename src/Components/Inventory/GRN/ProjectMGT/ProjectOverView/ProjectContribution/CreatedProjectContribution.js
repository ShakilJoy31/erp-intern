import React, { useState } from 'react';
import CreateProjectContribution from './CreateProjectContribution';

const CreatedProjectContribution = ({ setScurve, setPlanned, setEstimated, setCashflow, setProjectContribution}) => {
    const [curve, setCurve] = useState(''); 
    const handleCreateProject = () =>{
        setCurve('setCurve'); 
    }
    const handleGetBack = () =>{
        setScurve('')
        setPlanned('')
        setEstimated('') 
        setCashflow('')
        setProjectContribution('')
    }
    return (
        <div className='mx-16 mt-12'>
            {
                !curve ? <div>
                    <div>
                        <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
                    <div className='flex items-center ms-12'>
                        <h1 className='mb-10 text-3xl'>Create/Edit/Delete Project Contribution</h1>

                        <div className='flex items-center justify-end mb-8 add-projects'>
                            <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />

                            <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Internal Progress Report</button>

                        </div>
                    </div>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                            <div class="overflow-x-auto">
                                <table class="table w-full">
                                    <thead>
                                        <tr>
                                            <th>S No.</th>
                                            <th>Particular</th>
                                            <th>
                                                <div>
                                                    <h1 className='flex justify-center'>Budget</h1>
                                                    <div className='flex'>
                                                    <p className='mr-10'>For the Month of Nov'22</p>
                                                    <p>Cumulative Till Nov'22</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <h1 className='flex justify-center'>Actual</h1>
                                                    <div className='flex'>
                                                    <p className='mr-6'>Till Oct'22</p>
                                                    <p className='mr-6'>For the Month of Nov'22 (RS Lacs)</p>
                                                    <p>Cumulative Till Nov'22 (Rs.Lacs)</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>Remarks</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <td>Revenue</td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                </div>
                                            </td>
                                            
                                            <td>None</td>

                                        </tr>

                                        <tr>
                                            <td>01</td>
                                            <td>RA Bills</td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                </div>
                                            </td>
                                            <td>None</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>Add: Suppelmentry</td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                </div>
                                            </td>
                                            <td>None</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>Work Certified but not paid by client</td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                </div>
                                            </td>
                                            <td>None</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <th>Total Revenue (1 to 3)</th>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex'>
                                                    <p className='mr-16'>None</p>
                                                    <p className='mr-16'>None</p>
                                                    <p>None</p>
                                                </div>
                                            </td>
                                            <td>None</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> : <div>
                    {
                        curve && <CreateProjectContribution setCurve={setCurve}></CreateProjectContribution>
                    }
                </div>
            }
        </div>
    );
};

export default CreatedProjectContribution;