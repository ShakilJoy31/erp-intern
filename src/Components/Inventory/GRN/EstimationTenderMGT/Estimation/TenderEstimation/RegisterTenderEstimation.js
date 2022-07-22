import React, {useState} from 'react';
import FormOfRegisterTenderEstimation from './FormOfRegisterTenderEstimation';

const RegisterTenderEstimation = ({ setCreate, setView, setRegister}) => {
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
        {
            !rate ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Register Rate Rate Analysis</h1>

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
                                        <th>TP Code</th>
                                        <th>Employer</th>

                                        <th>Estimated Price</th>
                                        <th>Date of Creation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>01</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>02</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>03</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>04</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>05</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>06</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>07</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>08</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>09</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>10</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>11</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>
                                    <tr>
                                        <th>12</th>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                        <td>01-06-2022</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div> : <div>
                {
                    rate && <FormOfRegisterTenderEstimation setRate={setRate}></FormOfRegisterTenderEstimation>
                }
            </div>
        }
    </div>
    );
};

export default RegisterTenderEstimation;