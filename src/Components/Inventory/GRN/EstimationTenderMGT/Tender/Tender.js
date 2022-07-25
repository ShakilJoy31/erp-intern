import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import AllEstimationTender from './Create/AllEstimationTender';
import EditedNewProject from './Edit/EditedNewProject';
import RegisteredProject from './Register/RegisteredProject';


const Tender = ( {setTender, setBoq, setEstimation, setBilling, data}) => {
    const [create, setCreate] = useState(''); 
    const [edit, setEdit] = useState(''); 
    const [register, setRegister] = useState(''); 
    const handleGetBack = () =>{
        setTender('');
        setBoq('');
        setEstimation('');
        setBilling('');
    }
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
            setCreate(getString); 
            setEdit(''); 
            setRegister(''); 
        }
        else if(getString === 'Edit/View/Delete'){
            setCreate(''); 
            setEdit(getString); 
            setRegister(''); 
        }
        else{
            console.log("in register"); 
            setCreate(''); 
            setEdit(''); 
            setRegister(getString); 
        }
    }
    console.log(register); 
    return (
        <div className='mx-16 mt-8 '>
            {
                (!create && !edit && !register) ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
            <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Tender</h2>
                </div>
                    </div>
                    
                    {
                        data.map(singleData => <div>
                            <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
                                <p className='py-4'>{singleData}</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr className='w-screen line'></hr>
                        </div>)
                    }
                </div>
            </div>
                </div>  : <div>
                    {
                        create && <AllEstimationTender setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></AllEstimationTender>
                    }
                    {
                        edit && <EditedNewProject setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></EditedNewProject>
                    }
                    {
                        register && <RegisteredProject setCreate={setCreate} setEdit={setEdit} setRegister={setRegister}></RegisteredProject>
                    }
                </div>
            }
        </div>
    );
};

export default Tender;