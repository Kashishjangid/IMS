"use client"
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const AddSupplier = ({hiddenaddproduct,sendDataToParent,fieldName}) => {
    
    const [inputData, setInputData] = useState(Array(fieldName.length).fill(''));


    const handleInputChange = (event, index) => {
        const newInputData = [...inputData];
        newInputData[index] = event.target.value;
        setInputData(newInputData);
    };
    const fun=(e)=>{
        e.preventDefault();
        const formData = {};
        fieldName.forEach((field, index) => {
            formData[field] = inputData[index];
        });
        // setInputData("")
        console.log(formData);
        setInputData(Array(fieldName.length).fill(''))
        
        
    }
   

    const handleAddCustomerDetailstoggle = (e) => {
        e.preventDefault();  
        sendDataToParent(true);
    };

    return (
        <div>
            <div
                className={`absolute flex-grow   top-0 left-[50%] -translate-x-[50%]  ${hiddenaddproduct ? "hidden" : "flex"
                    }    bg-black/30 backdrop-blur-[2px] md:pt-4 pt-24 h-full max-md:pt-20 max-md:pb-0 overflow-auto w-full`}
            >
                <div className="w-full sm:p-0 h-full flex flex-col items-center overflow-auto md:pb-20">
                    <div className="border bg-white p-4 rounded w-[90%] ">
                        <div className="space-y-2">
                            <div className="flex justify-between text-2xl">
                                <h1>Add Customer Details</h1>
                                <RxCross2 size={30} 
                                onClick={handleAddCustomerDetailstoggle} 
                                className="cursor-pointer" />
                            </div>


                        </div>

                        <form className=" space-y-4 ">
                            <div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {fieldName
                                    .filter((ele,index)=>index<fieldName.length-1)
                                    .map((ele, index) => (
                                        <div className="  md:gap-4 mt-4 space-y-6 md:space-y-0 overflow-hidden">
                                            <div className="space-y-2">
                                                <span>{ele}</span>

                                                <input
                                                    type="text"
                                                    value={inputData[index]}
                                                    onChange={(event) => handleInputChange(event, index)}


                                                    className="border-2  outline-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"

                                                />


                                            </div>
                                        </div>

                                    ))}
                                </div>

                            </div>
                            <div className={`flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 `}>
                                <button className="bg-[#1D4ED8] hover:bg-blue-600   text-white" onClick={(e)=>fun(e)}>
                                    Add Customer
                                </button>
                                <button
                                    className="bg-red-400 hover:bg-red-500   text-white"
                                    onClick={handleAddCustomerDetailstoggle}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddSupplier
