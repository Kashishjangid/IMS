import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import Link from 'next/link';
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
               <Link href="/dashboard/inward">
               <div className='h-fit cursor-pointer'>
                    <div className=" space-y-4 bg-[#6B89E7] rounded-lg h-full p-5  text-white">
                        <FaDatabase size={60} className='' />


                        <div className='space-y-2 '>

                            <p className="text-2xl font-bold ">In Ward Total</p>
                            <p className="text-xl font-semibold">300</p>
                            <p className="text-xl font-semibold">Increased by 40%</p>



                        </div>
                    </div>
                </div>
               </Link>
                <Link href='/dashboard/outward'>
                <div className='h-fit cursor-pointer'>
                    <div className=" space-y-4 bg-[#FF9E8D] rounded-lg h-full p-5  text-white">
                        <FaFlag size={60} className='' />


                        <div className='space-y-2 '>

                            <p className="text-2xl font-bold ">Out Ward Total</p>
                            <p className="text-xl font-semibold">200</p>
                            <p className="text-xl font-semibold">Increased by 50%</p>



                        </div>
                    </div>
                </div>
                </Link>


            </div>
            {/* <Page/> */}
        </>
    )
}

export default page



// import React from 'react';
// import { AiOutlineStock } from "react-icons/ai";
// import { FaDatabase, FaFlag } from "react-icons/fa";
// import Link from 'next/link';

// const Page = () => {
//     const data = [
//         {
//             'img': AiOutlineStock,
//             'heading': 'Stock Total',
//             'amount': '$150000',
//             'increase': 'Increase by 60%'
//         },
//         {
//             'img': FaDatabase,
//             'heading': 'In Ward Total',
//             'amount': '$150000',
//             'increase': 'Increase by 40%'
//         },
//         {
//             'img': FaFlag,
//             'heading': 'Out Ward Total',
//             'amount': '$150000',
//             'increase': 'Increase by 50%'
//         },
//     ];

//     return (
//         <>
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-2 md:pb-20">
//                 {data.map((item, index) => (
//                     <div key={index} className='h-fit'>
//                         <Link href='/dashboard/product'>
//                             <div className={`space-y-4 bg-[${item.color}] rounded-lg h-full p-5 text-white cursor-pointer`}>
//                                 <item.img size={60} className='' />
//                                 <div className='space-y-2'>
//                                     <p className="text-2xl font-bold">{item.heading}</p>
//                                     <p className="text-xl font-semibold">{item.amount}</p>
//                                     <p className="text-xl font-semibold">{item.increase}</p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Page;
