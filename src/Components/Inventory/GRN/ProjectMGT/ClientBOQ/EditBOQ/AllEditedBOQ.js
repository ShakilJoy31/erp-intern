import React, { useState } from 'react';
import AllBOQ from '../CreateBOQ/AllBOQ';
import EditBOQ from './EditBOQ';

const AllEditedBOQ = ({setCreate, setEdit}) => {
    const [createBOQ, setCreateBOQ] = useState(''); 
    const handleCreateProject = () =>{
        setCreateBOQ('setCreateProject'); 
    }
    const handleGetBack = () => {
        setCreate('') 
        setEdit('')
      }
    return (
        <div className='mx-16 mt-12'>
            {
                !createBOQ ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                <h1 className='mb-10 text-3xl'>Edit/View/Delete BOQ</h1>

                <div className='flex items-center justify-end mb-8 add-projects'>
                <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-12" />

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
                                        <th>BOQ Item</th>
                                        <th>UOM</th>
                                        <th>Qty</th>
                                        <th>Rate</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
                                        <td>m3</td>
                                        <td>21505</td>
                                        <td>1</td>
                                        <td>21505</td>
                                    </tr>
                                    <tr>
                                        <th>1</th>
                                        <td>0.0m-1.5m</td>
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
                createBOQ && <EditBOQ setCreateBOQ={setCreateBOQ}></EditBOQ>
              }
            </div>
            }
        </div>
    );
};

export default AllEditedBOQ;