import React from 'react';
import './Ageing.css'; 

const IndividualProjects = ({setIndividul}) => {
    const handleGetBack = () =>{
        setIndividul(''); 
    }

    const handleCreateProject = () =>{
         
    }
    return (
        <div className='mt-12 mb-8'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Individual Project-Agewise Analysis of stock</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

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
                                        <th>Sub Inventory</th>
                                        <th>Total</th>
                                        <th>
                                            <div>
                                                <p className='mb-2 ageing'>Ageing</p>
                                                <div className='flex'>
                                                    <p className='mr-10'>1-30 Days</p>
                                                    <p className='mr-10'>31-60 Days</p>
                                                    <p className='mr-10'>61-80 Days</p>
                                                    <p className='mr-10'>91-120 Days</p>
                                                    <p className='mr-10'>More than 120 Days</p>
                                                </div>
                                            </div>
                                        </th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>01</td>
                                        <td>Denmark Shipbuilding Inc</td>
                                        <td>134769</td>
                                        <td>
                                            <div className='flex mr-10'>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                                <p className='mr-12'>-</p>
                                                <p className='mr-12'>126543</p>
                                            </div>
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

export default IndividualProjects;