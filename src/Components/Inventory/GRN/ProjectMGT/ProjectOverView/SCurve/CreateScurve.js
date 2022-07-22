import React, { useState } from 'react';
import rightArrow from './../../../../../icons/Vector (8).svg';
import CreatedScurve from './CreatedScurve';
import EditedScurve from './EditedScurve';

const CreateScurve = ({ data, setScurve, setPlanned, setEstimated, setCashflow, setProjectContribution }) => {
    const [create, setCreate] = useState('');
    const [edit, setEdit] = useState('');
    const handleGetBack = () => {
        setScurve('');
        setPlanned('');
        setEstimated('');
        setCashflow('');
        setProjectContribution('');
    }
    const handleCreate = (getString) => {
        if (getString === 'Create') {
            setCreate(getString);
            setEdit('');
        }
        else {
            setCreate('');
            setEdit(getString);
        }
    }
    return (
        <div>
            {
                (!create && !edit) ?
                    <div>
                        <div>
                            <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                        </div>
                        <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                            <div class="card-body">

                                <div>
                                    <div className='flex items-center mt-4'>
                                        <div className='GRN'></div>
                                        <h2 class="card-title">S-Curve</h2>
                                    </div>
                                </div>

                                {
                                    data.map(singleData => <div>
                                        <div onClick={() => handleCreate(singleData)} className='flex forHover'>
                                            <p className='my-2'>{singleData}</p>
                                            <img src={rightArrow} alt="" />
                                        </div>
                                        <hr />
                                    </div>)
                                }
                            </div>
                        </div> : <div>

                        </div>
                    </div> : <div>
                        {
                            create && <CreatedScurve setCreate={setCreate} setEdit={setEdit}></CreatedScurve>
                        }
                        {
                            edit && <EditedScurve setCreate={setCreate} setEdit={setEdit}></EditedScurve>
                        }
                    </div>
            }
        </div>
    );
};

export default CreateScurve;