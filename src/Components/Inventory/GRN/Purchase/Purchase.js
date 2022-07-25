import React, { useState } from 'react';
import rightArrow from './../../../icons/Vector (8).svg';
import ComparativeStatement from './ComparativeStatement/ComparativeStatement';
import CreatePurchaseOrder from './CreateOrder/CreatePurchaseOrder';
import OrderAmendment from './OrderAmendment/OrderAmendment';
import OrderStatus from './OrderStatus/OrderStatus';
import PurchaseRequisitionStatus from './PurchaseRequisition/PurchaseRequisitionStatus';
import PBGperformaInvoiceDetails from './PBGperformaInvoiceDetails/PBGperformaInvoiceDetails';
import RequisitionOrderLeadTimeAnalysis from './RequisitionOderLeadTimeAnalysis/RequisitionOrderLeadTimeAnalysis';
import VendorRegister from './VendorRegister/VendorRegister';
import PDCandLCdetails from './PDCandLCdetails/PDCandLCdetails';

const Purchase = () => {
    const [RequisitionStatus, setPurchaseRequisitionStatus] = useState('');

    const [CreateOrderPurchase, setCreateOrder] = useState('');

    const [OrderPurchaseAmendment, setOrderAmendment] = useState('');

    const [OrderPurchaseStatus, setOrderStatus] = useState('');

    const [RequisitionLeadTimeAnalysis, setRequisitionOrderLeadTimeAnalysis] = useState('');

    const [RequestQuotation, setRequestforQuotation] = useState('');

    const [VendorPurchaseRegister, setVendorRegister] = useState('');

    const [ComparativePurchaseStatement, setComparativeStatement] = useState('');

    const [PBGproformaInvoiceDetail, setPBGProformaInvoiceDetails] = useState('');

    const [BudgetVSAllocated, setBudgetVSAllocatedStatus] = useState('');

    const [PDCLCdetails, setPDCAndLCdetails] = useState('');

    const purchaseRequisitionStatus = () => {
        setPurchaseRequisitionStatus('purchaseRequisitionStatus')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const createOrder = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('createOrder')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const orderAmendment = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('orderAmendment')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const orderStatus = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('orderStatus')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const requisitionOrderLeadTimeAnalysis = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('requisitionOrderLeadTimeAnalysis')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const requestforQuotation = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('requestforQuotation')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const vendorRegister = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('vendorRegister')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const comparativeStatement = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('comparativeStatement')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const PBGProformaInvoiceDetails = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('PBGProformaInvoiceDetails')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('')
    }
    const budgetVSAllocatedStatus = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('budgetVSAllocatedStatus')
        setPDCAndLCdetails('')
    }
    const PDCandLCdetail = () => {
        setPurchaseRequisitionStatus('')
        setCreateOrder('')
        setOrderAmendment('')
        setOrderStatus('')
        setRequisitionOrderLeadTimeAnalysis('')
        setRequestforQuotation('')
        setVendorRegister('')
        setComparativeStatement('')
        setPBGProformaInvoiceDetails('')
        setBudgetVSAllocatedStatus('')
        setPDCAndLCdetails('PDCandLCdetails')
    }
    return (
        <div className='inventory-card'>
           {
            (!RequisitionStatus && !CreateOrderPurchase && !OrderPurchaseAmendment && !OrderPurchaseStatus && !RequisitionLeadTimeAnalysis && !RequestQuotation && !VendorPurchaseRegister && !ComparativePurchaseStatement && !PBGproformaInvoiceDetail && !BudgetVSAllocated && !PDCLCdetails) ?  <div className='mx-16 mt-8 '>
            <div class="card flex box-shadow justify-center bg-white shadow-2xl">
                <div class="card-body">
                    <div className='flex items-center'>
                        <div className='GRN'></div>
                        <h2 class="card-title">Purchase</h2>
                    </div>
                    <div>
                    <div onClick={purchaseRequisitionStatus} className='flex mt-4 forHover'>
                        <p className='py-4'>Purchase Requisition Status</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={createOrder} className='flex mt-4 forHover'>
                        <p className='py-4'>Create Order</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={orderAmendment} className='flex mt-4 forHover'>
                        <p className='py-4'>Order Amendment</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={orderStatus} className='flex mt-4 forHover'>
                        <p className='py-4'>Order Status</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={requisitionOrderLeadTimeAnalysis} className='flex mt-4 forHover'>
                        <p className='py-4'>Requisition- Order Lead Time analysis</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div className='flex mt-4 forHover'>
                        <p className='py-4'>Request for Quotation</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={vendorRegister} className='flex mt-4 forHover'>
                        <p className='py-4'>Vendor Register</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={comparativeStatement} className='flex mt-4 forHover'>
                        <p className='py-4'>Comparative Statement</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={PBGProformaInvoiceDetails} className='flex mt-4 forHover'>
                        <p className='py-4'>PBG & Proforma Invoice Details</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div className='flex mt-4 forHover'>
                        <p className='py-4'>Budget VS Allocated Status</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    <div onClick={PDCandLCdetail} className='flex mt-4 forHover'>
                        <p className='py-4'>PDC & LC details</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <hr className='w-screen line'></hr>
                    </div>
                </div>
            </div>
        </div> : <div>
            {
                RequisitionStatus && <PurchaseRequisitionStatus setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></PurchaseRequisitionStatus>
            }
            {
                CreateOrderPurchase && <CreatePurchaseOrder setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></CreatePurchaseOrder>
            }
            {
                OrderPurchaseAmendment && <OrderAmendment setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></OrderAmendment>
            }
            {
                OrderPurchaseStatus && <OrderStatus setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></OrderStatus>
            }
            {
                RequisitionLeadTimeAnalysis && <RequisitionOrderLeadTimeAnalysis setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></RequisitionOrderLeadTimeAnalysis>
            }
            
            {
                VendorPurchaseRegister && <VendorRegister setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></VendorRegister>
            }
            {
                ComparativePurchaseStatement && <ComparativeStatement setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></ComparativeStatement>
            }
            {
                PBGproformaInvoiceDetail && <PBGperformaInvoiceDetails setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></PBGperformaInvoiceDetails>
            }
            {
                PDCLCdetails && <PDCandLCdetails setPurchaseRequisitionStatus={setPurchaseRequisitionStatus}
                setCreateOrder={setCreateOrder}
                setOrderAmendment={setOrderAmendment}
                setOrderStatus={setOrderStatus}
                setRequisitionOrderLeadTimeAnalysis={setRequisitionOrderLeadTimeAnalysis}
                setRequestforQuotation={setRequestforQuotation}
                setVendorRegister={setVendorRegister}
                setComparativeStatement={setComparativeStatement}
                setPBGProformaInvoiceDetails={setPBGProformaInvoiceDetails}
                setBudgetVSAllocatedStatus={setBudgetVSAllocatedStatus}
                setPDCAndLCdetails={setPDCAndLCdetails} data={['Create', 'Edit/View/Delete', 'Register']}></PDCandLCdetails>
            }
        </div>
           }
        </div>
    );
};

export default Purchase;