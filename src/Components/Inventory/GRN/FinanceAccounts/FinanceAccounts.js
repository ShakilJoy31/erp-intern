import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import Advice from './Advice/Advice';
import AgeingAnalysis from './AgeingAnalysis/AgeingAnalysis';
import BankBook from './BankBook/BankBook';
import CashFlowAnalysis from './CashFlowAnalysis/CashFlowAnalysis';
import HOhostAllocation from './HOcostAllocation/HOhostAllocation';
import InvoiceGeneration from './InvoiceGeneration/InvoiceGeneration';
import Ledger from './Ledger/Ledger';
import ProfitAndLossAnalysis from './ProfitAndLoss/ProfitAndLossAnalysis';
import TrialBalance from './TrialBalance/TrialBalance';
import Voucher from './Voucher/Voucher';
import CashBook from './CashBook/CashBook';
import CheckBook from './CheckBook/CheckBook';
import BankReconciliation from './BankReconciliation/BankReconciliation';


const FinanceAccounts = () => {
    const [voucher, setVoucher] = useState('');
    const [advice, setAdvice] = useState('');
    const [invoice, setInvoice] = useState('');
    const [ledger, setLedger] = useState('');
    const [ageing, setAgeing] = useState('');
    const [HOhost, setHOhost] = useState('');
    const [trial, setTrial] = useState('');
    const [profit, setProfit] = useState('');
    const [cashFlow, setCashFlow] = useState('');
    const [bankBook, setBankBook] = useState('');
    const [cashBook, setCashBook] = useState('');
    const [checkBook, setCheckBook] = useState('');
    const [bankReconciliation, setBankReconciliation] = useState('');
    const [gstRegister, setGSTregister] = useState('');
    const [tdsRegister, setTDSregister] = useState('');
    const handleVoucher = () => {
        setVoucher('setVoucher');
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
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');

    }
    const handleInvoice = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('setInvoice');
        setLedger('');
        setAgeing('');
        setHOhost('');
        setTrial('');
        setProfit('');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleAdvice = () => {
        setVoucher('');
        setAdvice('setAdvice');
        setInvoice('');
        setLedger('');
        setAgeing('');
        setHOhost('');
        setTrial('');
        setProfit('');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleLedger = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('setLedger');
        setAgeing('');
        setHOhost('');
        setTrial('');
        setProfit('');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleAgeing = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('');
        setAgeing('setAgeing');
        setHOhost('');
        setTrial('');
        setProfit('');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleHOhost = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('');
        setAgeing('');
        setHOhost('setHOhost');
        setTrial('');
        setProfit('');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleTrialBalance = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('');
        setAgeing('');
        setHOhost('');
        setTrial('setTrial');
        setProfit('');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleProfitLoss = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('');
        setAgeing('');
        setHOhost('');
        setTrial('');
        setProfit('setProfit');
        setCashFlow('');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleCashFlow = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('');
        setAgeing('');
        setHOhost('');
        setTrial('');
        setProfit('');
        setCashFlow('setCashFlow');
        setBankBook('');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleBankBook = () => {
        setVoucher('');
        setAdvice('');
        setInvoice('');
        setLedger('');
        setAgeing('');
        setHOhost('');
        setTrial('');
        setProfit('');
        setCashFlow('');
        setBankBook('setBankBook');
        setCashBook('');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleCashBook = () => {
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
        setCashBook('setCashBook');
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleCheckBook = () => {
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
        setCheckBook('setCheckBook')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
    }
    const handleBankReconciliation = () => {
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
        setCheckBook('')
        setBankReconciliation('setBankReconciliation');
        setGSTregister('');
        setTDSregister('');
    }
    const handleGSTregister = () => {
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
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('setGSTregister');
        setTDSregister('');
    }
    const handleTDSregister = () => {
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
        setCheckBook('')
        setBankReconciliation('');
        setGSTregister('');
        setTDSregister('');
        setTDSregister('');
    }
    return (
        <div className='inventory-card'>
            {
                (!advice &&!invoice && !voucher && !ledger && !ageing && !HOhost && !trial && !profit && !cashFlow && !bankBook && !cashBook && !checkBook && !bankReconciliation && !gstRegister && !tdsRegister) ? <div className='mx-16 mt-8 '>
                <div class="card flex box-shadow justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Finance and Accounts</h2>
                        </div>
                        <div>
                        <div onClick={handleVoucher} className='flex  forHover'>
                            <p className='py-4'>Voucher</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleInvoice} className='flex  forHover'>
                            <p className='py-4'>Invoice Generation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleAdvice} className='flex  forHover'>
                            <p className='py-4'>Advice</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleLedger} className='flex  forHover'>
                            <p className='py-4'>Ledger</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleAgeing} className='flex  forHover'>
                            <p className='py-4'>Ageing Analysis</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleHOhost} className='flex  forHover'>
                            <p className='py-4'>HO cost allocation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleTrialBalance} className='flex  forHover'>
                            <p className='py-4'>Trial Balance</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleProfitLoss} className='flex  forHover'>
                            <p className='py-4'>Profit & Loss Analysis</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleCashFlow} className='flex  forHover'>
                            <p className='py-4'>Cash Flow Analysis</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleBankBook} className='flex  forHover'>
                            <p className='py-4'>Bank Book</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleCashBook} className='flex  forHover'>
                            <p className='py-4'>Cash Book</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleCheckBook} className='flex  forHover'>
                            <p className='py-4'>Cheque Book</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleBankReconciliation} className='flex  forHover'>
                            <p className='py-4'>Bank Reconciliation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div className='flex  forHover'>
                            <p className='py-4'>GST Register</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div className='flex  forHover'>
                            <p className='py-4'>TDS Register</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        </div>
                    </div>
                </div>
            </div> : <div>
                {
                    voucher && <Voucher setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={['Create', 'Edit/View/Delete', 'Register']}></Voucher>
                }
                {
                    invoice && <InvoiceGeneration setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={['Create', 'Edit/View/Delete', 'Register']}></InvoiceGeneration>
                }
                {
                    advice && <Advice setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={['Create', 'Edit/View/Delete', 'Register']}></Advice>
                }
                {
                    ledger && <Ledger setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></Ledger>
                }
                {
                    ageing && <AgeingAnalysis setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={['Debtor', 'Creditor']}></AgeingAnalysis>
                }
                {
                    HOhost && <HOhostAllocation setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></HOhostAllocation>
                }
                {
                    trial && <TrialBalance setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></TrialBalance>
                }
                {
                    profit && <ProfitAndLossAnalysis setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></ProfitAndLossAnalysis>
                }
                {
                    cashFlow && <CashFlowAnalysis setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></CashFlowAnalysis>
                }
                {
                    bankBook && <BankBook setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></BankBook>  
                }
                {
                    cashBook && <CashBook setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></CashBook>
                }
                {
                    checkBook && <CheckBook setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={['Create', 'Edit/View/Delete', 'Register']}></CheckBook>
                }
                {
                    bankReconciliation && <BankReconciliation setVoucher={setVoucher} setAdvice={setAdvice} setInvoice={setInvoice} setLedger={setLedger} setAgeing={setAgeing} setHOhost={setHOhost} setTrial={setTrial} setProfit={setProfit} setCashFlow={setCashFlow} setBankBook={setBankBook} setCashBook={setCashBook} setCheckBook={setCheckBook} setBankReconciliation={setBankReconciliation} setGSTregister={setGSTregister} setTDSregister={setTDSregister} data={[]}></BankReconciliation>
                }
            </div>
            }
        </div>
    );
};

export default FinanceAccounts;

  // voucher invoiceGeneration advice ledger ageing HOhost trial profit cashflow bankbook cashbook checkbook