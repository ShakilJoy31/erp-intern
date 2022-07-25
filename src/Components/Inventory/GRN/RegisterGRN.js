import React, {useState} from 'react';
import AllRegisteredGRN from './AllRegisteredGRN';

const RegisterGRN = ({setCreate,setEditGRN,setRegister}) => {
    const [registeredGRN, setRegisteredGRN] = useState('')
    const handleGetBack = () =>{
        setCreate(''); 
        setEditGRN(''); 
        setRegister(''); 
    }
    const handleCreate = () =>{
        setRegisteredGRN('setRegisteredGRN'); 
    }
    return (
        <div className='w-100'>
            <div className='mx-16 mt-8 '>
                {
                    (!registeredGRN) ? <div>
                    <div onClick={handleGetBack} className='left-arrow'>
                                <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                                </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Register GRN</h2>
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
                                                <span class="label-text">From</span>
                                            </label>
                                            <select class="select select-bordered">
                                                <option disabled selected>PO</option>
                                                <option>Client Receipt</option>
                                                <option>Subcontractor's Stock</option>
                                                <option>Cash Purchase</option>
                                            </select>
                                        </div>
                                    </div>
    
                                    <input type="text" placeholder="Order No." class="input w-full max-w-xs mt-8" />
                                </div>
                            </div>
    
                        </div>
                    </div>
                    <button onClick={handleCreate} style={{backgroundColor: '#7E76CA', width:'235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px'}} class="create-button btn block text-white mx-auto ">Search</button>
                </div> : <div>
                    {
                        registeredGRN && <AllRegisteredGRN setRegisteredGRN={setRegisteredGRN}></AllRegisteredGRN>
                    }
                </div>
                }
            
                </div>
            </div>
    );
};

export default RegisterGRN;