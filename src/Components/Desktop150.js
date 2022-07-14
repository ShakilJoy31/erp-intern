import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Desktop150.css';

const Desktop150 = ({setGin ,setGrn, setTransferNote, setStockStatement,setAgewiseANofStock}) => {
    const handleInventory = () =>{
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
                            <li><Link to='/dashboard/executiveDashboard'>Executive Dashboard</Link></li>

                            <li onClick={handleInventory}><Link to='/dashboard'>Inventory</Link></li>

                            <li><Link to='/dashboard/purchase'>Purchase</Link></li>

                            <li><Link to='/dashboard/billing'>Billing</Link></li>

                            <li><Link to='/dashboard/humanResources'>Human Resources</Link></li>

                            <li><Link to='/dashboard/stakeholderMGT'>Stakeholder MGT</Link></li>

                            <li><Link to='/dashboard/estimationTenderMGT'>Estimation & Tender MGT</Link></li>

                            <li><Link to='/dashboard/projectMGT'>Project MGT</Link></li>

                            <li><Link to='/dashboard/planning'>Planning</Link></li>

                            <li><Link to='/dashboard/financeAccount'>Finance & Accounting</Link></li>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Desktop150;