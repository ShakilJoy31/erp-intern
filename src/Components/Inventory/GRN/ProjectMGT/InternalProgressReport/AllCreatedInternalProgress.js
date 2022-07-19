import React from 'react';
import {useState} from 'react'; 
import CreateProgressReport from './CreateProgressReport';

const AllCreatedInternalProgress = ({ setEdit, setCreate }) => {
    const [create, setCreateInternal] = useState(''); 
    const handleGetBack = () => {
        setEdit('');
        setCreate('');
    }
    const handleCreateInternalProgress = () =>{
        setCreateInternal('setCreateInternal')
    }
    return (
        <div className='mx-16 mt-12'>
            {
                !create ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
            <h1 className='mb-10 text-3xl'>Internal Progress Report</h1>

            <div className='flex items-center justify-end mb-8 add-projects'>
            <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-12" />

            <button onClick={handleCreateInternalProgress} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

            </div>
            </div>
                <div class="card flex justify-center shadow-2xl bg-white">
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
                    create && <CreateProgressReport setCreateInternal={setCreateInternal}></CreateProgressReport>
                }
            </div>
            }
        </div>
    );
};

export default AllCreatedInternalProgress;