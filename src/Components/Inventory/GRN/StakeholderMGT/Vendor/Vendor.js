import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateVendorProjectMGT from './CreateVendorProjectMGT';
import EditVendorProjectMGT from './EditVendorProjectMGT';
import RegisterVendorProjectMGT from './RegisterVendorProjectMGT';

const Vendor = ({ data, setClient, setVendor, setAgent}) => {
    const [create, setCreate] = useState(''); 
    const [edit, setEdit] = useState(''); 
    const [register, setRegister] = useState(''); 
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
           setCreate(getString); 
           setEdit('');
           setRegister(''); 
        }
        else if(getString === 'Edit/View/Delete'){
            setEdit(getString); 
            setCreate(''); 
            setRegister('');
        }
        else{
            setRegister(getString); 
            setEdit(); 
            setCreate(''); 
        } 
    }
    const handleGetBack = () =>{
        setClient('');  
        setVendor('');  
        setAgent(''); 
    }
    return (
        <div>
            {
                (!create && !edit && !register) ? <div className='  mx-16 mt-24'>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
            <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Vendor</h2>
                </div>
                    </div>
                    {
                        data.map(singleData => <div>
                            <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
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
                create && <CreateVendorProjectMGT setRegister={setRegister} setEdit={setEdit} setCreate={setCreate} data={['Create', 'Edit/View/Delete', 'Register']}></CreateVendorProjectMGT>
            }
            {
                edit && <EditVendorProjectMGT setRegister={setRegister} setEdit={setEdit} setCreate={setCreate} data={['Create', 'Edit/View/Delete', 'Register']}></EditVendorProjectMGT>
            }
            {
                register && <RegisterVendorProjectMGT setRegister={setRegister} setEdit={setEdit} setCreate={setCreate} data={['Create', 'Edit/View/Delete', 'Register']}></RegisterVendorProjectMGT>
            }
        </div>
            }
        </div>
    );
};

export default Vendor;