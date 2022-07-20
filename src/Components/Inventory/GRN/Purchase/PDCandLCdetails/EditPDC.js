import React from 'react';

const EditPDC = ({ setCreate, setEditGRN, setRegister}) => {
    const handleGetBack = () =>{
        setCreate('')
        setEditGRN('')
        setRegister('')
    }
    return (
        <div className='w-100'>
            <div className='  mx-16 mt-24'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Edit/View/Delete PDC and LC Details</h2>
                        </div>

                        <div>
                            <div>

                                <div className='flex justify-between'>
                                <div style={{width: '350px'}} class="form-control w-full max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Project Code</span>
                                        
                                    </label>
                                    <input type="text" placeholder="Project Code" class="input w-100 max-w-lg border border-info hover:border-error" />
                                    
                                </div>

                                <div>
                                    <div class="form-control max-w-lg w-80">
                                        <label class="label">
                                            <span class="label-text">Action</span>
                                        </label>
                                        <select class="select select-bordered border border-info hover:border-error">
                                            <option disabled selected>PO</option>
                                            <option>Client Receipt</option>
                                            <option>Subcontractor's Stock</option>
                                            <option>Cash Purchase</option>
                                        </select>
                                    </div>
                                </div>


                                <div style={{width: '350px'}} class="form-control w-full max-w-lg">
                                    <label class="label">
                                        <span class="label-text">GRN No.</span>
                                        
                                    </label>
                                    <input type="text" placeholder="" class="input w-100 max-w-lg border border-info hover:border-error" />
                                </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button  class="create-button btn block text-white mx-auto action-button">Create</button>
        </div>
    );
};

export default EditPDC;