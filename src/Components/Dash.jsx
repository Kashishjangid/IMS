import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
// import Page from '../product/page';

const page = () => {

    const data = [
        {
            'img': 'AiOutlineStock',
            'heading': 'Stock Total',
            'amount': '$150000',
            'increase': 'Increase by 60%'


        },
        {
            'img': 'FaDatabase',
            'heading': 'Stock Total',
            'amount': '$150000',
            'increase': 'Increase by 60%'


        },
        {
            'img': 'FaFlag',
            'heading': 'Stock Total',
            'amount': '$150000',
            'increase': 'Increase by 60%'


        },

    ]

    return (
        <>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 p-2 md:pb-20  ">

                <div className='h-fit'>
                    <div className=" space-y-4 bg-[#BE85F8] rounded-lg h-full p-5  text-white">
                        <AiOutlineStock size={60} className='' />


                        <div className='space-y-2 '>

                            <p className="text-2xl font-bold ">Stock Total</p>
                            <p className="text-xl font-semibold">500</p>
                            <p className="text-xl font-semibold">Increased by 60%</p>



                        </div>
                    </div>
                </div>
                <div className='h-fit'>
                    <div className=" space-y-4 bg-[#6B89E7] rounded-lg h-full p-5  text-white">
                        <FaDatabase size={60} className='' />


                        <div className='space-y-2 '>

                            <p className="text-2xl font-bold ">In Ward Total</p>
                            <p className="text-xl font-semibold">300</p>
                            <p className="text-xl font-semibold">Increased by 40%</p>



                        </div>
                    </div>
                </div>
                <div className='h-fit'>
                    <div className=" space-y-4 bg-[#FF9E8D] rounded-lg h-full p-5  text-white">
                        <FaFlag size={60} className='' />


                        <div className='space-y-2 '>

                            <p className="text-2xl font-bold ">Out Ward Total</p>
                            <p className="text-xl font-semibold">200</p>
                            <p className="text-xl font-semibold">Increased by 50%</p>



                        </div>
                    </div>
                </div>


            </div>
            {/* <Page/> */}
        </>
    )
}

export default page
