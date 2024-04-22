// "use client"
// import React from 'react'
// import { useSearchParams } from 'next/navigation'
// import img1 from '../../../../public/images/laptops.jpg'
// import img2 from '../../../../public/images/graphs.jpg'
// import img3 from '../../../../public/images/graphs1.jpg'
// import Image from 'next/image'
// const page = () => {
//     const searchParams = useSearchParams();
//     // console.log(searchParams.get("id"))
//     const id = searchParams.get('id');
//     const data = [
//         {
//             img: img1,
//             headline: 'Heading 1',
//             description: "Description 1 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

//         },
//         {
//             img: img2,
//             headline: 'Heading 2',
//             description: "Description 2 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

//         },
//         {
//             img: img3,
//             headline: 'Heading 3',
//             description: "Description 3 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

//         },
//         {
//             img: img1,
//             headline: 'Heading 4',
//             description: "Description 4 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

//         },
//         {
//             img: img2,
//             headline: 'Heading 5',
//             description: "Description 5 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

//         },
//         {
//             img: img3,
//             headline: 'Heading 6',
//             description: "Description 6 :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus, qui odio sequi dicta minus commodi nam aut illum mollitia, distinctio labore ipsum itaque tempore maiores fugit esse quaerat eius voluptatibus earum ratione! Veritatis, dicta quidem vitae magnam vero natus perferendis temporibus labore at minus voluptatem deserunt, debitis repudiandae dolore.",

//         }

//     ]
//     return (
//         <>
//             <div className=' h-screen max-md:pt-20 max-md:pb-0    overflow-auto w-full  '>
//                 {/* {searchParams.get("id")?searchParams.get("id"):null} */}

//                 <div className=" space-y-4 bg-gray-400  w-full  mx-auto md:pb-20">
//                     {data.map((element, index) => (
//                         <>
//                             {
//                                 index == id ? (
//                                     <>
//                                     <div className='flex flex-wrap  *:p-8  w-full'>
//                                         <div className=' w-1/2'>

//                                         <Image src={element.img}  className='w-full   rounded-lg '></Image>
//                                         </div>
//                                         <div className=' space-y-2 w-1/2 flex flex-col !pt-10 items-center'>

//                                             <p className="text-3xl font-bold ">{element.headline}</p>
//                                             <p className="">{element.description}</p>

//                                         </div>
                                        
//                                     </div>
//                                     </>
//                                 ) : ""

//                             }

//                         </>
//                     ))}

//                 </div>
//             </div>
//         </>
//     )
// }

// export default page
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ headline, img ,description,index}) => {

    // const headline1=decodeURIComponent(headline);
    
    return (
        <div className='h-fit'>
            <div className=" space-y-4 bg-gray-400 rounded-lg h-full ">
                <Image src={img}  className='w-full  h-[300px] rounded-tl-lg rounded-tr-lg'/>
                <div className='p-3 space-y-2'>

                <p className="text-2xl font-bold ">{headline}</p>
                <p className="text-xl font-semibold">{description}</p>
                <Link 
                href={`/dashboard/subcard/${index}`} >
                <button className='bg-[#184892] text-white rounded-lg px-3  py-1.5'>Read more</button>
                </Link>
                
                </div>
            </div>
        </div>
    )
}

export default Card

