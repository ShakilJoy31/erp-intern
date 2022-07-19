import React from 'react';
import rightArrow from './../../../icons/Vector (8).svg';

const FinanceAccounts = () => {
    return (
        <div className='inventory-card'>
            <div className='mx-16 mt-24'>
                <div class="card flex justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Finance and Accounts</h2>
                        </div>
                        <div className='flex my-2 forHover'>
                            <p>Voucher</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Invoice Generation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Advice</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Ledger</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Ageing Analysis</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>HO cost allocation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Trial Balance</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Profit & Loss Analysis</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Cash Flow Analysis</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Bank Book</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Cash Book</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Cheque Book</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>Bank Reconciliation</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>GST Registe</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex my-2 forHover'>
                            <p>TDS Register</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceAccounts;