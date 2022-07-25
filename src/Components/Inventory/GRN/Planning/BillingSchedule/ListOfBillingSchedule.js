import React from 'react';

const ListOfBillingSchedule = ({setRegistered}) => {
    const handleGetBack = () =>{
        setRegistered(''); 
    }
    return (
        <div className='mt-8 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Billing Schedule</h1>

                </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                        <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Iteam Description</th>
                                        <th>Unit</th>

                                        <th>Total Qty</th>
                                        <th>Rate In RS</th>
                                        <th>Amount In RS</th>
                                        <th></th>
                                        <th>Expected Bill Till Mar'22</th>
                                        <th>April</th>
                                        <th>Total</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>S No.</th>
                                        <td>SDF -A- For Pile Execution</td>
                                        <td>Lots</td>
                                        <td>10</td>
                                        <td>4600</td>
                                        <td>8600</td>
                                        <td>
                                            <div>
                                                <p className='font-bold'>Qty</p>
                                                <p className='font-bold'>Amount</p>
                                            </div>
                                        </td>
                                        <td className='flex justify-center'>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>200</p>
                                                <p>200</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p></p>
                                            <p>8600</p>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div> 
        
    );
};

export default ListOfBillingSchedule;