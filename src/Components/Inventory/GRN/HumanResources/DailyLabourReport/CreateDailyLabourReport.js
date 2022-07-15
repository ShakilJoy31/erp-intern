import React from 'react';

const CreateDailyLabourReport = ({ setCreate, setEditGRN, setRegister}) => {
    const handleGetBack = () =>{
        setCreate('')
        setEditGRN('')
        setRegister('')
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-24'>
                <div>
                    <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Create Daily Labour Report</h2>
                        </div>

                        <div>
                            <div>

                                <div className='flex'>
                                <div class="form-control w-100 max-w-lg mr-12">
                                    <label class="label">
                                        <span class="label-text">SO Code</span>
                                        
                                    </label>
                                    <input style={{width: '350px'}} type="text" class="input max-w-lg border border-info" />
                                </div>


                                <div class="form-control w-100 max-w-lg">
                                    <label class="label">
                                        <span class="label-text">Vendor Name</span>
                                        
                                    </label>
                                    <input style={{width: '350px'}} type="text" class="input max-w-lg border border-info" />
                                </div>

                                </div>

                                
                            </div>

                            <div>

                                <div className='flex'>
                                <div style={{width: '350px'}} class="form-control max-w-lg mr-12">
                                        <label class="label">
                                            <span class="label-text">Record Date</span>
                                        </label>
                                        <select class="select select-bordered border border-info">
                                            <option disabled selected>PO</option>
                                            <option>Client Receipt</option>
                                            <option>Subcontractor's Stock</option>
                                            <option>Cash Purchase</option>
                                        </select>
                                    </div>


                                    <div style={{width: '350px'}} class="form-control max-w-lg">
                                        <label class="label">
                                            <span class="label-text">Order No</span>
                                        </label>
                                        <select class="select select-bordered border border-info">
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
            <button style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class="create-button btn block text-white mx-auto ">Create</button>
        </div>
    );
};

export default CreateDailyLabourReport;