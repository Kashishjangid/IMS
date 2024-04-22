
"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import img1 from '../../../../../public/images/laptops.jpg'

import img2 from '../../../../../public/images/graphs.jpg'
import img3 from '../../../../../public/images/graphs1.jpg'
import Image from 'next/image'
const page = ({params}) => {
     const id=params.id;
     
    const data = [
        {
            id:1,
            img: img1,
            headline: 'Heading1',
            description: "Description 1 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

        },
        {
            id:2,
            img: img2,
            headline: 'Heading2',
            description: "Description 2 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

        },
        { 
            id:3,
            img: img3,
            headline: 'Heading3',
            description: "Description 3 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

        },
        {
            id:4,
            img: img1,
            headline: 'Heading4',
            description: "Description 4 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

        },
        {
            id:5,
            img: img2,
            headline: 'Heading5',
            description: "Description 5 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

        },
        {
            id:6,
            img: img3,
            headline: 'Heading6',
            description: "Description 6 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

        }

    ]
    return (
        <>
            <div className=' h-screen max-md:pt-20 max-md:pb-0    overflow-auto w-full  '>
                {/* {searchParams.get("id")?searchParams.get("id"):null} */}

                <div className=" space-y-4 bg-gray-400  w-full  mx-auto md:pb-20">
                    {data.map((element, index) => (
                        <>
                            {
                              element.id == id ? (
                                    <>
                                    <div className='flex flex-wrap  *:p-8  w-full'>
                                        <div className=' w-1/2'>

                                        <Image src={element.img}  className='w-full   rounded-lg '></Image>
                                        </div>
                                        <div className=' space-y-2 w-1/2 flex flex-col !pt-10 items-center'>

                                            <p className="text-3xl font-bold ">{element.headline}</p>
                                            <p className="">{element.description}</p>

                                        </div>
                                        
                                    </div>
                                    </>
                                ) : ""

                            }

                        </>
                    ))}

                </div>
            </div>
        </>
    )
}

export default page
  


