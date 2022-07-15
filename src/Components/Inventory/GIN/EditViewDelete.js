import React from 'react';

const EditViewDelete = ({setCreate,setEditGRN,setRegister}) => {
    const handleGetBack = () =>{
        setCreate(''); 
        setEditGRN(''); 
        setRegister('');  
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
                            <h2 class="card-title">Edit/View/Delete GIN</h2>
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

                                <input type="text" placeholder="GIN No." class="input w-full max-w-xs mt-8" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button style={{backgroundColor: '#7E76CA', width:'235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px'}} class="create-button btn block text-white mx-auto ">Search</button>
        </div>
    );
};

export default EditViewDelete;