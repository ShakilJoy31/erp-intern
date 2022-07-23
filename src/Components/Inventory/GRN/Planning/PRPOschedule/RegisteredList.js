import React, { useState } from 'react';

const RegisteredList = ({ setRegistered }) => {
    const [curve, setCurve] = useState(''); 
    const handleGetBack = () =>{
        setRegistered(''); 
    }
    const handleCreateProject = () =>{
        setCurve('')
    }
    return (
        <div className='mt-12 '>
            {
                !curve ? <div>
                    <div>
                        <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
                    <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Register PRPO Schedule</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                    <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div class="overflow-x-auto">
                                <table class="table w-full">
                                    <thead>
                                        <tr>
                                            <th>SL No.</th>
                                            <th>Project Code</th>
                                            <th>Pr-PO No</th>

                                            <th>Date Of Creation</th>

                                            <th>
                                                Progress Value in INR
                                            </th>
                                            <th>
                                                Item BOQ Linking
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            21505
                                            </td>
                                            <td>
                                            
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> : <div>
                    
                </div>
            }
        </div>
    );
};

export default RegisteredList;