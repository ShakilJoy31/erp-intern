import React from 'react';

const AllRegisteredGRN = ({setRegisteredGRN}) => {
    const handleGetBack = () =>{
        setRegisteredGRN(''); 
    }

    const handleCreateProject = () =>{
         
    }
    return (
        <div className='mt-8 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>GRN</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                        <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>GRN No.</th>
                                        <th>GRN Type</th>
                                        <th>Project Code</th>

                                        <th>Invoice No.</th>
                                        <th>GRN Date</th>
                                        <th>Invoice Date</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>GRN06</th>
                                        <td>P04566</td>
                                        <td>PC120</td>
                                        <td>Invoice No.</td>
                                        <td>GRN Date</td>
                                        <td>Invoice Date</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div> 
    );
};

export default AllRegisteredGRN;