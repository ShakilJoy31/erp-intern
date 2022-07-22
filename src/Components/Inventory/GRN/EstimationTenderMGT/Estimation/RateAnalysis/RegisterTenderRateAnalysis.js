import React, { useState } from 'react';

const RegisterTenderRateAnalysis = ({setCreate, setView, setRegister}) => {
    const [rate, setRate] = useState('');
    const handleGetBack = () =>{
        setCreate('')
        setView('')
        setRegister('')
    }
    const handleCreateProject = () =>{
        setRate('setCreate'); 
    }
    return (
        <div className='mt-12'>
            <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Register Rate Analysis</h1>

                    <div className='flex items-center justify-end mb-8 add-projects'>
                        <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />
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
                                        <th>Master Data No</th>
                                        <th>Date of Creation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>7</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>8</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>9</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>10</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>11</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>12</th>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end '>
                <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white">Save</button>
                </div>
            </div> 
            </div>
    );
};

export default RegisterTenderRateAnalysis;