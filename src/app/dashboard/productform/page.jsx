"use client"
import { useState } from "react"

import { useRouter } from "next/navigation";

const page = () => {
    const router=useRouter();
    const [name, setName] = useState("");
    
    const [email, setMail] = useState("");
    const [contact, setContact] = useState("");
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        
    };



    return (

        <div className="bg-white w-[80%] float-right ">
            <div className='!w-[100%] bg-black/80 top-0 pt-4 fixed h-screen '>
                <form onSubmit={handleSubmit} action="" className=' w-[40%] p-6 border rounded ml-[12%]  border-black fixed bg-white'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Serial Number</label>
                        <input
                            onChange={(e)=>setName(e.target.value)}
                            type="text" value={name} className='border border-black rounded p-1' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Product Name</label>
                            
                        <input
                            onChange={(e)=>setMail(e.target.value)}
                            type="text" value={email} className='border border-black rounded p-1' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Configuration</label>
                        <input
                            onChange={(e)=>setContact(e.target.value)}
                            type="text" value={contact} className='border border-black rounded p-1' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Ram</label>
                        <input
                            onChange={(e)=>setContact(e.target.value)}
                            type="text" value={contact} className='border border-black rounded p-1' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">HDD</label>
                        <input
                            onChange={(e)=>setContact(e.target.value)}
                            type="text" value={contact} className='border border-black rounded p-1' />
                    </div>

                    <div className='flex *:border *:border-black *:rounded  justify-end gap-6 *:p-[5px] *:px-5 mt-5'>
                        <button type="submit" className='hover:bg-black bg-white hover:text-white'>Submit</button>
                        <button type="submit" className='hover:bg-black bg-white hover:text-white'>Cancel</button>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
