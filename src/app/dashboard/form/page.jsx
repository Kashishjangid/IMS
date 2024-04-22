// "use client"
// import { useState } from "react"

// const page = () => {



//     const [productName,setProductName]=useState("");

//     const [serialNumber,setserialNumber]=useState("");
//     const [configuration,setConfiguration]=useState("");
//     const [ram,setRam]=useState("")
//     const [hdd,setHdd]=useState("")
//     const [id,setId]=useState("")



//     const handleSubmit =async(e)=>{
//         e.preventDefault();

//         console.log( productName, serialNumber, configuration, ram, hdd, id)

//         if(!productName || !serialNumber){
//             alert("Plz fill the required filled")
//             return;
//         }
//         try {
//             const res=fetch("POST API URL",{
//                 method:"POST",
//                 headers:{
//                     "Content-Type":"application/json"
//                 },
//                 body:JSON.stringify(
//                     {
//                         productName, serialNumber,configuration, ram, hdd, id 
//                     }
//                 )
//             });
//             if(res.ok){
//                 alert("Successs")
//             }
//             else{
//                 throw new Error("Some Error") 
//             }
//         } catch (error) {
//             console.log("Error is", error)
//         }

//     } 
//     return (
//         <>
//             <div className="flex-grow h-screen flex justify-center pt-4  bg-blue-300">
//                 <div className=' sm:w-[70%] w-full p-2 sm:p-0 !h-fit    '>
//                     <form onSubmit={handleSubmit} action="" className='  p-8 rounded    bg-white'>
//                         <div className="grid md:grid-cols-2 md:gap-14 mt-4 space-y-6 md:space-y-0 ">
//                             <div className=" inline-block">
//                                 <span className=" bg-white px-1">Product Name</span>
//                                 <input type="tex className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
//                             </div>
//                             <div className=" inline-block">
//                                 <span className=" bg-white px-1">Serial Number</span>
//                                 <input type="text" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
//                             </div>
//                             <div className=" inline-block">
//                                 <span className=" bg-white px-1">Configuration</span>
//                                 <input type="text" n className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
//                             </div>
//                             <div className=" inline-block">
//                                 <span className=" bg-white px-1">Ram</span>
//                                 <input type="text" lassName='border outline-none w-full pt-4 border-black p-2 rounded'></input>
//                             </div>

//                         </div>
//                         <div className='flex *:border *:border-black *:rounded  justify-end gap-4 *:p-2 *:px-5 mt-5'>
//                             <button type="submit" className='hover:bg-black bg-white hover:text-white'>Submit</button>



//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default page









"use client"
import { useState } from "react"
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";


const page = () => {

    const router =useRouter();


    const [formData, setFormData] = useState({
        serial_number: "",
        model: "",
        configuration: "",
        ram: "",
        brand_id: "",
        hdd:""
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {

            const res = await fetch("http://192.168.1.82/lumentest/public/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                // alert("Post success")
                router.push("/dashboard/customer1")
            }
            else {
                throw new Error("Some Error")
            }
            


        } catch (error) {

            console.log("Error", error)

        }
    }



    return (
        <>
            <div className="flex-grow h-screen flex justify-center pt-4  bg-gray-200">
                <div className=' sm:w-[70%] w-full p-2 sm:p-0 !h-fit    '>
                    <form onSubmit={handleSubmit} action="" className='  p-8 rounded    bg-white'>
                        <div className="grid md:grid-cols-2 md:gap-14 mt-4 space-y-6 md:space-y-0 ">
                            <div className=" inline-block">
                                <span className=" bg-white px-1">Brand Id</span>
                                <input type="text" name="brand_id" className='border outline-none w-full pt-4 border-black p-2 rounded' onChange={handleChange}></input>
                            </div>
                            <div className=" inline-block">
                                <span className=" bg-white px-1">Serial Number</span>
                                <input type="text" name='serial_number' className='border outline-none w-full pt-4 border-black p-2 rounded' onChange={handleChange}></input>
                            </div>
                            <div className=" inline-block">
                                <span className=" bg-white px-1">Model</span>
                                <input type="text" name="model" className='border outline-none w-full pt-4 border-black p-2 rounded' onChange={handleChange}></input>
                            </div>
                            <div className=" inline-block">
                                <span className=" bg-white px-1">Configuration</span>
                                <input type="text" name='configuration' className='border outline-none w-full pt-4 border-black p-2 rounded' onChange={handleChange}></input>
                            </div>
                            <div className=" inline-block">
                                <span className=" bg-white px-1">Ram</span>
                                <input type="text" name="ram" className='border outline-none w-full pt-4 border-black p-2 rounded' onChange={handleChange}></input>
                            </div>
                            <div className=" inline-block">
                                <span className=" bg-white px-1">Hdd</span>
                                <input type="text" name="hdd" className='border outline-none w-full pt-4 border-black p-2 rounded' onChange={handleChange}></input>
                            </div>



                        </div>
                        <div className='flex *:border *:border-black *:rounded  justify-end gap-4 *:p-2 *:px-5 mt-5'>
                          
                            <button type="submit" className='hover:bg-black bg-white hover:text-white'>
                                Submit
                                </button>
                                <Link href="/dashboard/customer1">
                            <button type="submit" className='hover:bg-black bg-white hover:text-white'>
                                Cancel
                                </button>
                                </Link>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default page
