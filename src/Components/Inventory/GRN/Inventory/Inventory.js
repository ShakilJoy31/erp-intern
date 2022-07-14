import React, { useState } from 'react';
import './InventoryCard.css'
import rightArrow from './../../../icons/Vector (8).svg';
import GRN from '../GRN';
import GIN from '../../GIN/GIN';
import TransferNote from '../../TransferNote/TransferNote';
import StockStatement from '../../StockStatement/StockStatement';
import AgewiseAnalysisofStock from '../../AgewiseAnalysisofStock/AgewiseAnalysisofStock';

const Inventory = ({setGin, setGrn, setTransferNote, setStockStatement,setAgewiseANofStock}) => { 

    const handleGRN = (getGtring) =>{
        setGrn[1](getGtring); 
    }
    const handleGIN = (getGtring) =>{
        setGin[1](getGtring); 
    }
    const handleTransferNote = (getGtring) =>{
        setTransferNote[1](getGtring);
    }
    const handleStockStatement = (getGtring) =>{
        setStockStatement[1](getGtring);
    }
    const handleAgewiseAnalysisStock = (getGtring) =>{
        setAgewiseANofStock[1](getGtring); 
    }
    return (
        <div className='inventory-card'>
            
                 <div>
                    {
                    (!setGin[0] && !setGrn[0] && !setTransferNote[0] && !setStockStatement[0] && !setAgewiseANofStock[0]) ? <div className='mx-16 mt-24'>
                    <div class="card flex justify-center shadow-2xl bg-white">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div className='GRN'></div>
                                <h2 class="card-title">Inventory</h2>
                            </div>
                            <div onClick={()=>handleGRN('GRN')} className='flex mt-4'>
                                <p>GRN</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleGIN('GIN')} className='flex mt-4'>
                                <p>GIN</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleTransferNote('TransferNote')} className='flex mt-4'>
                                <p>Transfer Note</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleStockStatement('StockStatement')} className='flex mt-4'>
                                <p>Stock Statement</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                            <div onClick={()=>handleAgewiseAnalysisStock('Agewise Analysis of Stock')} className='flex mt-4'>
                                <p>Agewise Analysis of Stock</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
    
                        </div>
                    </div>
                </div> : <div>
            <div>
            {
                setGrn[0] && <GRN data={['Create', 'Edit/View/Delete', 'Register']}></GRN>
            }
        </div>
        <div>
            {
                setGin[0] && <GIN data={['Create', 'Edit/View/Delete', 'Register']}></GIN>
            }
        </div>
        <div>
            {
                setTransferNote[0] && <TransferNote data={['Create', 'Edit/View/Delete', 'Register']}></TransferNote>
            }
        </div>
        <div>
            {
                setStockStatement[0] && <StockStatement data={['Individual Project', 'All Projects']}></StockStatement>
            }
        </div>
        <div>
            {
                setAgewiseANofStock[0] && <AgewiseAnalysisofStock data={['Individual Project', 'All Projects']}></AgewiseAnalysisofStock>
            }
        </div>
            </div> 
                }
            </div> 

        </div>
    );
};

export default Inventory;