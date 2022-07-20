import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import GRN from '../GRN';
import GIN from '../../GIN/GIN';
import './Inventory.css'; 
import TransferNote from '../../TransferNote/TransferNote';
import StockStatement from '../../StockStatement/StockStatement';
import AgewiseAnalysisofStock from '../../AgewiseAnalysisofStock/AgewiseAnalysisofStock';

const Inventory = ({setGin, setGrn, setTransferNote, setStockStatement,setAgewiseANofStock}) => { 

    const handleGRN = (getString) =>{
        setGrn[1](getString); 
    }
    const handleGIN = (getString) =>{
        setGin[1](getString); 
    }
    const handleTransferNote = (getString) =>{
        setTransferNote[1](getString);
    }
    const handleStockStatement = (getString) =>{
        setStockStatement[1](getString);
        console.log(getString); 
    }
    const handleAgewiseAnalysisStock = (getString) =>{
        setAgewiseANofStock[1](getString); 
        console.log(getString); 
    }
    
    return (
        <div className='inventory-card'>
            
                 <div>
                    {
                    (!setGin[0] && !setGrn[0] && !setTransferNote[0] && !setStockStatement[0] && !setAgewiseANofStock[0]) ? <div className='  mx-16 mt-24'>
                        
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Inventory</h2>
                            </div>
                            <div onClick={()=>handleGRN('GRN')} className='flex mt-4 forHover'>
                                <p className='mouse-pointer'>GRN</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleGIN('GIN')} className='flex mt-4 forHover'>
                                <p className='mouse-pointer'>GIN</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleTransferNote('TransferNote')} className='flex mt-4 forHover'>
                                <p className='mouse-pointer'>Transfer Note</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleStockStatement('StockStatement')} className='flex mt-4 forHover'>
                                <p className='mouse-pointer'>Stock Statement</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleAgewiseAnalysisStock('Agewise Analysis of Stock')} className='flex mt-4 forHover'>
                                <p className='mouse-pointer'>Agewise Analysis of Stock</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
    
                        </div>
                    </div>
                </div> : <div>
            <div>
            {
                setGrn[0] && <GRN data={['Create', 'Edit/View/Delete', 'Register']} setGin={setGin} setGrn={setGrn} setTransferNote={setTransferNote} setStockStatement={setStockStatement} setAgewiseANofStock={setAgewiseANofStock}></GRN>
            }
        </div>
        <div>
            {
                setGin[0] && <GIN data={['Create', 'Edit/View/Delete', 'Register']} setGin={setGin} setGrn={setGrn} setTransferNote={setTransferNote} setStockStatement={setStockStatement} setAgewiseANofStock={setAgewiseANofStock}></GIN>
            }
        </div>
        <div>
            {
                setTransferNote[0] && <TransferNote data={['Create', 'Edit/View/Delete', 'Register']} setGin={setGin} setGrn={setGrn} setTransferNote={setTransferNote} setStockStatement={setStockStatement} setAgewiseANofStock={setAgewiseANofStock}></TransferNote>
            }
        </div>
        <div>
            {
                setStockStatement[0] && <StockStatement data={['Individual Project', 'All Projects', 'Register Stock Statement', 'Edit/View/Delete Statement', 'Project Wise Report Stock Statement']} setGin={setGin} setGrn={setGrn} setTransferNote={setTransferNote} setStockStatement={setStockStatement} setAgewiseANofStock={setAgewiseANofStock}></StockStatement>
            }
        </div>
        <div>
            {
                setAgewiseANofStock[0] && <AgewiseAnalysisofStock data={['Individual Project', 'All Projects']} setGin={setGin} setGrn={setGrn} setTransferNote={setTransferNote} setStockStatement={setStockStatement} setAgewiseANofStock={setAgewiseANofStock}></AgewiseAnalysisofStock> 
            }
        </div>
            </div> 
                }
            </div> 

        </div>
    );
};

export default Inventory;