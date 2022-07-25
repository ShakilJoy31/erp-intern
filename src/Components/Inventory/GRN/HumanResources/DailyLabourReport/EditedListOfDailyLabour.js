import React from 'react';

const EditedListOfDailyLabourReport = ({setList}) => {
    const handleGetBack = () =>{
        setList(''); 
    }

    return (
        <div className='mt-8 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Edit/View/Delete Offer Letter</h1>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
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

export default EditedListOfDailyLabourReport;