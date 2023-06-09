import React from 'react';

const RegisterSalient = ({setEditedProject}) => {
    const handleGetBack = () =>{
        setEditedProject(''); 
    }
    return (
        <div className='mx-16 mt-8'>
            {
                <div>
                    <div>
                        <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
                    <h1 className='mb-12 text-3xl mb-10'>Register</h1>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
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
            }
        </div>
    );
};

export default RegisterSalient;