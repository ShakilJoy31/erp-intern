import React, {useState} from 'react';
import AllGIN from './AllGIN';

const CreateGIN = ({setCreate,setEditGRN,setRegister}) => {
    const [gin, seGIN] = useState(''); 
    const handleGetBack = () =>{
        setCreate(''); 
        setEditGRN(''); 
        setRegister(''); 
    }
    const handleCreate = () =>{
        seGIN('seGIN'); 
    }
    return (
        <div className='w-100'>
        <div className='mx-16 mt-24'>
            {
               !gin ? <div>
                <div onClick={handleGetBack} className='left-arrow'>
                            <i class="fa-solid fa-arrow-left text-4xl"></i>
                            </div>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Create New GIN</h2>
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
                <button onClick={handleCreate} style={{backgroundColor: '#7E76CA', width:'235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px'}} class="create-button btn block text-white mx-auto ">Create</button>
            </div> : <div>
                {
                    gin && <AllGIN seGIN={seGIN}></AllGIN>
                }
            </div>
            }
        
            </div>
        </div>
    );
};

export default CreateGIN;