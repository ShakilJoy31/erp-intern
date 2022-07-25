import React, { useState } from 'react';
import CreateTenderEstimation from './CreateTenderEstimation';
import ProceedToTenderAnalysis from './ProceedToTenderAnalysis';

const MaterialRates = ({ setCreate, setView, setRegister}) => {
    const [rate, setRate] = useState('');
    const [proceed, setProceed] = useState('');
    const handleGetBack = () =>{
        setCreate('')
        setView('')
        setRegister('')
    }
    const handleCreateProject = () =>{
        setRate('setCreate'); 
    }

    const handleProceedToRenderAnalysis = () =>{
        setProceed('setCreate'); 
    }
    return (
        <div className='mt-8'>
        {
            ( !rate && !proceed ) ? <div>
                <div>
                    <i onClick={handleGetBack} class="fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Materials Rate</h1>

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
                                        <th>Material</th>
                                        <th>Unit</th>

                                        <th>Base rate in Rs. INR</th>
                                        <th>Base Price</th>
                                        <th>GST%</th>
                                        <th>GST Amount in Rs. INR</th>
                                        <th>Gross rate in RS. INR</th>
                                        <th>Remark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>02</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>03</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>04</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>05</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>06</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>07</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>08</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>09</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>10</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>11</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>12</th>
                                        <td>Earth (Borrow plt)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>18</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
                <div className='flex justify-end '>
                <button onClick={handleProceedToRenderAnalysis} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white">Proceed to Create Rate analysis master data</button>
                </div>
            </div> : <div>
                {
                    rate && <CreateTenderEstimation setRate={setRate} setProceed={setProceed}></CreateTenderEstimation>
                }
                {
                    proceed && <ProceedToTenderAnalysis setRate={setRate} setProceed={setProceed}></ProceedToTenderAnalysis>
                }
            </div>
        }
    </div>
    );
};

export default MaterialRates;