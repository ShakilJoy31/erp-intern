import React, { useState } from 'react';
import rightArrow from './../../icons/Vector (8).svg'; 
import AgeWiseAllProject from './AgeWiseAllProject';
import AgeWiseIndividualProject from './AgeWiseIndividualProject';

const AgewiseAnalysisofStock = ({data, setGin, setGrn, setTransferNote, setStockStatement,setAgewiseANofStock}) => {
    const [ageWiseIndividualProject, setAgeWiseIndividualProject] = useState(''); 
    const [ageWiseAllProject, setAgeWiseAllProject] = useState(''); 
    const handleAgewiseAnalysisOfProjects = (getString) =>{
        if(getString === 'Individual Project'){
            setAgeWiseIndividualProject(getString); 
        }
        else{
            setAgeWiseAllProject(getString); 
        }
    }
    const handleGetBack = () =>{
        setGrn[1](''); 
        setGin[1](''); 
        setTransferNote[1]('');
        setStockStatement[1](''); 
        setAgewiseANofStock[1]('');    
}
    return (
        <div>
            {
                (!ageWiseIndividualProject && !ageWiseAllProject) ? <div className='mx-16 mt-8'>
                <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fas text-3xl fa-long-arrow-alt-left"></i>
                    </div>
                    <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Agewise Analysis of Stock</h2>
                            </div>
                            {
                                data.map(singleData => <div>
                                    <div onClick={()=>handleAgewiseAnalysisOfProjects(singleData)} className='flex forHover'>
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
                        ageWiseIndividualProject && <AgeWiseIndividualProject setAgeWiseIndividualProject={setAgeWiseIndividualProject} setAgeWiseAllProject={setAgeWiseAllProject}></AgeWiseIndividualProject>
                    }
                    {
                        ageWiseAllProject && <AgeWiseAllProject setAgeWiseIndividualProject={setAgeWiseIndividualProject} setAgeWiseAllProject={setAgeWiseAllProject}></AgeWiseAllProject>
                    }
                </div>
            }
        </div>
    );
};

export default AgewiseAnalysisofStock;