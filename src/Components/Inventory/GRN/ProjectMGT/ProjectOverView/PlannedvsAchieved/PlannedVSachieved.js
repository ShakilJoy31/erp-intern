import React from 'react';
import {useState} from 'react'; 
import rightArrow from './../../../../../icons/Vector (8).svg';
import CreatedPlannedAchieved from './CreatePlannedAchievedProgram/CreatedPlannedAchieved';
import EditedPlannedAchieved from './EditPlannedAchievedProgram/EditedPlannedAchieved';

const PlannedVSachieved = ({ setScurve, setPlanned, setEstimated, setCashflow, setProjectContribution, data}) => {
    const [create, setCreate] = useState('')
    const [edit, setEdit] = useState('')

    const handleGetBack = () =>{
        setScurve(''); 
        setPlanned(''); 
        setEstimated(''); 
        setCashflow(''); 
        setProjectContribution(''); 
    }
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
            setCreate(getString); 
            setEdit('')
        }
        else{
            setCreate(''); 
            setEdit(getString)
        }
    }
    return (
        <div className='mx-16 mt-24'>
            {
                (!create && !edit) ? <div>
                <div>
                <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Planned Vs Achieved Program</h2>
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
                    create && <CreatedPlannedAchieved setCreate={setCreate} setEdit={setEdit}></CreatedPlannedAchieved>
                }
                {
                    edit && <EditedPlannedAchieved setCreate={setCreate} setEdit={setEdit}></EditedPlannedAchieved>
                }
            </div>
            }
        </div>
    );
};

export default PlannedVSachieved;