import React, { useState } from 'react';
import CreatePaymentProposal from './CreatePaymentProposal';

const CreatedPaymentProposal = ({ setEdit, setCreate}) => {
    const [curve, setCurve] = useState(''); 
    const handleGetBack = () =>{
        setEdit('')
        setCreate('')
    }
    const handleCreateProject = () =>{
        setCurve('setCurve')
    }
    return (
        <div className='mx-16 mt-12'>
            {
                !curve ? <div>
                    <div>
                        <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
                    <div className='flex items-center ms-12'>
                        <h1 className='mb-10 text-3xl'>Payment Proposal</h1>

                        <div className='flex items-center justify-end mb-8 add-projects'>
                            <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />

                            <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Internal Progress Report</button>

                        </div>
                    </div>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                            <div class="overflow-x-auto">
                                <table class="table w-full">
                                    <thead>
                                        <tr>
                                            <th>S No.</th>
                                            <th>Vendor Name</th>
                                            <th>Type of work/Material</th>
                                            <th>Total Payable Amount <br></br> upto Dec'12</th>
                                            <th>Certified</th>
                                            <th>Un-Certified</th>
                                            <th>Total</th>
                                            <th>Total Payable amount <br></br> upto Jan </th>
                                            <th>Payment made <br></br> during feb 18</th>
                                            <th>Balance Payable <br></br> liability till date </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>01</th>
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                                            <td>Rohit</td>
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
                        curve && <CreatePaymentProposal setCurve={setCurve}></CreatePaymentProposal>
                    }
                </div>
            }
        </div>
    );
};

export default CreatedPaymentProposal;