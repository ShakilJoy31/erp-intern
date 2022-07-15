import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Desktop150.css';
import executiveDashboard from './icons/executive.svg';
import billing from './icons/billing.svg';
import estimation from './icons/estimation.svg';
import finance from './icons/finance.svg';
import humanResource from './icons/human resource.svg';
import inventory from './icons/inventory.svg';
import planning from './icons/planning.svg';
import projectMGT from './icons/project MGT.svg';
import purchase from './icons/purchase.svg';
import stockHolder from './icons/stock holder.svg';

const Desktop150 = ({ setGin, setGrn, setTransferNote, setStockStatement, setAgewiseANofStock }) => {
    const handleInventory = () => {
        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content w-full flex body-background-color">
                    <label for="my-drawer-2" class="btn btn-circle btn-outline ml-4 lg:hidden">
                        <i class="fa-solid fa-chevron-right"></i></label>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <div>
                            <div className='flex items-center justify center'>
                                <img src={executiveDashboard} alt="" />
                                <li><Link to='/dashboard/executiveDashboard'>Executive Dashboard</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={inventory} alt="" />
                                <li onClick={handleInventory}><Link to='/dashboard'>Inventory</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={purchase} alt="" />
                                <li><Link to='/dashboard/purchase'>Purchase</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={billing} alt="" />
                                <li><Link to='/dashboard/billing'>Billing</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={humanResource} alt="" />
                                <li><Link to='/dashboard/humanResources'>Human Resources</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={stockHolder} alt="" />
                                <li><Link to='/dashboard/stakeholderMGT'>Stakeholder MGT</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={estimation} alt="" />
                                <li><Link to='/dashboard/estimationTenderMGT'>Estimation & Tender MGT</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={projectMGT} alt="" />
                                <li><Link to='/dashboard/projectMGT'>Project MGT</Link></li>
                            </div>

                            <div className='flex items-center justify center'>
                                <img src={planning} alt="" />
                                <li><Link to='/dashboard/planning'>Planning</Link></li>
                            </div>
                            <div className='flex items-center justify center'>
                                <img src={finance} alt="" />
                                <li><Link to='/dashboard/financeAccount'>Finance & Accounting</Link></li>
                            </div>







                            

                            

                            

                            

                            

                            
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Desktop150;