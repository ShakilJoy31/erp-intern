import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 

const ProfitAndLossAnalysis = ({ setVoucher, setAdvice, setInvoice, setLedger, setAgeing, setHOhost, setTrial, setProfit, setCashFlow, setBankBook, setCashBook, setCheckBook, setBankReconciliation, setGSTregister, setTDSregister, data }) => {
    const [create, setCreate] = useState(''); 
    const handleGetBack = () =>{
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('');
        setAgeing('');
        setHOhost('');
        setTrial('');
        setProfit('');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('');
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    return (
        <div className='  mx-16 mt-24'>
            {
                (!create) ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
            <div class="card flex justify-center shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Profit and Loss Analysis</h2>
                </div>
                    </div>
                    
                    {
                        data.map(singleData => <div>
                            <div className='flex forHover'>
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
                       
                    }
                </div>
            }
        </div>
    );
};

export default ProfitAndLossAnalysis;