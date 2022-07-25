import React from 'react';

const AllTransferNote = ({setTransfer}) => {
    const handleGetBack = () =>{
        setTransfer(''); 
    }
    return (
        <div classNme='w-full ml-84 mt-8'>
            <div>
                <i onClick={handleGetBack} class="fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
            </div>
            <h1 className='mb-12 text-3xl mb-10'>Transfer Note</h1>
            <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                    <div className='flex justify-between'>
                        <div className='flex ml-12'>
                            <div className=''>
                                <p className='flex justify-end mt-6 mr-4 text-xl'>Transfer Id</p>
                                <p className='flex justify-end mr-4 text-xl mt-14'>Transfer from</p>
                                <p className='flex justify-end mt-8 mr-4 text-xl'>Transfer to</p>
                                <p className='flex justify-end mr-4 text-xl mt-14'>Transfer Date</p>
                                

                            </div>

                            <div className='grid'>
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                

                            </div>
                        </div>

                    </div>

                        <div className='flex justify-between'>
                            <div>
                                <p>Store Item</p>
                                <input type="text" placeholder="Type here" class="input mr-4 w-48 border border-info hover:border-error" />
                            </div>
                            <div>
                                <p>Unit Price</p>
                                <input type="text" placeholder="Type here" class="input mr-4 w-48 border border-info hover:border-error" />
                            </div>
                            <div>
                                <p>Quantity</p>
                                <input type="text" placeholder="Type here" class="input mr-4 w-48 border border-info hover:border-error" />
                            </div>
                            <div>
                                <p>Quantity Received</p>
                                <input type="text" placeholder="Type here" class="input mr-4 w-48 border border-info hover:border-error" />
                            </div>
                            <div>
                                <p>Discount</p>
                                <input type="text" placeholder="Type here" class="input mr-4 w-48 border border-info hover:border-error" />
                            </div>
                            <div>
                                <p>Tax %</p>
                                <input type="text" placeholder="Type here" class="input mr-4 w-48 border border-info hover:border-error" />
                            </div>
                        </div>
                            <div className='flex justify-end'>
                                <div>
                                <p>Tax %</p>
                                <input type="text" placeholder="Type here" class="input mr-4 w-48 border border-info hover:border-error" />
                                </div>
                            </div>

                    <div className='flex justify-end'>
                        <div>
                        <button class="create-button mr-8 btn text-white action-button">Delete</button>
                        <button class="create-button mr-8 btn text-white action-button">Print</button>
                        <button class="create-button btn text-white action-button">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AllTransferNote;