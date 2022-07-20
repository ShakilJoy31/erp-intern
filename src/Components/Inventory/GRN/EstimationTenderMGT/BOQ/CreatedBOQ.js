import React, { useState } from 'react';
import Create from './Create';

const CreatedBOQ = ({ setCreateBOQ, setEditBOQ }) => {
    const [createTender, setCreateTender] = useState(''); 
    const handleCreateProject = () =>{
        setCreateTender('setCreateTender'); 
    }
    const handleGetBack = () =>{
        setCreateBOQ('')
        setEditBOQ('')
    }
    return (
        <div className='mt-12'>
        {
            !createTender ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                    <h1 className='mb-10 text-3xl'>Create BOQ</h1>

                    <div className='flex items-center justify-end mb-8 add-projects'>
                        <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Internal Progress Report</button>

                    </div>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>BOQ Item</th>
                                        <th>UOM</th>

                                        <th>Qty</th>
                                        <th>Rate</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>0.0m - 1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <div>
                {
                    createTender && <Create setCreateTender={setCreateTender}></Create>
                }
            </div>
        }
    </div>
    );
};

export default CreatedBOQ;