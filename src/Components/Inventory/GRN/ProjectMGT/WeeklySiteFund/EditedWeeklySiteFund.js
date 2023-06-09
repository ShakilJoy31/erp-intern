import React, { useState } from 'react';
import EditWeeklySiteFund from './EditWeeklySiteFund';

const EditedWeeklySiteFund = ({ setEdit, setCreate}) => {
    const [curve, setCurve] = useState(''); 
    const handleGetBack = () =>{
        setEdit('')
        setCreate('')
    }
    const handleCreateProject = () =>{
        setCurve('setCurve')
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
                    <h1 className='text-3xl mb-10'>Create/Edit/Delete weekly site fund</h1>

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
                                            <th>Description</th>
                                            <th>Utilised upto previous Month</th>
                                            <th>1st Week</th>
                                            <th>2nd Week</th>
                                            <th>3rd Week</th>
                                            <th>4th Week</th>
                                            <th>5th Week</th>
                                            <th>Total Required for the month</th>
                                            <th>Total Required for the month</th>
                                            <th>Actual utilised till <br></br> Last week for the month</th>
                                            <th>Cumulative Utilised</th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                        <tr>
                                            <th>01</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>02</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>03</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>04</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>05</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>06</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>07</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>08</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>09</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>10</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>11</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                        <tr>
                                            <th>12</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> : <div>
                    {
                        curve && <EditWeeklySiteFund setCurve={setCurve}></EditWeeklySiteFund>
                    }
                </div>
            }
        </div>
    );
};

export default EditedWeeklySiteFund;