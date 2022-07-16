import React, { useState } from 'react';
import Agency from '../ProjectMGT/Agency/Agency';
import Client from '../ProjectMGT/Client/Client';
import Vendor from '../ProjectMGT/Vendor/Vendor';
import rightArrow from './../../../icons/Vector (8).svg';

const StakeholderMGT = () => {
    const [client, setClient] = useState('');
    const [vendor, setVendor] = useState('');
    const [agency, setAgent] = useState('');
    const handleClient = () => {
        setClient('setClient')
        setVendor('')
        setAgent('')
    }
    const handleVendor = () => {
        setClient('')
        setVendor('setVendor')
        setAgent('')
    }
    const handleAgent = () => {
        setClient('')
        setVendor('')
        setAgent('setAgent')
    }
    return (
        <div className='inventory-card'>
            {
                (!client && !vendor && !agency) ? <div className='mx-16 mt-24'>
                <div class="card flex bg-white justify-center shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Stakeholder Management</h2>
                        </div>
                        <div onClick={handleClient} className='flex mt-4'>
                            <p>Client</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleVendor} className='flex mt-4'>
                            <p>Vendor</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div onClick={handleAgent} className='flex mt-4'>
                            <p>Agency</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
            </div> : <div>
                {
                    client && <Client data={['Create', 'Edit/View/Delete', 'Register']} setClient={setClient} setVendor={setVendor} setAgent={setAgent}></Client>
                }
                {
                    vendor && <Vendor data={['Create', 'Edit/View/Delete', 'Register']} setClient={setClient} setVendor={setVendor} setAgent={setAgent}></Vendor>
                }
                {
                    agency && <Agency data={['Create', 'Edit/View/Delete', 'Register']} setClient={setClient} setVendor={setVendor} setAgent={setAgent}></Agency>
                }
            </div>
            }
        </div>
    );
};

export default StakeholderMGT;