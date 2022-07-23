import React from 'react';

const ListOfCreatedProject = ({setRegistered}) => {
    const handleGetBack = () =>{
        setRegistered(''); 
    }
    return (
        <div className='mt-12 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Create Project Milestone</h1>

                </div>
                </div>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                        <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Project MileStone No</th>
                                        <th>Date of Creation</th>

                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>145</td>
                                        <td>01-06-2022</td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div> 
        
    );
};

export default ListOfCreatedProject;