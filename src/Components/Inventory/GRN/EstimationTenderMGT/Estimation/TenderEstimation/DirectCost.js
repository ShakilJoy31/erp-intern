import React, { useState } from 'react';
import IndirectCost from './IndirectCost';

const DirectCost = ({setDirect}) => {
    const [indirect, setinDirect] = useState('');
    const handleGetBack = () =>{
        setDirect(''); 
    }

    const handleProceedToRenderAnalysis = () =>{
        setinDirect('setCreate'); 
    }
    return (
        <div className='mt-8'>
            {
                !indirect ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Direct Cost</h1>

                    <div className='flex items-center justify-end mb-8 add-projects'>
                        <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />
                        <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Description</th>
                                        <th>Unit</th>

                                        <th>Qty</th>
                                        <th>Ref.Rate</th>
                                        <th>Ref Amount</th>
                                        <th>Rate Analysis Item No.</th>

                                        <th>
                                            <div>
                                                <p className='flex justify-center'>
                                                    Rate
                                                </p>
                                                <div className='flex'>
                                                    <p className='mr-6'>Material</p>
                                                    <p className='mr-6'>Labour</p>
                                                    <p className='mr-6'>Plant</p>
                                                    <p className='mr-6'>Sp.Agency</p>
                                                    <p>Total</p>
                                                </div>
                                            
                                            </div>
                                        </th>
                                        <th>
                                            <div>
                                                <p className='flex justify-center'>
                                                    Direct Cost
                                                </p>
                                                <div className='flex'>
                                                    <p className='mr-6'>Material</p>
                                                    <p className='mr-6'>Labour</p>
                                                    <p className='mr-6'>Plant</p>
                                                    <p className='mr-6'>Sp.Agency</p>
                                                    <p>Total</p>
                                                </div>
                                                
                                            </div>
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth work in excavation by mechanical means (Hydraulic <br></br> excavator) / manual means over areas (exceeding 30cm in <br></br> depth. 1.5m in width as well as 10 sqm on plan)  including <br></br> disposal of excavated earth, lead upto 50m and lift upto <br></br> 1.5m, disposed earth to be levelled and neatly dressed.</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>02</th>
                                        <td>Earth work in excavation by mechanical means (Hydraulic <br></br> excavator) / manual means over areas (exceeding 30cm in <br></br> depth. 1.5m in width as well as 10 sqm on plan)  including <br></br> disposal of excavated earth, lead upto 50m and lift upto <br></br> 1.5m, disposed earth to be levelled and neatly dressed.</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>03</th>
                                        <td>Earth work in excavation by mechanical means (Hydraulic <br></br> excavator) / manual means over areas (exceeding 30cm in <br></br> depth. 1.5m in width as well as 10 sqm on plan)  including <br></br> disposal of excavated earth, lead upto 50m and lift upto <br></br> 1.5m, disposed earth to be levelled and neatly dressed.</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>04</th>
                                        <td>Earth work in excavation by mechanical means (Hydraulic <br></br> excavator) / manual means over areas (exceeding 30cm in <br></br> depth. 1.5m in width as well as 10 sqm on plan)  including <br></br> disposal of excavated earth, lead upto 50m and lift upto <br></br> 1.5m, disposed earth to be levelled and neatly dressed.</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>05</th>
                                        <td>Earth work in excavation by mechanical means (Hydraulic <br></br> excavator) / manual means over areas (exceeding 30cm in <br></br> depth. 1.5m in width as well as 10 sqm on plan)  including <br></br> disposal of excavated earth, lead upto 50m and lift upto <br></br> 1.5m, disposed earth to be levelled and neatly dressed.</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    
                                    

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end '>
                <button onClick={handleProceedToRenderAnalysis} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white">Proceed to Indirect Cost</button>
                </div>
            </div>  : <div>
                {
                    indirect && <IndirectCost setinDirect={setinDirect}></IndirectCost>
                }
            </div>
            }        
        </div>
    );
};

export default DirectCost;