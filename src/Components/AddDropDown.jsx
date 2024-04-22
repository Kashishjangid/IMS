"use client"
import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import Link from 'next/link';

const AddDropDown = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [fieldnamedata, setFieldNameData] = useState("");

    const fieldnamedatafun = (e) => {
        setFieldNameData(e.target.value)
    }

    // console.log(fieldnamedata)



    const fun2 = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!selectedOptions.includes(e.target.value)) {
                setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, e.target.value]);
            }
        }
    }

    const removeFields = (itemToRemove) => {
        const updatedFields = selectedOptions.filter(item => itemToRemove !== item);
        setSelectedOptions(updatedFields);
    };

    const handleSubmit = () => {
        const formData = {
            title: fieldnamedata,
            option: true,
            options: [
                { title: "Please select RAM type" },
                ...selectedOptions.map(option => ({ title: option }))
            ]
        };
        console.log(formData);
    };

    const handleCancel = () => {
        setSelectedOptions([]);
    };

    return (
        // <div className="h-screen relative max-md:pt-20 max-md:pb-0 w-full">
        <div className="">
            <div className="flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%] flex justify-center md:pt-4 pt-24 pb-20 bg-black/30 backdrop-blur-[2px] overflow-auto">
                <div className="sm:w-[70%] w-full p-4 !h-fit rounded bg-white space-y-6">
                    <div className="space-y-2">
                        <p>Enter Field Name</p>
                        <div className="">
                            <input
                                type="text"
                                value={fieldnamedata}
                                onChange={fieldnamedatafun}
                                placeholder="Enter Field Name"
                                className="border-2 outline-[#1D4ED8] w-full bg-[#F9FAFB] p-2 rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p>Enter options</p>
                        <div className="">
                            <input
                                type="text"
                                placeholder="Enter option"
                                onKeyDown={fun2}
                                className="border-2 outline-[#1D4ED8] w-full bg-[#F9FAFB] p-2 rounded-xl"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                            {selectedOptions.map((ele, index) => (
                                <div className="relative" key={index}>
                                    <div className="bg-red-400 hover:cursor-pointer hover:bg-red-500 text-white rounded-xl p-2 flex items-center justify-center overflow-x-auto" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                                        {ele}
                                    </div>
                                    <div className="absolute top-1 right-1">
                                        <RxCrossCircled size={12} className="text-white scale-150 cursor-pointer" onClick={() => removeFields(ele)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex  *:rounded-xl justify-end gap-4  *:py-2  *:px-5">
                        <button className="bg-[#1D4ED8] hover:bg-blue-600 rounded-xl py-2 px-5 text-white" onClick={handleSubmit}>
                            Create Form
                        </button>
                        <Link href="/dashboard/product" className='*:rounded-xl  gap-4  *:py-2  *:px-5'>
                            <button className="bg-red-400 hover:bg-red-500 text-white" onClick={handleCancel}>
                                Cancel
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddDropDown;
