import React, { useState } from 'react';
import AllTransferNote from './AllTransferNote';

const CreateTransferNote = ({ setCreate, setEditGRN, setRegister }) => {
    const [transfer, setTransfer] = useState('');
    const handleGetBack = () => {
        setCreate('');
        setEditGRN('');
        setRegister('');
    }
    const handleCreate = () => {
        setTransfer('setTransfer')
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-24 '>
                {
                    (!transfer) ? <div>
                        <div onClick={handleGetBack} className='left-arrow'>
                            <i class="fa-solid fa-arrow-left text-4xl"></i>
                        </div>
                        <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                            <div class="card-body">
                                <div className='flex items-center'>
                                    <div className='GRN'></div>
                                    <h2 class="card-title">Create Transfer Note</h2>
                                </div>

                                <div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <div class="form-control max-w-lg w-80">
                                                <label class="label">
                                                    <span class="label-text">Project Code</span>
                                                </label>
                                                <select class="select select-bordered">
                                                    <option disabled selected>BJNOVAK</option>
                                                    <option>SHDFKJD</option>
                                                    <option>HDHFIDE</option>
                                                    <option>LUEIRHD</option>
                                                    <option>PJDOFJD</option>
                                                    <option>SU78IJL</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className='mx-12'>
                                            <div class="form-control max-w-lg w-80">
                                                <label class="label">
                                                    <span class="label-text">Issue Type</span>
                                                </label>
                                                <select class="select select-bordered">
                                                    <option disabled selected>PO</option>
                                                    <option>Client Receipt</option>
                                                    <option>Subcontractor's Stock</option>
                                                    <option>Cash Purchase</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className='mx-12'>
                                            <div class="form-control max-w-lg w-80">
                                                <label class="label">
                                                    <span class="label-text">Issue to</span>
                                                </label>
                                                <select class="select select-bordered">
                                                    <option disabled selected>PO</option>
                                                    <option>Client Receipt</option>
                                                    <option>Subcontractor's Stock</option>
                                                    <option>Cash Purchase</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                            <button onClick={handleCreate} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button mb-8 btn block text-white mx-auto">Create</button>
                    </div> : <div>
                        {
                            transfer && <AllTransferNote setTransfer={setTransfer}></AllTransferNote>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default CreateTransferNote;