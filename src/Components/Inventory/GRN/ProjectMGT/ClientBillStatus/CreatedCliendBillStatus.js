import React, { useState } from 'react';
import CreateClientBillStatus from './CreateClientBillStatus';

const CreatedCliendBillStatus = ({ setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill }) => {
    const [curve, setCurve] = useState(''); 
    const handleGetBack = () =>{
        setProject('');
        setClientBOQ('');
        setUploadDocuments('');
        setProjectSalient('');
        setLabourProductivity('');
        setClientBill('');
        setProjectCost('');
        setPurchaseRequisition('');
        setInternalProgress('');
        setClientProgress('');
        setProjectOverView('');
        setWeeklyFund('');
        setPaymentProposal('');
        setClientBillStatus('');
        setVendorBill('');
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
                    <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Create Client Bill</h1>

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
                                            <th>Work Site</th>
                                            <th>RA Bill No</th>
                                            <th>Month</th>

                                            <th>Invoice No</th>

                                            <th>Invoice Date</th>

                                            <th>Invoice Amount</th>
                                            <th>GST%</th>
                                            <th>Swachh Bgarat</th>
                                            <th>Krishi Kalyan</th>
                                            <th>Relation</th>
                                            <th>Mobilisation on advance <br></br>Recovery </th>
                                            <th>L.D</th>
                                            <th>Debit Note</th>
                                            <th>TDS</th>
                                            <th>WCT</th>
                                            <th>C.W.W.C</th>

                                            <th>Payable Amount</th>

                                            <th>Date</th>
                                            <th>Cheque Amount</th>
                                            <th>Total Outstanding Amount</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>01</th>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
                                            <td>None</td>
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
                        curve && <CreateClientBillStatus setCurve={setCurve}></CreateClientBillStatus>
                    }
                </div>
            }
        </div>
    );
};

export default CreatedCliendBillStatus;