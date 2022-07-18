import React from 'react';
import {useState} from 'react'; 
import CreateSalient from './CreateSalient';

const AllSalient = ({setRegister, setEdit, setCreate}) => {
    const [createSalient, setCreateSalient] = useState('')
    const handleGetBack = () =>{
        setRegister('')
        setEdit('')
        setCreate('')
    }
    const handleGotoCreateSalient = () =>{
        setCreateSalient('setCreateSalient'); 
    }
    return (
        <div className='mx-16 mt-12'>
            {
                !createSalient ? <div>
                <div>
                    <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                <h1 className='mb-10 text-3xl'>Create Project</h1>

                <div className='flex items-center justify-end mb-8 add-projects'>
                <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-12" />

                <button onClick={handleGotoCreateSalient} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                </div>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
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
                                        <th>1</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>2</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>3</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>4</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>5</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>6</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>7</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>8</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>9</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>10</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>11</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>12</th>
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
                createSalient && <CreateSalient setCreateSalient={setCreateSalient}></CreateSalient>
              }
            </div>
            }
        </div>
    );
};

export default AllSalient;