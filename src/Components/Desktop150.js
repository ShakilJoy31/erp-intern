import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Desktop150.css';
import executiveDashboard from './icons/executive.svg';
import billingsvg from './icons/billing.svg';
import estimationsvg from './icons/estimation.svg';
import financesvg from './icons/finance.svg';
import humanResourcesvg from './icons/human resource.svg';
import inventorysvg from './icons/inventory.svg';
import planningsvg from './icons/planning.svg';
import projectMGTsvg from './icons/project MGT.svg';
import purchasesvg from './icons/purchase.svg';
import stockHoldersvg from './icons/stock holder.svg';
import StockStatementsvg from './Inventory/StockStatement/StockStatement';
import ProjectMGTsvg from './Inventory/GRN/ProjectMGT/ProjectMGT';
import applicationLogo from './icons/applicationLogo.svg'

const Desktop150 = ({ setGin, setGrn, setTransferNote, setStockStatement, setAgewiseANofStock }) => {
    const [inventory, setInventory] = useState();
    const [billing, setBilling] = useState();
    const [humanResource, setHumanResource] = useState();
    const [stakeholderMGT, setStakeholderMGT] = useState();
    const [estimation, setEstimation] = useState();
    const [projectMGT, setProjectMGT] = useState();
    const [planning, setPlanning] = useState();
    const [finance, setFinance] = useState();
    const [purchase, setPurchase] = useState();


    const handleInventory = () => {

        setInventory('setInventory')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handlePurchase = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('')
        setPlanning('')
        setFinance('')
        setPurchase('handlePurchase')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handleBilling = () => {
        setInventory('')
        setBilling('handleBilling')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handleHumanResource = () => {
        setInventory('')
        setBilling('')
        setHumanResource('handleHumanResource')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handleStakeholderMGT = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('setStakeholderMGT')
        setEstimation('')
        setProjectMGT('')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handleEstimation = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('setEstimation')
        setProjectMGT('')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handleProjectMGT = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('setProjectMGT')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handlePlanning = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('')
        setPlanning('setPlanning')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
    }
    const handleFinance = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('')
        setPlanning('')
        setFinance('setFinance')
        setPurchase('')

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
                <div class="drawer-content w-full flex body-background-color ml-80">
                    <label for="my-drawer-2" class="btn btn-circle btn-outline ml-4 lg:hidden">
                        <i class="fa-solid fa-chevron-right"></i></label>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu overflow-y-auto w-80 text-base-content Overlap h-full shadow-purple-300 bg-white">

                        <div className='shadow-purple-300'>
                            <div>
                                <div className='mt-2 ml-4'>
                                    <Link className='text-3xl text-purple-500' to='/'>
                                        <img src={applicationLogo} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className='mt-24'>
                            <div className='flex items-center mb-6 justify center'>
                                <img className='mx-4' src={executiveDashboard} alt="" />
                                <Link className='w-full text-size' to='/dashboard/executiveDashboard'>Executive Dashboard</Link>
                            </div>

                            <div onClick={handleInventory} className={`flex items-center mb-6 justify center ${inventory ? 'for-linear-background' : ''} `}>
                                <div className={`${inventory ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={inventorysvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard'>Inventory</Link>
                            </div>

                            <div onClick={handlePurchase} className={`flex items-center mb-6 justify center ${purchase ? 'for-linear-background' : ''} `}>
                                <div className={`${purchase ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={purchasesvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/purchase'>Purchase</Link>
                            </div>

                            <div onClick={handleBilling} className={`flex items-center mb-6 justify center ${billing ? 'for-linear-background' : ''} `}>
                                <div className={`${billing ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={billingsvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/billing'>Billing</Link>
                            </div>

                            <div onClick={handleHumanResource} className={`flex items-center mb-6 justify center ${humanResource ? 'for-linear-background' : ''} `}>
                                <div className={`${humanResource ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={humanResourcesvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/humanResources'>Human Resources</Link>
                            </div>

                            <div onClick={handleStakeholderMGT} className={`flex items-center mb-6 justify center ${stakeholderMGT ? 'for-linear-background' : ''} `}>
                                <div className={`${stakeholderMGT ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={stockHoldersvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/stakeholderMGT'>Stakeholder MGT</Link>
                            </div>

                            <div onClick={handleEstimation} className={`flex items-center mb-6 justify center ${estimation ? 'for-linear-background' : ''} `}>
                                <div className={`${estimation ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={estimationsvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/estimationTenderMGT'>Estimation & Tender MGT</Link>
                            </div>

                            <div onClick={handleProjectMGT} className={`flex items-center mb-6 justify center ${projectMGT ? 'for-linear-background' : ''} `}>
                                <div className={`${projectMGT ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={projectMGTsvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/projectMGT'>Project MGT</Link>
                            </div>

                            <div onClick={handlePlanning} className={`flex items-center mb-6 justify center ${planning ? 'for-linear-background' : ''} `}>
                                <div className={`${planning ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={planningsvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/planning'>Planning</Link>
                            </div>
                            <div onClick={handleFinance} className={`flex items-center mb-6 justify center ${finance ? 'for-linear-background' : ''} `}>
                                <div className={`${finance ? 'activeLink' : ''}  `}></div>
                                <img className='ml-4 mr-4' src={financesvg} alt="" />
                                <Link className='w-full text-size' to='/dashboard/financeAccount'>Finance & Accounting</Link>
                            </div>
                            </div>

                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Desktop150;