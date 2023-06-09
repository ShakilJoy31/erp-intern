import React, { useState } from 'react';
import EditViewDeleteTransferNote from '../TransferNote/EditViewDeleteTransferNote';
import RegisterTransferNote from '../TransferNote/RegisterTransferNote';
import rightArrow from './../../icons/Vector (8).svg'; 
import AllProjects from './AllProjects';
import IndividualProjects from './IndividualProjects';
import ProjectWiseReportTransferNote from './ProjectWiseReportTransferNote';
import RegisterStockStatement from './RegisterStockStatement';
import ViewEditDeleteStockStatement from './ViewEditDeleteStockStatement';

const StockStatement = ({data, setGin, setGrn, setTransferNote, setStockStatement,setAgewiseANofStock}) => {
    const [projectWiseReportStockStatement, setprojectWiseReportStockStatement] = useState(''); 
    const [editStockStatement, setEditStockStatement] = useState(''); 
    const [register, setRegister] = useState(''); 
    const [individulProject, setIndividulProject] = useState(''); 
    const [allProject, setAllProject] = useState(''); 
    const handleTransferNote = (getString) =>{
        if(getString === 'Individual Project'){
            setIndividulProject('')
            setprojectWiseReportStockStatement(''); 
            setEditStockStatement('');
            setRegister(''); 
            setAllProject('');
         }
         else if(getString === 'All Projects'){
            setIndividulProject(''); 
            setprojectWiseReportStockStatement(''); 
            setEditStockStatement('');
            setRegister(''); 
            setAllProject('');
         }
         else if(getString === 'Register Stock Statement'){
            setIndividulProject(''); 
            setprojectWiseReportStockStatement(''); 
            setEditStockStatement('');
            setRegister(getString); 
            setAllProject('');
         }
         else if(getString === 'Edit/View/Delete Statement'){
            setIndividulProject(''); 
            setprojectWiseReportStockStatement(''); 
            setEditStockStatement(getString);
            setRegister(''); 
            setAllProject('');
         }
         else{
            setIndividulProject(''); 
            setprojectWiseReportStockStatement(getString); 
            setEditStockStatement('');
            setRegister(''); 
            setAllProject('');
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
            <div className='mx-16 mt-8 '>
                {
                    (!editStockStatement && !register && !projectWiseReportStockStatement) ?
            <div>
            <div className=''>
                        <i onClick={handleGetBack} class="fas text-3xl left-arrow fa-long-arrow-alt-left"></i>
                        </div>
                
                     <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Stock Statement</h2>
                        </div>
                        {
                            data.map(singleData => <div>
                                <div onClick={()=>handleTransferNote(singleData)} className='flex forHover'>
                                    <p className='py-4'>{singleData}</p>
                                    <img src={rightArrow} alt="" />
                                </div>
                                <hr className='w-screen line'></hr>
                            </div>)
                        }
                    </div>
                </div></div> : <div>
                    {
                        individulProject && <IndividualProjects setprojectWiseReportStockStatement={setprojectWiseReportStockStatement} setEditTransferNote={setEditStockStatement} setRegister={setRegister} setIndividulProject={setIndividulProject} setAllProject={setAllProject}></IndividualProjects>
                    }
                    {
                        allProject && <AllProjects setprojectWiseReportStockStatement={setprojectWiseReportStockStatement} setEditTransferNote={setEditStockStatement} setRegister={setRegister} setIndividulProject={setIndividulProject} setAllProject={setAllProject}></AllProjects>
                    }
                    {
                        projectWiseReportStockStatement && <ProjectWiseReportTransferNote setprojectWiseReportStockStatement={setprojectWiseReportStockStatement} setEditTransferNote={setEditStockStatement} setRegister={setRegister} setIndividulProject={setIndividulProject} setAllProject={setAllProject}></ProjectWiseReportTransferNote>
                    }
                    {
                        editStockStatement && <ViewEditDeleteStockStatement setprojectWiseReportStockStatement={setprojectWiseReportStockStatement} setEditTransferNote={setEditStockStatement} setRegister={setRegister} setIndividulProject={setIndividulProject} setAllProject={setAllProject}></ViewEditDeleteStockStatement>
                    }
                    {
                        register && <RegisterStockStatement setprojectWiseReportStockStatement={setprojectWiseReportStockStatement} setEditTransferNote={setEditStockStatement} setRegister={setRegister} setIndividulProject={setIndividulProject} setAllProject={setAllProject}></RegisterStockStatement>
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default StockStatement;