import React from 'react';
import './InventoryCard.css'
import rightArrow from './../../../icons/Vector (8).svg';

const Inventory = () => {
    return (
        <div>
            <div className='mx-16 mt-24'>
                <div class="card flex inventory-card justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">Inventory</h2>
                        </div>
                        <div className='flex mt-4'>
                            <p>GRN</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>GIN</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Transfer Note</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Stock Statement</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />
                        <div className='flex mt-4'>
                            <p>Agewise Analysis of Stock</p>
                            <img src={rightArrow} alt="" />
                        </div>
                        <hr />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;