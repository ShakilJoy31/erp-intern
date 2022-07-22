import React from 'react';

const ListOfCreatedOfferLetter = ({setList}) => {
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
                    <h1 className='mb-10 text-3xl'>Offer Letter</h1>

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
                                        <th>Name</th>
                                        <th>Employee ID ID</th>

                                        <th>Role</th>
                                        <th>Phone</th>
                                        <th>Ammual Income</th>
                                        <th>Monthly Income</th>
                                        <th>Offer Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Rohit</th>
                                        <td>254322</td>
                                        <td>Sales</td>  
                                        <td>38768473</td>
                                        <td>6 Lack</td>
                                        <td>48000/- </td>
                                        <td>01-06-2022 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default ListOfCreatedOfferLetter;