import React, { useState } from 'react';
import rightArrow from './../../../../../icons/Vector (8).svg'; 
import CreatedRateAnalysis from './CreatedRateAnalysis';
import RegisterTenderRateAnalysis from './RegisterTenderRateAnalysis';
import TenderRateAnalysis from './TenderRateAnalysis';

const CreateRateAnalysis = ({ setRateAnalysis, setTenderEstimation, setItemAnalysis, data }) => {
    const [create, setCreate] = useState(''); 
    const [View, setView] = useState(''); 
    const [register, setRegister] = useState(''); 
    const handleGetBack = () =>{
        setRateAnalysis('');
        setTenderEstimation('');
        setItemAnalysis('');
    }
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
            setCreate(getString); 
            setView('')
            setRegister('')
        }
        else if(getString === 'View'){
            setCreate(''); 
            setView(getString)
            setRegister('')
        }
        else{
            setCreate(''); 
            setView('')
            setRegister(getString); 
        }
    }
    return (
        <div className='mt-24'>
            {
                (!create && !View && !register) ? <div>
                <div>
                    <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
            <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Create Analysis Master data</h2>
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
                </div>  : <div>
                    {
                        create && <CreatedRateAnalysis setCreate={setCreate} setView={setView} setRegister={setRegister}></CreatedRateAnalysis>
                    }
                    {
                        View && <TenderRateAnalysis setCreate={setCreate} setView={setView} setRegister={setRegister}></TenderRateAnalysis>
                    }
                    {
                        register && <RegisterTenderRateAnalysis setCreate={setCreate} setView={setView} setRegister={setRegister}></RegisterTenderRateAnalysis>
                    }
                </div>
            }
        </div>
    );
};

export default CreateRateAnalysis;