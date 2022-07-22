import React, { useState } from 'react';
import rightArrow from './../../icons/Vector (8).svg'; 
import CreateTransferNote from './CreateTransferNote';
import EditViewDeleteTransferNote from './EditViewDeleteTransferNote';
import RegisterTransferNote from './RegisterTransferNote';

const TransferNote = ({data, setGin, setGrn, setTransferNote, setStockStatement,setAgewiseANofStock}) => {
    const [create, setCreate] = useState(''); 
    const [editGRN, setEditGRN] = useState(''); 
    const [register, setRegister] = useState(''); 
    const handleCreate = (getString) =>{
        if(getString === 'Create'){
           setCreate(getString); 
           setEditGRN('');
           setRegister(''); 
        }
        else if(getString === 'Edit/View/Delete'){
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
                (!create && !editGRN && ! register) ? <div className='  mx-16 mt-24'>
                    <div onClick={handleGetBack} className='left-arrow'>
                        <i class="fa-solid fa-arrow-left text-4xl"></i>
                        </div>
                <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                    
                        <div>
                        <div className='flex items-center mt-4'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Transfer Note</h2>
                    </div>
                        </div>
                        {
                            data.map(singleData => <div>
                                <div onClick={()=>handleCreate(singleData)} className='flex my-2 forHover'>
                                    <p>{singleData}</p>
                                    <img src={rightArrow} alt="" />
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
            </div> : <div>
            {
                create && <CreateTransferNote setCreate={setCreate} setEditGRN={setEditGRN} setRegister={setRegister}></CreateTransferNote>
            }
            {
                editGRN && <EditViewDeleteTransferNote setCreate={setCreate} setEditGRN={setEditGRN} setRegister={setRegister}></EditViewDeleteTransferNote>
            }
            {
                register && <RegisterTransferNote setCreate={setCreate} setEditGRN={setEditGRN} setRegister={setRegister}></RegisterTransferNote>
            }
            </div>
            }
        </div>
    );
};

export default TransferNote;