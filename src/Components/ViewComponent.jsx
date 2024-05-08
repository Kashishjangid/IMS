"use client"
import React from 'react'
import { RxCross2 } from "react-icons/rx";

const ViewComponent = ({handleview,formData2,Handleview,ScrollFun,title}) => {
    const handleCancelViewForm = (e) => {
        e.preventDefault();
        Handleview(true);
        ScrollFun(true);
    };
  return (
    <div>
       <div
                className={`flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%]  justify-center md:pt-4 pt-24  pb-20  ${handleview ? "hidden" : "flex"
                    } bg-black/30 backdrop-blur-[2px] overflow-auto `}
            >

                <div className=" sm:w-[70%] w-full  sm:p-0 !h-fit    ">
                    <form action="" className="   rounded p-8    bg-white">
                        {/* <h1 className="text-4xl text-red-400 font-semibold">Supplier Details</h1> */}
                        <div className=" flex justify-between items-center">


                            <h1 className="text-3xl text-red-400 font-semibold">{title}</h1>
                            <RxCross2 size={30} onClick={handleCancelViewForm} className="cursor-pointer" />
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">


                            {Object.entries(formData2).map(([key, value], index) => (
                                <div className="" key={index}>

                                    <span className="">{key
                                        .split('_')
                                        .map(word =>
                                            word.charAt(0).toUpperCase() + word.slice(1)
                                        )
                                        .join(' ')}</span>
                                    <div className="border-2 outline-red-500 cursor-not-allowed border-[#1D4ED8] bg-[#F9FAFB] w-full p-2 rounded-xl">
                                        {value}
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 mt-5">
                            <button
                                className="bg-red-400 hover:bg-red-500   text-white"
                                onClick={handleCancelViewForm}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default ViewComponent
