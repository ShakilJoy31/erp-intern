import React, { useState } from 'react';
import Agency from './Agency/Agency';
import Client from './Client/Client';
import Vendor from './Vendor/Vendor';
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
                (!client && !vendor && !agency) ? <div className='mx-16 mt-8 '>
                <div class="card box-shadow flex bg-white justify-center shadow-2xl">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Stakeholder Management</h2>
                        </div>
                        <div>
                        <div onClick={handleClient} className='flex forHover'>
                            <p className='py-4'>Client</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleVendor} className='flex forHover'>
                            <p className='py-4'>Vendor</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        <div onClick={handleAgent} className='flex forHover'>
                            <p className='py-4'>Agency</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr className='w-screen line'></hr>
                        </div>
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