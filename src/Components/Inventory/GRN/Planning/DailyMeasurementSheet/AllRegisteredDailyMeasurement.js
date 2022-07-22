import React from 'react';

const AllRegisteredDailyMeasurement = ({setRegistered}) => {
    const handleGetBack = () =>{
        setRegistered(''); 
    }

    const handleCreateProject = () =>{
         
    }
    return (
        <div className='mt-12 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Client Measurement Sheet</h1>
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
                                        <th>BOQ Item</th>
                                        <th>UOM</th>
                                        <th>
                                            Qty
                                        </th>
                                        <th>
                                            Price
                                        </th> 
                                        <th>
                                            Till Previous Bill
                                        </th>
                                        <th>
                                            This Bill
                                        </th>

                                        
                                        <th>
                                        CUMULATIVE QNTY AS PER DPR
                                        </th>
                                        <th>
                                        Till Previous Bill
                                        </th>
                                        <th>
                                        This Bill
                                        </th>
                                        <th>
                                        CUMULATIVE Bill
                                        </th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-red-500'>
                                        Unpaid
                                        </td>
                                        
                                        <td className='text-red-500'>
                                            Unpaid
                                        </td>
                                        <td className='text-red-500'>
                                            Unpaid
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-red-500'>
                                        Unpaid
                                        </td>
                                        
                                        <td className='text-red-500'>
                                            Unpaid
                                        </td>
                                        <td className='text-red-500'>
                                            Unpaid
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>4.5m - 6.0m</td>
                                        <td>Main Branch</td>
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        2022
                                        </td>
                                        
                                        <td>
                                        Zero
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td>
                                        Zero 
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        
                                        <td className='text-green-500'>
                                        Partial
                                        </td>
                                        <td className='text-green-500'>
                                        Partial
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

export default AllRegisteredDailyMeasurement;