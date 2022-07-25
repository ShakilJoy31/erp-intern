import React, { useState } from 'react';
import NewProject from './NewProject';

const AllEstimationTender = ({ setCreate, setEdit, setRegister }) => {
    const [createTender, setCreateTender] = useState(''); 
    const handleCreateProject = () =>{
        setCreateTender('setCreateTender'); 
    }
    const handleGetBack = () =>{
        console.log('clicked');
        setCreate('');
        setEdit('');
        setRegister('');
    }
    return (
        <div className='mt-8'>
        {
            !createTender ? <div>
                <div>
                <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>New Project</h1>

                    <div className='flex items-center justify-end mb-8 add-projects'>
                        <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />

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
                                        <th>TP Code</th>
                                        <th>Date of Creation</th>

                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <div>
                {
                    createTender && <NewProject setCreateTender={setCreateTender}></NewProject>
                }
            </div>
        }
    </div>
    );
};

export default AllEstimationTender;