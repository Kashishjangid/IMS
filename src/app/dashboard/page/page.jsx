import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import Page from '../product/page';

const fun = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=f286864b7d2b4b9ab78e5dbd643b1548");
    const data = await response.json();
    return data.articles;
}



const page = async () => {
    const data = await fun();
    // console.log(data)


    return (
        <>
           <div className=' h-screen max-md:pt-20 max-md:pb-0 overflow-auto w-full  '>


            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 p-2 md:pb-20  ">

                       {
                           data.map((element,index)=>(
                               <div className='h-fit'>
                    <div className=" space-y-4 bg-[#BE85F8] rounded-lg h-full p-5  text-white">
                       
                            <div className='space-y-2 '  key={index}>

                                <p className="text-2xl font-bold ">{element.author}</p>
                                <p className="text-xl font-semibold">{element.title}</p>
                                <p className="text-xl font-semibold">{element.publishedAt}</p>



                            </div>
                    </div>
                </div>
                        )
                        
                        )
                    }



            </div>

                    </div>
        </>
    )
}

export default page
