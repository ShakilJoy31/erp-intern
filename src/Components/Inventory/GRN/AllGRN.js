import React from 'react';

const AllGRN = ({ setCreateGRN }) => {
    const handleGetBack = () => {
        setCreateGRN('');
    }
    return (
        <div classNme='w-full ml-84 mt-24'>
            <div>
                <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-3xl left-arrow"></i>
            </div>
            <h1 className='mb-12 text-3xl'>GRN</h1>
            <div class="card flex justify-center box-shadow shadow-2xl bg-white">
                <div class="card-body">
                    <div className='flex justify-between'>
                        <div className='flex ml-12'>
                            <div className=''>
                                <p className='flex justify-end mt-6 mr-4 text-xl'>GRN No.</p>
                                <p className='flex justify-end mr-4 text-xl mt-14'>Purchase Order</p>
                                <p className='flex justify-end mt-12 mr-4 text-xl'>Invoice No</p>
                                <p className='flex justify-end mr-4 text-xl mt-14'>GRN Date</p>
                                <p className='flex justify-end mt-12 mr-4 text-xl'>Invoice Date</p>

                            </div>

                            <div className='grid'>
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />
                                <input type="text" placeholder="Type here" class="input my-4 border border-info hover:border-error" />

                            </div>
                        </div>



                        <div className='flex mt-12 mr-96'>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text mr-6">Remember me</span>
                                    <input type="checkbox" checked="checked" class="checkbox" />
                                </label>
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

export default AllGRN;


