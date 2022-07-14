import React from 'react';
import rightArrow from './../../icons/Vector (8).svg';

const GRN = ({ data }) => {
    return (
        <div>
            <div className='mx-16 mt-24'>
                <div class="card flex justify-center shadow-2xl bg-white">
                    <div class="card-body">
                        <div className='flex items-center'>
                            <div className='GRN'></div>
                            <h2 class="card-title">GRN</h2>
                        </div>
                        {
                            data.map(singleData => <div>
                                <div className='flex my-2'>
                                    <p>{singleData}</p>
                                    <img src={rightArrow} alt="" />
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GRN;