import React from 'react';

const ViewEditDeleteStockStatement = ({setprojectWiseReportStockStatement, setEditTransferNote, setRegister, setIndividulProject, setAllProject}) => {
    const handleGetBack = () => {
        setprojectWiseReportStockStatement('')
        setEditTransferNote('')
        setRegister('')
        setIndividulProject('')
        setAllProject('')
    }
    return (
        <div className='w-100'>
            <div className='mt-8'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Edit View Delete Statement</h2>
                        </div>

                        <div>
                            <div>

                            <div className='flex'>
                                <div class="form-control w-100 max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Project Code</span>
                                        
                                    </label>
                                    <input style={{width: '350px'}} type="text" class="input max-w-lg" />
                                </div>

                                <div className='mx-12'>
                                    <div class="form-control max-w-lg w-80">
                                        <label class="label">
                                            <span class="label-text">Action</span>
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
                </div>
            </div>
            <button  class="create-button btn block text-white mx-auto action-button">Search</button>
        </div>
    );
};

export default ViewEditDeleteStockStatement;