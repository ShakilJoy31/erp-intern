import React, { useState } from 'react';
import RegisteredProject from './RegisteredProject';

const Register = ({ setRegister }) => {
    const handleGetBack = () => {
        setRegister('')
    }

    return (
        <div className='mt-12'>
            {
                <div>
                    <div>
                        <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
                    <div className='flex items-center ms-12'>
                        <h1 className='mb-10 text-3xl'>Register</h1>
                    </div>
                    <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div class="overflow-x-auto">
                                <table class="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Project Description</th>
                                            <th>Tender No</th>
                                            <th>Employer</th>

                                            <th>Total Tender Price (Rs. Cr.)</th>
                                            <th>Date of Creation</th>
                                            <th>Current Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Civil Construction <br></br> Works for the Office/ <br></br>
                                                Commercial Tower <br></br> (2B+G+15Floors), <br></br>
                                                Roads, </th>
                                            <td>WO: 04/12-13, dtd.-27.02.13</td>
                                            <td>Choate Developers Pvt. Ltd.</td>
                                            <td>Rs. 47.25 Crores </td>

                                            <td>01-06-2022</td>

                                            <td>Pending</td>
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

export default Register;