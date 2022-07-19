import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg';
import CreateLiabilityStatement from './CreateLiabilityStatement';
import EditLiabilityStatement from './EditLiabilityStatement';

const LiabilityStatement = ({ setDailyMeasurement, setPRPO, setPrestart, setBilling, setProject, setLiability, data }) => {
    const [create, setCreate] = useState('');
    const [edit, setEditGRN] = useState('');
    const [register, setRegister] = useState('');
    const handleGetBack = () => {
        setDailyMeasurement('');
        setPRPO('');
        setPrestart('');
        setBilling('');
        setProject('');
        setLiability('');
    }
    const handleCreate = (getString) => {
        if (getString === 'Create') {
            setCreate(getString);
            setEditGRN('');
            setRegister('');
        }
        else if (getString === 'Edit/View/Delete') {
            setEditGRN(getString);
            setCreate('');
            setRegister('');
        }
        else {
            setRegister();
            setEditGRN();
            setCreate('');
        }
    }
    return (
        <div className='mx-16 mt-24'>
            {
                (!create && !edit && !register) ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">

                        <div>
                            <div className='flex items-center mt-4'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Liability Statement</h2>
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
                </div>
            </div> : <div>
                {
                    create && <CreateLiabilityStatement setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></CreateLiabilityStatement>
                }
                {
                    edit && <EditLiabilityStatement setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></EditLiabilityStatement>
                }
            </div>
            }
        </div>
    );
};

export default LiabilityStatement;