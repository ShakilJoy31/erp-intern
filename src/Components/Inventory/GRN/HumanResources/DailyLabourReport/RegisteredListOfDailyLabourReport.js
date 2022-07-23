import React from 'react';

const RegisteredListOfDailyLabourReport = ({setList}) => {
    const handleGetBack = () =>{
        setList(''); 
    }

    const handleCreateProject = () =>{
         
    }
    return (
        <div className='mt-12 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Register Offer Letter</h1>

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
                                        <th>SL No.</th>
                                        <th>Type of Labour</th>

                                        <th>NOS</th>
                                        <th>Wages</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <div>
                                                <p>1</p>
                                                <p>2</p>
                                                <p>3</p>
                                                <p>4</p>
                                            </div>
                                        </th>
                                        <td>
                                        <div>
                                                <p>Highly Skilled</p>
                                                <p>Skilled</p>
                                                <p>Semi Skilled</p>
                                                <p>Semi Skilled</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>20</p>
                                                <p>10</p>
                                                <p>08</p>
                                                <p>04</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>650</p>
                                                <p>500</p>
                                                <p>450</p>
                                                <p>300</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>Edit</p>
                                                <p>Edit</p>
                                                <p>Edit</p>
                                                <p>Edit</p>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr>
                                        <th>
                                            Overtime
                                        </th>
                                        <th>
                                        Type of Labour
                                        </th>
                                        <th>
                                        NOS
                                        </th>
                                        <th>
                                        Wages
                                        </th>
                                        <th>
                                        Action
                                        </th>
                                    </tr>
                                    

                                    <tr>
                                        <th>
                                            <div>
                                                <p>1</p>
                                                <p>2</p>
                                                <p>3</p>
                                                <p>4</p>
                                            </div>
                                        </th>
                                        <td>
                                        <div>
                                                <p>Highly Skilled</p>
                                                <p>Skilled</p>
                                                <p>Semi Skilled</p>
                                                <p>Semi Skilled</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>20</p>
                                                <p>10</p>
                                                <p>08</p>
                                                <p>04</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>650</p>
                                                <p>500</p>
                                                <p>450</p>
                                                <p>300</p>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <p>Edit</p>
                                                <p>Edit</p>
                                                <p>Edit</p>
                                                <p>Edit</p>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr>
                                        <th>
                                            <div>
                                                <p>Total Labour</p>
                                                <p>Total Daily Wages</p>
                                                <p>Total Overtime Wages</p>
                                            
                                            </div>
                                        </th>
                                        <td>
                                        
                                        </td>
                                        <td>
                                        <div>
                                                <p>42</p>
                                                <p>22800</p>
                                                <p>2360</p>
                                                
                                            </div>
                                        </td>
                                        <td>
                                        
                                        </td>
                                        <td>
                                        
                                        </td>
                                    </tr>



                                    <tr>
                                        <th>
                                            Total Labour Wages
                                        </th>
                                        <td>
                                        
                                        </td>
                                        <td>
                                        25160
                                        </td>
                                        <td>
                                        
                                        </td>
                                        <td>
                                        
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

export default RegisteredListOfDailyLabourReport;