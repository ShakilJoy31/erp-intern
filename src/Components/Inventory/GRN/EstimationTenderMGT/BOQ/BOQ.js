import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg';
import CreatedBOQ from './CreatedBOQ';
import EditedBOQ from './EditedBOQ';

const BOQ = ({ setTender, setBoq, setEstimation, setBilling, data }) => {
    const [createBOQ, setCreateBOQ] = useState('');
    const [editBOQ, setEditBOQ] = useState('');
    const handleGetBack = () => {
        setTender('');
        setBoq('');
        setEstimation('');
        setBilling('');
    }
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
            setCreateBOQ(getString)
            setEditBOQ('')
        }
        else{
            setCreateBOQ('')
            setEditBOQ(getString)
        }
    }
    return (
        <div className='mx-16 mt-24 '>
            {
                (!createBOQ && !editBOQ) ? <div>
                    <div>
                        <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">

                            <div>
                                <div className='flex items-center mt-4'>
                                    <div className='GRN'></div>
                                    <h2 class="card-title">BOQ</h2>
                                </div>
                            </div>

                            {
                                data.map(singleData => <div>
                                    <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
                                        <p className='my-2'>{singleData}</p>
                                        <img src={rightArrow} alt="" />
                                    </div>
                                    <hr />
                                </div>)
                            }
                        </div>
                    </div>
                </div> : <div>
                    {
                        createBOQ && <CreatedBOQ setCreateBOQ={setCreateBOQ} setEditBOQ={setEditBOQ}></CreatedBOQ>
                    }
                    {
                        editBOQ && <EditedBOQ setCreateBOQ={setCreateBOQ} setEditBOQ={setEditBOQ}></EditedBOQ>
                    }
                </div>
            }
        </div>
    );
};

export default BOQ;