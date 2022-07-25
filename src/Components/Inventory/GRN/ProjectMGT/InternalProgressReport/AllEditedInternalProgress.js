import React from 'react';
import {useState} from 'react'; 
import EditInternalProgressReportReport from './EditInternalProgressReportReport';

const AllEditedInternalProgress = ({ setEdit, setCreate}) => {
    const [create, setCreateInternal] = useState(''); 
    const handleGetBack = () =>{
        setEdit('');
        setCreate('');
    }
    const handleCreateInternalProgress = () =>{
        setCreateInternal('setCreateInternal')
    }
    return (
        <div className='mx-16 mt-8'>
            {
                !create ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Edit/View/Delete Internal Progress Report</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateInternalProgress} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table w-full">

                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Item</th>
                                        <th>Qty</th>
                                        <th>Price</th>

                                        <th>
                                            Planned Till <br></br> Period Before Consideration
                                        </th>

                                        <th>Done Before <br></br>period is Consideration</th>

                                        <th>Planned for <br></br>period is Consideration</th>

                                        <th className='grid'>
                                            <h1 className='flex justify-center'>For The Period</h1>
                                            <div className='flex'>
                                                <p>Till Previous Day</p>
                                                <p className='mx-4'>Today</p>
                                                <p>Cumulative</p>
                                            </div>
                                        </th>

                                        <th>Cumulative QTY</th>

                                        <th className='grid'>
                                            <h1 className='flex justify-center'>Amount</h1>
                                            <div className='flex'>
                                                <p>Till Previous Day</p>
                                                <p className='mx-4'>Today</p>
                                                <p>Cumulative</p>
                                            </div>
                                        </th>

                                        <th>
                                            Amount Before <br></br> Period in Consideration
                                        </th>

                                        <th>Cumulative Amount</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>01</td>

                                        <td>Pencil</td>

                                        <td>2022
                                        </td>

                                        <td>2022
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>

                                        <td>None
                                        </td>


                                        <td>
                                            <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                        <div className='flex'>
                                                <p className='ml-2'>None</p>
                                                <p className='ml-14'>None</p>
                                                <p>None</p>
                                            </div>
                                        </td>

                                        <td>None
                                        </td>

                                        <td>
                                            None
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <div>
                {
                    create && <EditInternalProgressReportReport setCreateInternal={setCreateInternal}></EditInternalProgressReportReport>
                }
            </div>
            }
        </div>
    );
};

export default AllEditedInternalProgress;