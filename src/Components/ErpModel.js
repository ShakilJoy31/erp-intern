import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Desktop150.css';
import executiveDashboardImg from './icons/executive.svg';
import billingsvg from './icons/billing.svg';
import estimationsvg from './icons/estimation.svg';
import financesvg from './icons/finance.svg';
import humanResourcesvg from './icons/human resource.svg';
import inventorysvg from './icons/inventory.svg';
import planningsvg from './icons/planning.svg';
import projectMGTsvg from './icons/project MGT.svg';
import purchasesvg from './icons/purchase.svg';
import stockHoldersvg from './icons/stock holder.svg';
import applicationLogo from './icons/applicationLogo.svg'
import Navbar from './Navbar/Navbar';

const ErpModel = ({ setGin, setGrn, setTransferNote, setStockStatement, setAgewiseANofStock }) => {
    const [executiveDashboard, setExecutiveDashboard] = useState('setExecutiveDashboard');
    const [inventory, setInventory] = useState('');
    const [billing, setBilling] = useState('');
    const [humanResource, setHumanResource] = useState('');
    const [stakeholderMGT, setStakeholderMGT] = useState('');
    const [estimation, setEstimation] = useState('');
    const [projectMGT, setProjectMGT] = useState('');
    const [planning, setPlanning] = useState('');
    const [finance, setFinance] = useState('');
    const [purchase, setPurchase] = useState('');
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate(); 


    const handleExecutiveDashboard = () => {
        setInventory('')
        setExecutiveDashboard('setExecutiveDashboard')
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
        navigate('/dashboard')
    }
    const handleInventory = () => {

        setInventory('setInventory')
        setExecutiveDashboard('')
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
        navigate('/dashboard/inventory')
    }
    const handlePurchase = () => {
        setInventory('')
        setExecutiveDashboard('')
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
        navigate('/dashboard/purchase')
    }
    const handleBilling = () => {
        setInventory('')
        setBilling('handleBilling')
        setExecutiveDashboard('')
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
        navigate('/dashboard/billing')
    }
    const handleHumanResource = () => {
        setInventory('')
        setBilling('')
        setHumanResource('handleHumanResource')
        setExecutiveDashboard('')
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
        navigate('/dashboard/humanResources')
    }
    const handleStakeholderMGT = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('setStakeholderMGT')
        setEstimation('')
        setExecutiveDashboard('')
        setProjectMGT('')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
        navigate('/dashboard/stakeholderMGT')
    }
    const handleEstimation = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('setEstimation')
        setProjectMGT('')
        setExecutiveDashboard('')
        setPlanning('')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
        navigate('/dashboard/estimationTenderMGT')
    }
    const handleProjectMGT = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setExecutiveDashboard('')
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
        navigate('/dashboard/projectMGT')
    }
    const handlePlanning = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setEstimation('')
        setProjectMGT('')
        setExecutiveDashboard('')
        setPlanning('setPlanning')
        setFinance('')
        setPurchase('')

        setGin('')
        setGrn('')
        setTransferNote('')
        setStockStatement('')
        setAgewiseANofStock('')
        navigate('/dashboard/planning')
    }
    const handleFinance = () => {
        setInventory('')
        setBilling('')
        setHumanResource('')
        setStakeholderMGT('')
        setExecutiveDashboard('')
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
        navigate('/dashboard/financeAccount')
    }
    const handleToggleButton = () =>{
        if(toggle){
            setToggle(false);
        }
        else{
            setToggle(true);
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class={`drawer-content w-full flex body-background-color ${toggle ? 'ml-48' : 'ml-80'}`}>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul className={ `menu w-80 text-base-content ${!toggle ? 'Overlap' : 'hide'} h-screen box-shadow bg-white`}>

                        <div className='shadow-purple-300'>
                            <div>
                                <div className='mt-2 ml-8'>
                                    <Link className='mb-10 text-3xl text-purple-500' to='/'>
                                        <img src={applicationLogo} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div onClick={handleExecutiveDashboard} className={`flex items-center mb-6 justify center ${executiveDashboard ? 'for-linear-background' : ''} `}>
                                <div className={`${executiveDashboard ? 'activeLink' : ''}  `}></div>
                                    <img className='mx-4' src={executiveDashboardImg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard'>Executive Dashboard</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={executiveDashboardImg} alt="" />
                                </div>

                                <div onClick={handleInventory} className={`flex items-center mb-6 justify center ${inventory ? 'for-linear-background' : ''} `}>
                                    <div className={`${inventory ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={inventorysvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/inventory'>Inventory</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={inventorysvg} alt="" />
                                </div>

                                <div onClick={handlePurchase} className={`flex items-center mb-6 justify center ${purchase ? 'for-linear-background' : ''} `}>
                                    <div className={`${purchase ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={purchasesvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/purchase'>Purchase</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={purchasesvg} alt="" />
                                </div>

                                <div onClick={handleBilling} className={`flex items-center mb-6 justify center ${billing ? 'for-linear-background' : ''} `}>
                                    <div className={`${billing ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={billingsvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/billing'>Billing</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={billingsvg} alt="" />
                                </div>

                                <div onClick={handleHumanResource} className={`flex items-center mb-6 justify center ${humanResource ? 'for-linear-background' : ''} `}>
                                    <div className={`${humanResource ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={humanResourcesvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/humanResources'>Human Resources</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={humanResourcesvg} alt="" />
                                </div>

                                <label onClick={handleToggleButton} for="my-drawer-2" className='btn btn-circle sidebar anisidebar toggle-button'>
                                    {
                                        toggle ? <i class="fa-solid text-white fa-chevron-right"></i> : <i class="fa-solid fa-chevron-left text-white"></i>
                                    }
                                    </label>

                                <div onClick={handleStakeholderMGT} className={`flex items-center mb-6 justify center ${stakeholderMGT ? 'for-linear-background' : ''} `}>
                                    <div className={`${stakeholderMGT ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={stockHoldersvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/stakeholderMGT'>Stakeholder MGT</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={stockHoldersvg} alt="" />
                                </div>

                                <div onClick={handleEstimation} className={`flex items-center mb-6 justify center ${estimation ? 'for-linear-background' : ''} `}>
                                    <div className={`${estimation ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={estimationsvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/estimationTenderMGT'>Estimation & Tender MGT</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={estimationsvg} alt="" />
                                </div>

                                <div onClick={handleProjectMGT} className={`flex items-center mb-6 justify center ${projectMGT ? 'for-linear-background' : ''} `}>
                                    <div className={`${projectMGT ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={projectMGTsvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/projectMGT'>Project MGT</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={projectMGTsvg} alt="" />
                                </div>

                                <div onClick={handlePlanning} className={`flex items-center mb-6 justify center ${planning ? 'for-linear-background' : ''} `}>
                                    <div className={`${planning ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={planningsvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/planning'>Planning</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={planningsvg} alt="" />
                                </div>
                                <div onClick={handleFinance} className={`flex items-center mb-6 justify center ${finance ? 'for-linear-background' : ''} `}>
                                    <div className={`${finance ? 'activeLink' : ''}  `}></div>
                                    <img className='ml-4 mr-4' src={financesvg} alt="" />
                                    <Link className='w-full text-size' to='/dashboard/financeAccount'>Finance & Accounting</Link>
                                    <img className={`${toggle ? 'block' : 'hidden'} mx-4 mr-8`} src={financesvg} alt="" />
                                </div>
                            </div>

                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ErpModel;