import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg';
import CreatedWeeklySiteFund from './CreatedWeeklySiteFund';
import EditedWeeklySiteFund from './EditedWeeklySiteFund';

const WeeklySiteFund = ({ data, setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill }) => {
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
        }
        else if (getString === 'Edit/View/Delete') {
            setEdit(getString);
            setCreate('');
            setRegister('');
        }
        else {
            setRegister(getString);
            setEdit();
            setCreate('');
        }
    }
    return (
        <div className='mx-16 mt-8 '>
            {
                (!create && !edit) ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">

                        <div>
                            <div className='flex items-center mt-4'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Weekly Site Fund</h2>
                            </div>
                        </div>

                        {
                            data.map(singleData => <div>
                                <div onClick={() => handleCreate(singleData)} className='flex forHover'>
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
                    create && <CreatedWeeklySiteFund setEdit={setEdit} setCreate={setCreate}></CreatedWeeklySiteFund>
                }
                {
                    edit && <EditedWeeklySiteFund setEdit={setEdit} setCreate={setCreate}></EditedWeeklySiteFund>
                }
            </div>
            }
        </div>
    );
};

export default WeeklySiteFund;