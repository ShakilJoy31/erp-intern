import React, { useState } from 'react';

const EditedList = ({ setRegistered }) => {
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
                    <h1 className='mb-10 text-3xl'>Edit/View/Delete</h1>

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
                                            <th>Description</th>
                                            <th>Unit</th>

                                            <th>Qty</th>

                                            <th>
                                                <div>
                                                    <p className='ageing'>Purchase Requisition Details</p>
                                                    <div className='flex'>
                                                        <p className='mr-6'>PR No</p>
                                                        <p className='mr-6'>Schedule Date</p>
                                                        <p className='mr-6'>Actual Date</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p className='ageing'>Purchase Order Details</p>
                                                    <div className='flex'>
                                                        <p className='mr-6'>PR No.</p>
                                                        <p className='mr-6'>P.O Schedule Date</p>
                                                        <p className='mr-6'>PO Value</p>
                                                        <p className='mr-6'>PO Actual Date</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p className='ageing'>Delivery Details</p>
                                                    <div className='flex'>
                                                        <p className='mr-6'>Duration From date</p>
                                                        <p className='mr-6'>Delevery Schedule date</p>
                                                        <p className='mr-6'>Actual Delivery date</p>
                                                        
                                                    </div>
                                                </div>
                                            </th>

                                            <th>Action to be taken by</th>
                                            <th>Remarks</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
                                        </tr>
                                        <tr>
                                            <th>01</th>
                                            <td>Earthwork</td>
                                            <td>21505</td>
                                            <td>21505</td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>21505</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                    </div>
                                            </td>
                                            <td>
                                            <div className='flex'>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        <p className='mr-6'>01-06-2022</p>
                                                        
                                                    </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            
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

export default EditedList;