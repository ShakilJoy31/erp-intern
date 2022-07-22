import React, { useState } from 'react';
import rightArrow from './../../../../../icons/Vector (8).svg'; 
import './BoxShadow.css'; 
import MaterialRates from './MaterialRates';
import RegisterTenderEstimation from './RegisterTenderEstimation';
import ViewTenderEstimation from './ViewTenderEstimation';

const CreatedTenderRateAnalysis = ({ setRateAnalysis, setTenderEstimation, setItemAnalysis, data }) => {
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
        else if(getString === 'Edit/View/Delete'){
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
                    <h2 class="card-title">Tender Estimation</h2>
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
                        create && <MaterialRates setCreate={setCreate} setView={setView} setRegister={setRegister}></MaterialRates>
                    }
                    {
                        View && <ViewTenderEstimation setCreate={setCreate} setView={setView} setRegister={setRegister}></ViewTenderEstimation>
                    }
                    {
                        register && <RegisterTenderEstimation setCreate={setCreate} setView={setView} setRegister={setRegister}></RegisterTenderEstimation>
                    }
                </div>
            }
        </div>
    );
};

export default CreatedTenderRateAnalysis;