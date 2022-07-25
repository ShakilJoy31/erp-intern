import React, { useState } from 'react';
import SaveTenderEstimation from './SaveTenderEstimation';

const IndirectCost = ({setinDirect}) => {
    const [forSave, setforSave] = useState('');
    const handleGetBack = () =>{
        setinDirect(''); 
    }

    const handleProceedToRenderAnalysis = () =>{
        setforSave('setCreate'); 
    }
    return (
        <div className='mt-8'>
            {
                !forSave ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Indirect Cost</h1>

                    <div className='flex items-center justify-end mb-8 add-projects'>
                        <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />
                        <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <h1 className='flex justify-center text-xl'>Indirect Cost Analysis Sheet (For Civil Works)</h1>
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>Duration of Project</th>
                                        <th>13000</th>
                                        <th>Months</th> 
                                        <th></th> 
                                        <th></th> 
                                        <th></th> 
                                        <th></th> 
                                    </tr>
                                    <tr>
                                        <th>Defect Liability Period</th>
                                        <th>12000</th>
                                        <th>Month</th> 
                                        <th></th> 
                                        <th></th> 
                                        <th></th> 
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>Approx Project Value (RS)</th>
                                        <th>250000000.00</th>
                                        <th></th> 
                                        <th></th> 
                                        <th></th> 
                                        <th></th> 
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Item</th>
                                        <th>Unit</th> 
                                        <th>Qty</th> 
                                        <th>Rate</th> 
                                        <th>Amount</th> 
                                        <th>Total</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>Earth (Borrow pit)</td>
                                        <td>Cum</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                        <td>21505</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end '>
                <button onClick={handleProceedToRenderAnalysis} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white">Save</button>
                </div>
            </div>  : <div>
                {
                    forSave && <SaveTenderEstimation setforSave={setforSave}></SaveTenderEstimation>
                }
            </div>
            }        
        </div>
    );
};

export default IndirectCost;