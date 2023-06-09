import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 

const Ledger = ({ setVoucher, setAdvice, setInvoice, setLedger, setAgeing, setHOhost, setTrial, setProfit, setCashFlow, setBankBook, setCashBook, setCheckBook, setBankReconciliation, setGSTregister, setTDSregister, data }) => {
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
        <div className='mx-16 mt-8 '>
            {
                (!create) ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                    </div>
            <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Ledger</h2>
                </div>
                    </div>
                    
                    {
                        data.map(singleData => <div>
                            <div className='flex forHover'>
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
                        
                    }
                </div>
            }
        </div>
    );
};

export default Ledger;