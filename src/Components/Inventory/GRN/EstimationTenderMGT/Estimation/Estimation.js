import React, { useState } from 'react';
import rightArrow from './../../../../icons/Vector (8).svg'; 
import CreateItemAnalysis from './ItemAnalysis/CreateItemAnalysis';
import CreateRateAnalysis from './RateAnalysis/CreateRateAnalysis';
import CreatedTenderRateAnalysis from './TenderEstimation/CreatedTenderRateAnalysis';


const Estimation = ({setTender, setBoq, setEstimation, setBilling, data}) => {
    const [rateAnalysis, setRateAnalysis] = useState(''); 
    const [tenderEstimation, setTenderEstimation] = useState(''); 
    const [itemAnalysis, setItemAnalysis] = useState(''); 
    const handleGetBack = () =>{
        setTender('');
        setBoq('');
        setEstimation('');
        setBilling('');
    }
    const handleCreate = (singleData) =>{
        if(singleData === 'Rate analysis Master data'){
            setRateAnalysis(singleData);
            setTenderEstimation('');
            setItemAnalysis('');
        }
        else if(singleData === 'Tender Estimation'){
            setRateAnalysis('');
            setTenderEstimation(singleData);
            setItemAnalysis('');
        }
        else{
            setRateAnalysis('');
            setTenderEstimation('');
            setItemAnalysis(singleData);
        }
    }
    return (
        <div className='mt-24 ml-16'>
            {
                (!rateAnalysis && !tenderEstimation && !itemAnalysis) ? <div>
                <div>
                    <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-3xl left-arrow"></i>
                    </div>
            <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                
                    <div>
                    <div className='flex items-center mt-4'>
                    <div className='GRN'></div>
                    <h2 class="card-title">Estimation</h2>
                </div>
                    </div>
                    
                    {
                        data.map(singleData => <div>
                            <div onClick={()=>handleCreate(singleData)} className='flex forHover'>
                                <p className='my-2'>{singleData}</p>
                                <img src={rightArrow} alt="" />
                            </div>
                            <hr />
                        </div>)
                    }
                </div>
            </div>
                </div>  : <div>
                    {
                        rateAnalysis && <CreateRateAnalysis setRateAnalysis={setRateAnalysis} setTenderEstimation={setTenderEstimation} setItemAnalysis={setItemAnalysis} data={['Create', 'View', 'Register']}></CreateRateAnalysis>
                    }
                    {
                        tenderEstimation && <CreatedTenderRateAnalysis setRateAnalysis={setRateAnalysis} setTenderEstimation={setTenderEstimation} setItemAnalysis={setItemAnalysis} data={['Create', 'Edit/View/Delete', 'Register']}></CreatedTenderRateAnalysis>
                    }
                    {
                        itemAnalysis && <CreateItemAnalysis setRateAnalysis={setRateAnalysis} setTenderEstimation={setTenderEstimation} setItemAnalysis={setItemAnalysis} data={['Create', 'Edit/View/Delete']}></CreateItemAnalysis>
                    }
                </div>
            }
        </div>
    );
};

export default Estimation;