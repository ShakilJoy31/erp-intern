import React from 'react';

const CreateLabour = ({ setLabourReport }) => {
    const handleGetBack = () => {
        setLabourReport('');
    }
    return (
        <div className='w-100'>
            <div>
                <div className='  mx-16 mt-24'>
                    <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fa-solid fa-arrow-left text-4xl"></i>
                    </div>
                    <h2 class="card-title text-2xl mb-6">Labour Productivity Report</h2>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                            <div class="overflow-x-auto">
                                <table class="table w-full">

                                    <thead>
                                        <tr>
                                            <th>Project Description</th>
                                            <th>Tendor No</th>
                                            <th>Employer</th>
                                            <th>Total Tender Price (Rs. Cr.)</th>

                                            <th>Date of Creation</th>

                                            <th>Current Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr>
                                            <td>Civil Construction <br></br>
                                            Works for the Office/ <br></br> Commercial Tower <br /> (2B + G + 15 Flors ), <br></br>  Roads
                                            </td> 

                                            <td>WO:04/12-13, dtd.-27.02.13
                                            </td>

                                            <td>Choate Developers Pvt.Ltd
                                            </td> 

                                            <td>Rs. 47.25 Crores
                                            </td> 

                                            <td>01-06-2022
                                            </td>

                                            <td>Pending
                                            </td> 

                                            
                                        </tr> 
                                        
                                        
                                    </tbody>
                                </table>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateLabour;