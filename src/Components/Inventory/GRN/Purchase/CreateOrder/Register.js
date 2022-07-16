import React from 'react';

const Register = ({ setCreate, setEditGRN, setRegister}) => {
    const handleGetBack = () =>{
        setCreate('')
        setEditGRN('')
        setRegister('')
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-24'>
                <div onClick={handleGetBack} className='left-arrow'>
                    <i class="fa-solid fa-arrow-left text-4xl"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Register Stock Statement</h2>
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
                                    <div style={{width: '350px'}} class="form-control max-w-lg w-80">
                                        <label class="label">
                                            <span class="label-text">From</span>
                                        </label>
                                        <select class="select select-bordered border border-info hover:border-error">
                                            <option disabled selected>PO</option>
                                            <option>Client Receipt</option>
                                            <option>Subcontractor's Stock</option>
                                            <option>Cash Purchase</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <div style={{width: '350px'}} class="form-control max-w-lg w-80">
                                        <label class="label">
                                            <span class="label-text">To</span>
                                        </label>
                                        <select class="select select-bordered border border-info hover:border-error">
                                            <option disabled selected>PO</option>
                                            <option>Client Receipt</option>
                                            <option>Subcontractor's Stock</option>
                                            <option>Cash Purchase</option>
                                        </select>
                                    </div>
                                </div>


                                </div>


                                <div className='flex'>
                                <div className=''>
                                    <div style={{width: '350px'}} class="form-control max-w-lg w-80">
                                        <label class="label">
                                            <span class="label-text">GRN Type</span>
                                        </label>
                                        <select class="select select-bordered border border-info hover:border-error">
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
            <button  class="create-button btn block text-white mx-auto action-button">Register</button>
        </div>

    );
};

export default Register;