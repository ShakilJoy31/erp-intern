import React, { useState } from 'react';

const TenderRateAnalysis = ({ setCreate, setView, setRegister}) => {
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
                    <h1 className='mb-10 text-3xl'>Tender Rate Analysis</h1>

                    <div className='flex items-center justify-end mb-8 add-projects'>
                        <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />
                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Iteam</th>
                                        <th>Unit</th>

                                        <th>Qty</th>
                                        <th>Wastage</th>
                                        <th>Total</th>
                                        <th>Rate per Unit</th>
                                        <th>Total Amount</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>A-1(a)</th>
                                        <td>Dewatering Pump <br></br> Well point br Sub-total <br></br> <san className='font-bold'>Sub total</san> </td>
                                        <td>Cum <br></br> LS</td>
                                        <td>15</td>
                                        <td>0</td>
                                        <td>15</td>
                                        <td>10</td>
                                        <td>500 <br></br> 500</td>
                                    </tr>
                                    <tr>
                                        <th>Labour Rate</th>
                                        <td>Dewatering Pump <br></br> Well point br Sub-total <br></br> <san className='font-bold'>Sub total</san> </td>
                                        <td>Cum <br></br> LS</td>
                                        <td>15</td>
                                        <td>0</td>
                                        <td>15</td>
                                        <td>10</td>
                                        <td>500 <br></br> 500</td>
                                    </tr>
                                    <tr>
                                        <th>Subcontractor Rate</th>
                                        <td>Dewatering Pump <br></br> Well point br Sub-total <br></br> <san className='font-bold'>Sub total</san> </td>
                                        <td>Cum <br></br> LS</td>
                                        <td>15</td>
                                        <td>0</td>
                                        <td>15</td>
                                        <td>10</td>
                                        <td>500 <br></br> 500</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td className='font-bold'>Total</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>15000</td>
                                    </tr>
                                    <tr>
                                        <th>A-1(a)</th>
                                        <td>Dewatering Pump <br></br> Well point br Sub-total <br></br> <san className='font-bold'>Sub total</san> </td>
                                        <td>Cum <br></br> LS</td>
                                        <td>15</td>
                                        <td>0</td>
                                        <td>15</td>
                                        <td>10</td>
                                        <td>500 <br></br> 500</td>
                                    </tr>
                                    <tr>
                                        <th>Labour Rate</th>
                                        <td>Dewatering Pump <br></br> Well point br Sub-total <br></br> <san className='font-bold'>Sub total</san> </td>
                                        <td>Cum <br></br> LS</td>
                                        <td>15</td>
                                        <td>0</td>
                                        <td>15</td>
                                        <td>10</td>
                                        <td>500 <br></br> 500</td>
                                    </tr>
                                    <tr>
                                        <th>Subcontractor Rate</th>
                                        <td>Dewatering Pump <br></br> Well point br Sub-total <br></br> <san className='font-bold'>Sub total</san> </td>
                                        <td>Cum <br></br> LS</td>
                                        <td>15</td>
                                        <td>0</td>
                                        <td>15</td>
                                        <td>10</td>
                                        <td>500 <br></br> 500</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td className='font-bold'>Total</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>15000</td>
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

export default TenderRateAnalysis;