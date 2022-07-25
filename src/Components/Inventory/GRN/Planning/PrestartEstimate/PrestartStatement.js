import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreatePreStartStatement from './CreatePreStartStatement';
import EditPrestartStatement from './EditPrestartStatement';

const PrestartStatement = ({ setDailyMeasurement, setPRPO, setPrestart, setBilling, setProject, setLiability, data}) => {
    const [create, setCreate] = useState(''); 
    const [editGRN, setEditGRN] = useState(''); 
    const [register, setRegister] = useState('');
    const handleGetBack = () =>{
        setDailyMeasurement('');
        setPRPO('');
        setPrestart(''); 
        setBilling('');
        setProject(''); 
        setLiability('');
    }
    const handleCreate = (getString) =>{
        if(getString === 'Create Fresh Estimate'){
           setCreate(getString); 
           setEditGRN('');
           setRegister(''); 
        }
        else if(getString === 'Copy From Tender Estimation'){
            setEditGRN(getString); 
            setCreate(''); 
            setRegister('');
        }
        else{
            setRegister(getString); 
            setEditGRN(); 
            setCreate(''); 
        } 
    }
    return (
        <div className='mx-16 mt-8 '>
                   {
                    (!create && !editGRN && !register) ?  <div>
                    <div>
                        <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                        </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Pre start Statement</h2>
                    </div>
                        </div>
                        
                        {
                            data.map(singleData => <div>
                                <div onClick={()=>handleCreate(singleData)} className='flex  forHover'>
                                    <p className='py-4'>{singleData}</p>
                                    <img src={rightArrow} alt="" />
                                </div>
                                <hr className='w-screen line'></hr>
                            </div>)
                        }
                    </div>
                </div>
                    </div> : <div>
                        {
                            create && <CreatePreStartStatement setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></CreatePreStartStatement>
                        }
                        {
                            editGRN && <EditPrestartStatement setRegister={setRegister} setEditGRN={setEditGRN} setCreate={setCreate}></EditPrestartStatement>
                        }
                    </div>
                   }
            </div>
    );
};

export default PrestartStatement;