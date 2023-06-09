import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import Attedance from './Attendance/Attedance';
import DailyLabourReport from './DailyLabourReport/DailyLabourReport';
import EmployeesDetails from './EmployeeDetails/EmployeesDetails';
import HandoverFormalLetter from './HandoverFormalLetter/HandoverFormalLetter';
import LeaveManagement from './LeaveManagement/LeaveManagement';
import OffferLetter from './OfferLetter/OffferLetter';
import Payroll from './Payroll/Payroll';
import ServiceRecordLetter from './ServiceRecordLetter/ServiceRecordLetter';

const HumanResources = () => {
    const [employeeDetails, setEmployeeDetails] = useState(''); 
    const [attedance, setAttedance] = useState(''); 
    const [leaveManagement, setLeaveManagement] = useState(''); 
    const [offerLettter, setOfferLettter] = useState(''); 
    const [serviceRecordLetter, setServiceRecordLetter] = useState(''); 
    const [handoverFormalLetter, setHandoverFormalLetter] = useState(''); 
    const [payroll, setPayroll] = useState(''); 
    const [dayLabourReport, setDayLabourReport] = useState(''); 

    const handleEmployeeDetails = () =>{
        setEmployeeDetails('EmployeeDetails')
        setAttedance('')
        setLeaveManagement('')
        setOfferLettter('')
        setServiceRecordLetter('')
        setHandoverFormalLetter('')
        setPayroll('')
        setPayroll('')
        setDayLabourReport('')
    }
    const handleAttednce = () =>{
        setAttedance('Attedance')
        setEmployeeDetails('')
        setLeaveManagement('')
        setOfferLettter('')
        setServiceRecordLetter('')
        setHandoverFormalLetter('')
        setPayroll('')
        setPayroll('')
        setDayLabourReport('')
    }
    const handleLeaveManagement = () =>{
        setLeaveManagement('LeaveManagement')
        setEmployeeDetails('')
        setAttedance('')
        setOfferLettter('')
        setServiceRecordLetter('')
        setHandoverFormalLetter('')
        setPayroll('')
        setPayroll('')
        setDayLabourReport('')
    }
    const handleOfferLettter = () =>{
        setOfferLettter('OfferLettter')
        setEmployeeDetails('')
        setAttedance('')
        setLeaveManagement('')
        setServiceRecordLetter('')
        setHandoverFormalLetter('')
        setPayroll('')
        setPayroll('') 
        setDayLabourReport('')
    }
    const handleServiceRecordLetter = () =>{
        setServiceRecordLetter('ServiceRecordLetter')
        setEmployeeDetails('')
        setAttedance('')
        setLeaveManagement('')
        setOfferLettter('')
        setHandoverFormalLetter('')
        setPayroll('')
        setPayroll('')
        setDayLabourReport('')
    }
    const handleHandoverFormalLetter = () =>{
        setHandoverFormalLetter('HandoverFormalLetter')
        setEmployeeDetails('')
        setAttedance('')
        setLeaveManagement('')
        setOfferLettter('')
        setServiceRecordLetter('')
        setPayroll('')
        setPayroll('')
        setDayLabourReport('')
    }
    const handlePayroll = () =>{
        setPayroll('Payroll')
        setEmployeeDetails('')
        setAttedance('')
        setLeaveManagement('')
        setOfferLettter('')
        setServiceRecordLetter('')
        setHandoverFormalLetter('')
        setDayLabourReport('')
    }

    const handleDayLabourReport = () =>{
        setDayLabourReport('DayLabourReport')
        setEmployeeDetails('')
        setAttedance('')
        setLeaveManagement('')
        setOfferLettter('')
        setServiceRecordLetter('')
        setHandoverFormalLetter('')
        setPayroll('')
        
    }
    return (
        <div className='inventory-card'>
            {
                (!employeeDetails && !attedance && !leaveManagement && !offerLettter && !serviceRecordLetter && !handoverFormalLetter && !payroll && !dayLabourReport) ? <div className='mx-16 mt-8 '>
                <div class="card flex box-shadow justify-center bg-white shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Human Resources</h2>
                        </div>
                        <div>
                        <div className='flex forHover'>
                            <p className='py-4'>Employees Details</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleAttednce} className='flex forHover'>
                            <p className='py-4'>Attendance</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleLeaveManagement} className='flex forHover'>
                            <p className='py-4'>Leave Management</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleOfferLettter} className='flex forHover'>
                            <p className='py-4'>Offer Letter</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleServiceRecordLetter} className='flex forHover'>
                            <p className='py-4'>Service Record Letter</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleHandoverFormalLetter} className='flex forHover'>
                            <p className='py-4'>Handover Formal Letter</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handlePayroll} className='flex forHover'>
                            <p className='py-4'>Payroll</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleDayLabourReport} className='flex forHover'>
                            <p className='py-4'>Daily Labour Report</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        </div>
                    </div>
                </div>
            </div> : <div>
                {
                    attedance && <Attedance setEmployeeDetails={setEmployeeDetails} setAttedance={setAttedance} setLeaveManagement={setLeaveManagement} setOfferLettter={setOfferLettter} setServiceRecordLetter={setServiceRecordLetter} setHandoverFormalLetter={setHandoverFormalLetter} setPayroll={setPayroll} setDayLabourReport={setDayLabourReport} data={['Create', 'Edit/View/Delete', 'Register']}></Attedance>
                }

                {
                    leaveManagement && <LeaveManagement setEmployeeDetails={setEmployeeDetails} setAttedance={setAttedance} setLeaveManagement={setLeaveManagement} setOfferLettter={setOfferLettter} setServiceRecordLetter={setServiceRecordLetter} setHandoverFormalLetter={setHandoverFormalLetter} setPayroll={setPayroll} setDayLabourReport={setDayLabourReport} data={['Create', 'Edit/View/Delete', 'Register']}></LeaveManagement>
                }
 
                {
                    offerLettter && <OffferLetter setEmployeeDetails={setEmployeeDetails} setAttedance={setAttedance} setLeaveManagement={setLeaveManagement} setOfferLettter={setOfferLettter} setServiceRecordLetter={setServiceRecordLetter} setHandoverFormalLetter={setHandoverFormalLetter} setPayroll={setPayroll} setDayLabourReport={setDayLabourReport} data={['Create', 'Edit/View/Delete', 'Register']}></OffferLetter>
                }

                {
                    serviceRecordLetter && <ServiceRecordLetter setEmployeeDetails={setEmployeeDetails} setAttedance={setAttedance} setLeaveManagement={setLeaveManagement} setOfferLettter={setOfferLettter} setServiceRecordLetter={setServiceRecordLetter} setHandoverFormalLetter={setHandoverFormalLetter} setPayroll={setPayroll} setDayLabourReport={setDayLabourReport} data={['Create', 'Edit/View/Delete', 'Register']}></ServiceRecordLetter>
                }

                {
                    handoverFormalLetter && <HandoverFormalLetter setEmployeeDetails={setEmployeeDetails} setAttedance={setAttedance} setLeaveManagement={setLeaveManagement} setOfferLettter={setOfferLettter} setServiceRecordLetter={setServiceRecordLetter} setHandoverFormalLetter={setHandoverFormalLetter} setPayroll={setPayroll} setDayLabourReport={setDayLabourReport} data={['Create', 'Edit/View/Delete', 'Register']}></HandoverFormalLetter>
                }

                {
                    payroll && <Payroll setEmployeeDetails={setEmployeeDetails} setAttedance={setAttedance} setLeaveManagement={setLeaveManagement} setOfferLettter={setOfferLettter} setServiceRecordLetter={setServiceRecordLetter} setHandoverFormalLetter={setHandoverFormalLetter} setPayroll={setPayroll} setDayLabourReport={setDayLabourReport} data={['Create', 'Edit/View/Delete', 'Register']}></Payroll>
                }
                
                {
                    dayLabourReport && <DailyLabourReport setEmployeeDetails={setEmployeeDetails} setAttedance={setAttedance} setLeaveManagement={setLeaveManagement} setOfferLettter={setOfferLettter} setServiceRecordLetter={setServiceRecordLetter} setHandoverFormalLetter={setHandoverFormalLetter} setPayroll={setPayroll} setDayLabourReport={setDayLabourReport} data={['Create', 'Edit/View/Delete', 'Register']}></DailyLabourReport>
                }
            </div>
            }
        </div>
    );
};

export default HumanResources;