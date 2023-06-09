import React from 'react';
import {useState} from 'react'; 
import CreatePlannedAchieved from './CreatePlannedAchieved';

const CreatedPlannedAchieved = ({ setCreate, setEdit}) => {
    const [curve, setCurve] = useState('');
    const handleGetBack = () =>{
        setCreate('');
        setEdit('');
    }

    const handleCreateProject = () =>{
    setCurve('setCurve'); 
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
                    <h1 className='text-3xl mb-10'>Create/Edit/Delete S-Curve</h1>

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
                                    <th>Client</th>
                                    <th>Site Name</th>
                                    <th>Contract Value</th>
                                    <th>Present Scope</th>
                                    <th>Present Scope (Net of Tax) </th>
                                    <th>Total Sale value <br></br> Upto Mar'22 (Net of Tax) </th>
                                    <th>Balance sale Value Beyond Mar'22</th>
                                    <th>Sell Value Planned <br></br> for FY-2020-22 (Net of Tax)</th>
                                    <th>
                                        <h1 className='flex justify-center'>Apr-22</h1>
                                        <div className='flex'>
                                            <p className='mr-10'>Pland</p>
                                            <p>Achvd</p>
                                        </div>

                                    </th>
                                    <th>
                                        <h1 className='flex justify-center'>May-22</h1>
                                        <div className='flex'>
                                            <p className='mr-10'>Pland</p>
                                            <p>Achvd</p>
                                        </div>
                                    </th>
                                    <th>
                                        <h1 className='flex justify-center'>Jun-22</h1>
                                        <div className='flex'>
                                            <p className='mr-10'>Pland</p>
                                            <p>Achvd</p>
                                        </div>
                                    </th>
                                    <th>
                                        <h1 className='flex justify-center'>Total For FY -20-22</h1>
                                        <div className='flex'>
                                            <p className='mr-10'>Pland</p>
                                            <p>Achvd</p>
                                        </div>
                                    </th>
                                    <th>Balance to be billed <br></br> Beyond Mar'22</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th></th>
                                    <td></td>
                                    <td></td>
                                    <td>(LACS)</td>
                                    <td>(LACS)</td>
                                    <td>(LACS)</td>
                                    <td>(LACS)</td>
                                    <td>(LACS)</td>
                                    <td>(LACS)</td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>(LACS)</p>
                                            <p>(LACS)</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>(LACS)</p>
                                            <p>(LACS)</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>(LACS)</p>
                                            <p>(LACS)</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>(LACS)</p>
                                            <p>(LACS)</p>
                                        </div>
                                    </td>
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <th>A</th>
                                    <td></td>
                                    <td>Project in Handling over stage</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>
                                        <div>
                                            <p>01</p>
                                            <p>02</p>
                                        </div>
                                    </th>
                                    <td>Hooghly River Bridge Commissioners, Kolkata</td>
                                    <td>
                                        <div>
                                            <p>HRBC- Hospital Package -I
                                                (Metiburz, Kakdwip, Sagardighi
                                                and Bolpur)</p>
                                            <p>HRBC- Hospital Package -I
                                                (Metiburz, Kakdwip, Sagardighi
                                                and Bolpur)</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>29876</p>
                                    </td>

                                </tr>
                                <tr>
                                    <th></th>
                                    <td></td>
                                    <td>Subtotal (A) =</td>
                                    <td>29876</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>



                                {/* Second Part */}
                                <tr>
                                    <th>B</th>
                                    <td></td>
                                    <td>Project in Handling over stage</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>
                                        <div>
                                            <p>01</p>
                                            <p>02</p>
                                        </div>
                                    </th>
                                    <td>Hooghly River Bridge Commissioners, Kolkata</td>
                                    <td>
                                        <div>
                                            <p>HRBC- Hospital Package -I
                                                (Metiburz, Kakdwip, Sagardighi
                                                and Bolpur)</p>
                                            <p>HRBC- Hospital Package -I
                                                (Metiburz, Kakdwip, Sagardighi
                                                and Bolpur)</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            <p className='mr-10'>29876</p>
                                            <p>29876</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>29876</p>
                                    </td>

                                </tr>
                                <tr>
                                    <th></th>
                                    <td></td>
                                    <td>Subtotal (B) =</td>
                                    <td>29876</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td></td>
                                    <td>Total (A+B) =</td>
                                    <td>29876</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> : <div>
            {
                curve && <CreatePlannedAchieved setCurve={setCurve}></CreatePlannedAchieved>
            }
        </div>
    }
</div>
    );
};

export default CreatedPlannedAchieved;

