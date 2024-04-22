// "use state"



// import SignIn from '@/Components/SignIn';

// import DelButton from './DelButton';
// import Link from 'next/link';
// import { MdDeleteForever } from "react-icons/md";







// async function data_fetch() {
//     const response = await fetch("http://192.168.1.82/lumen/public/customer");
//     const data = await response.json();
//     return data;


// }

// const page = async ({navbarWidth}) => {
//     const data1 = await data_fetch();
//     // alert(navbarWidth)
//     console.log(navbarWidth)
//     return (
//         <>
//             <div className="bg-white  flex-grow y-4 space-y-0 overflow-y-auto h-full">
//                 <div className='space-y-6'>
//                     <h2 className='text-3xl font-bold'>Users</h2>
//                     <div className='flex justify-between'>

//                         <input type="search" className='border p-1 rounded  outline-none ' placeholder='Search' />
//                         <button className='hover:opacity-80 border  p-1 rounded bg-[#0E5AFE] text-white ' ><Link href='./customerform'>Add</Link> </button>
//                     </div>
//                     <table className='w-full border'>
//                         <thead >
//                             <tr className="items-center border-2 ">



//                                 <th className=''>Id</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Contact</th>
//                                 <th>Created At</th>
//                                 <th>Action</th>
//                             </tr>

//                         </thead>
//                         <tbody >
//                             {data1
//                             // .filter((element,index)=>index<=3)
//                             .map((element, index) => (
//                                 <tr className='!text-center border-1 *:border-b ' key={index}>
//                                     {Object.keys(element).map((key) => (

//                                         <td key={key}>{element[key]}</td>



//                                     ))}
//                                     {/* <DelButton index={element.id} /> */}






//                                 </tr>
//                             ))}

//                         </tbody>




//                     </table>
//                 </div>

//             </div>



//         </>
//     )
// }

// export default page




// "use state"

import Link from 'next/link';
// import data from './data';
//import { CiEdit } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";



const fun=async()=>{
        const response=await fetch("http://192.168.1.82/lumentest/public/product",  { cache: 'no-store' } );
        const data=await response.json();
        // console.log(data)
        return data
}

// fun();




const page = async () => {

    const data=await fun();
    



    return (
        <>
            {/* <div className="bg-white overflow-y-auto    space-y-4 flex-grow  h-full"> */}
            <div className=' h-screen max-md:pt-20 max-md:pb-0    overflow-auto w-full  '>

                {/* <h2 className='text-3xl font-bold'>Products</h2> */}
                <div className='flex justify-end'>

                    {/* <input type="search" className='border p-1 rounded  outline-none ' placeholder='Search' /> */}
                    <button className='hover:opacity-80 border  py-1 px-3 rounded bg-[#0E5AFE] text-white ' ><Link href='./form'>Add Products</Link> </button>
                </div>




                <div className='w-full overflow-auto  md:pb-20  '>
                    {/* <table className='w-full odd:tableodd even:tableeven'> */}
                    <table className='w-full mt-2  '>
                        <thead>

                            <tr className="items-center  *:p-2 bg-[#d5d7da]">
                                <th>Id</th>
                                
                                <th>Brand Name</th>
                                <th>Serial Name</th>
                                <th>Model Number</th>
                                <th>Configuration</th>
                                <th>Ram</th>
                                <th>HDD</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody className=''>
                            {data

                                .map((element, index) => (
                                    <tr className='!text-center border-1 *:border-b *:p-4  hover:bg-[#d5d7da] hover:cursor-pointer ' key={index}>
                                        {Object.keys(element).map((key) => (
                                            // <td key={key} className={`${key%2===0 ?'bg-red-500':'bg-red-100'}`}>{element[key]}</td>
                                            // alert(element)
                                            // console.log(element.stock>80)

                                            <td key={key}>
                                                <div className='flex justify-center items-center space-x-2 '>
                                                    

                                                    <div className={`${key=='stock'?'block':'hidden'} ${element.stock>'80'?'bg-red-700':'bg-green-700'} rounded-3xl border h-4 w-4`}>
                                                    </div>
                                                    <div className={`${key == 'Product_Brand' ? 'text-blue-800  border rounded bg-blue-200 w-fit px-1 text-sm font-semibold mx-auto ' : ''}`}>{element[key]}
                                                    </div>
                                                </div>
                                            </td>
                                        ))}

                                        <td className='*:border space-x-3 *:p-1 *:rounded  *:text-white ' >
                                            <button className='hover:opacity-80 bg-[#184892]'> <Link href='./customerform'><CiEdit /></Link> </button>
                                            <button className='hover:opacity-80 bg-[#8d2618]'><MdDelete /></button>
                                        </td>

                                    </tr>
                                ))}
                        </tbody>

                    </table>

                </div>

            </div>

        </>
    )
}

export default page
