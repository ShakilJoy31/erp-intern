import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg';
import leftArrow from './../../../../icons/arrow-left-line.svg';
import CreateProject from './CreateProject';
import RegisterProjects from './RegisterProjects';
import EditProject from './EditProject';
import ViewAllProject from './ViewAllProject';

const Project = ({ data, setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill }) => {
    const [create, setCreate] = useState('');
    const [edit, setEdit] = useState('');
    const [register, setRegister] = useState('');
    const handleGetBack = () => {
        setProject('');
        setClientBOQ('');
        setUploadDocuments('');
        setProjectSalient('');
        setLabourProductivity('');
        setClientBill('');
        setProjectCost('');
        setPurchaseRequisition('');
        setInternalProgress('');
        setClientProgress('');
        setProjectOverView('');
        setWeeklyFund('');
        setPaymentProposal('');
        setClientBillStatus('');
        setVendorBill('');
    }
    const handleCreate = (getString) => {
        if (getString === 'Create') {
            setCreate(getString);
            setEdit('');
            setRegister('');
            console.log('In project');
        }
        else if (getString === 'Edit/View/Register') {
            setCreate('');
            setEdit(getString);
            setRegister('');
            console.log('In edit');
        }
        else {
            setRegister(getString);
            setEdit('');
            setCreate('');
            console.log('In register');
        }
    } 
    return (
        <div className='mx-16 mt-12'>
            {
                (!create && !register && !edit) ? <div>
                    <div>
                        <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                    </div>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">

                            <div>
                                <div className='flex items-center mt-4'>
                                    <div className='GRN'></div>
                                    <h2 class="card-title">Project</h2>
                                </div>
                            </div>

                            {
                                data.map(singleData => <div>
                                    <div onClick={() => handleCreate(singleData)} className='flex forHover'>
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
                        create && <ViewAllProject setRegister={setRegister} setEdit={setEdit} setCreate={setCreate}></ViewAllProject>
                    }
                    {
                        edit && <EditProject setRegister={setRegister} setEdit={setEdit} setCreate={setCreate}></EditProject>
                    }
                    {
                        register && <RegisterProjects setRegister={setRegister} setEdit={setEdit} setCreate={setCreate}></RegisterProjects>
                    }
                </div>
            }
        </div>
    );
};

export default Project;