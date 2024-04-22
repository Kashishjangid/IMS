"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const Signup = () => {
    const[toggle,setToggle]=useState(true);
  return (
    <div className='container mx-auto mt-10 flex flex-col w-[20%] gap-5'>
        
      <button className={`border ${toggle?"text-[red]":"text-[black]"}`} onClick={()=>setToggle(true)}>forgetPassword
      
      </button>
      <button className='border' onClick={()=>setToggle(false)}>fotgotPassMessage</button>
      {
        toggle?
        <div className="border container mx-auto w-fit text-center rounded space-y-8  mt-10  p-10 bg-[#555C7C]">
      <div className="flex justify-center">
        
      </div>
      <div>
        <h2 className={`text-4xl ${toggle?" text-[red]":"text-3xl"}`}>Forgot Password</h2>
        
        <p className="text-xl text-white"> You can reset your password here</p>
      </div>
      <form className="flex justify-center flex-col space-y-8">
        <div className="flex  justify-center items-center ">
          
          <input
            type="email"
            placeholder="email address"
            className="w-full  h-8 bg-white font-[1rem] text-black  outline-none p-[20px] rounded-r"
            required
          />
        </div>

        <Link href="./newPassword">
          <button className="bg-[#1059FF] w-full rounded text-[white] hover:scale-[1.01]  py-1.5 px-6">
            Reset Password
          </button>
        </Link>
      </form>
    </div>
    :
    <div className="border container mx-auto w-fit text-center  rounded   mt-10  p-10 bg-[#555C7C]">
      <div className="flex justify-center"></div>
      <div className="space-y-4 flex flex-col justify-center items-center">
        {/* <Image src={img} width={80}></Image> */}
        <h2 className="text-3xl text-white">Password Changed</h2>
        <p className="text-xl text-white">
         
          Your password has been changed successfully.
        </p>
      

      </div>
        <Link href="/">
          <button className="bg-[#1059FF] w-[50%] mt-10 rounded text-[white] hover:scale-[1.01]  py-1.5 px-6">
            Back to sign in
          </button>
        </Link>
      
    </div>
      }
      
      
    </div>
  )
}

export default Signup
