import React, { useState } from 'react';
import CreateCashFlowPlanned from './CreateCashFlowPlanned';

const CreatedCashFlowPlanned = ({ setScurve, setPlanned, setEstimated, setCashflow, setProjectContribution}) => {
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
        <div className='mx-16 mt-8'>
            {
                !curve ? <div>
                    <div>
                        <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
                    <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Create Cash Flow planned</h1>

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
                                            <th>S No.</th>
                                            <th>Project Name</th>
                                            <th>Particulars</th>
                                            <th>Up To</th>
                                            <th>Mar-22</th>
                                            <th>Apr-22</th>
                                            <th>May-22</th>
                                            <th>Jun-22</th>
                                            <th>Jul-22</th>

                                            <th>Aug-22</th>
                                            <th>Sep-22</th>
                                            <th>Total for</th>
                                            <th>Cumulative</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>01</td>
                                            <th>DUM DUM</th>
                                            <td>Particulars <br></br>
                                                Work Bill Value in Lacs (Plan)<br></br>
                                                Work Bill Value in Lacs (Actual)<br></br>
                                                Cash inflow in Lacs (Plan)<br></br>
                                                Basic<br></br>
                                                GST<br></br>
                                                GST<br></br>
                                                Cash inflow in Lacs (Actual)<br></br>
                                                Cash outflow in Lacs (Plan)<br></br>
                                                Direct<br></br>
                                                Fixed<br></br>
                                                Cash outflow in Lacs (Actual)<br></br>
                                                Net Flow - Plan<br></br>
                                                Net Flow - Actual</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>

                                        </tr>

                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Net Flow-Actual</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                            <td>0000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> : <div>
                    {
                        curve && <CreateCashFlowPlanned setCurve={setCurve}></CreateCashFlowPlanned>
                    }
                </div>
            }
        </div>
    );
};

export default CreatedCashFlowPlanned;