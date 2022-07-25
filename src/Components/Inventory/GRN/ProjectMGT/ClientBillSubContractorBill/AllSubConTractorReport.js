import React, { useState } from 'react';
import ClientBillSubcontractorBill from './ClientBillSubcontractorBill';

const AllSubConTractorReport = ({setProject, setClientBOQ, setUploadDocuments, setProjectSalient, setLabourProductivity, setClientBill, setProjectCost, setPurchaseRequisition, setInternalProgress, setClientProgress, setProjectOverView, setWeeklyFund, setPaymentProposal, setClientBillStatus, setVendorBill}) => {
    const [clientSubcontractor, setclientSubcontractor] = useState(''); 
    const handleCreateProject = () =>{
        setclientSubcontractor('setCreateProject'); 
    }
    const handleGetBack = () => {
        setProject('');
        setClientBOQ('');
        setUploadDocuments('');
        setProjectSalient('');
        setLabourProductivity('');
        setClientBill('');
        setProjectCost('');
        setPurchaseRequisition('');
        setInternalProgress('');
        setClientProgress('');
        setProjectOverView('');
        setWeeklyFund('');
        setPaymentProposal('');
        setClientBillStatus('');
        setVendorBill('');
      }
    return (
        <div className='mx-16 mt-8'>
            {
                !clientSubcontractor ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Client Subcontractor Bill Report</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table w-full">

                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Project Code</th>
                                        <th>Effective BOQ</th>
                                        <th>BOQ Item</th>
                                        <th>UOM</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Vendor Cty</th>
                                        <th>Vendor Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                    <tr>
                                        <th>01</th>
                                        <td>01</td>
                                        <td>2022</td>
                                        <td>4.5m-7.0m</td>
                                        <td>Main Branch</td>
                                        <td>2022</td>
                                        <td>2022</td>
                                        <td>Delhi</td>
                                        <td>2753</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <div>
              {
                clientSubcontractor && <ClientBillSubcontractorBill setclientSubcontractor={setclientSubcontractor}></ClientBillSubcontractorBill>
              }
            </div>
            }
        </div>
    );
};

export default AllSubConTractorReport;