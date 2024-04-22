"use client"
import React, { useState } from 'react';
import { data,demo } from './data';
// import demo from './demo';

const Page = () => {
    const [hiddenforproduct, setHiddenForProduct] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState('');

    const optionHandle = (e) => {
        setSelectedProduct(e.target.value);
        setHiddenForProduct(e.target.value === 'Select type of products');
    };

    return (
        <>
            <div className='h-screen max-md:pt-20 max-md:pb-0 overflow-auto w-full'>
                <div className='w-full sm:p-0 min-h-full flex flex-col items-center md:pb-20  bg-gray-200'>
                    <div className='border bg-white p-4 min-h-full rounded w-[90%]'>
                        <div className='space-y-2'>
                            <div className='flex justify-start text-2xl'>
                                <h1>Add New Product</h1>
                            </div>
                            <div className=''>
                                <h2>Product Type</h2>
                                <select className='border rounded-xl  bg-[#F9FAFB] outline-[#1D4ED8] w-full p-2' onChange={optionHandle} >
                                    {data.map((ele, index) => (
                                        <option value={ele} key={index}>{ele}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <form className=' ' hidden={hiddenforproduct}>
                            {demo.filter(item => item.title === selectedProduct).map((demoItem, index) => (
                                <div key={index} className='grid grid-cols-2 gap-4'>
                                    {demoItem.fildes.map((field, fieldIndex) => (
                                        <div className="  md:gap-4 mt-4 space-y-6 md:space-y-0 overflow-hidden">

                                            <div key={fieldIndex} className='space-y-2'>
                                                <span>{field.title}</span>
                                                {field.option ? (
                                                    <div>
                                                        <select className='border-2 outline-[#1D4ED8] bg-[#F9FAFB]  p-2 w-full rounded-xl cursor-pointer'>
                                                            {field.options.map((option, optionIndex) => (
                                                                <option key={optionIndex} >{option.title}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                ) : (
                                                    <input type="text" name={field.title} placeholder={field.title} className='border-2  outline-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl' />
                                                )}
                                            </div>
                                            
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </form>
                        <div className='flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 mt-5'>
                            <button className='bg-[#1D4ED8] hover:bg-blue-600   text-white'>
                                Add product
                            </button>
                            <button className='bg-red-400 hover:bg-red-500   text-white'>
                                Discard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
