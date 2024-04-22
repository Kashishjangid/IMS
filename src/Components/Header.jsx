import React from 'react'
import { FaRegUserCircle} from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
const Header = () => {
  return (
    <>
    <div className='md:block hidden  relative '>

   
    <div className='py-3    px-4 bg-[#8d2618]   flex justify-between'>
        <div>
            <input type="text" className='outline-none rounded-md px-2 py-1 text-xl' placeholder='Search' />
        </div>
        <div className='flex text-white gap-2'>
            
            <FaRegUserCircle size={35}/>
            <div className='leading-none cursor-pointer'>

            <h2 className='font-bold'>John</h2>
            <h3 className='font-thin'>Super Admin</h3>
            </div>
            <TbMathGreater  className='rotate-90 self-center cursor-pointer'/>
        </div>

        
    </div>
    </div>
    </>
  )
}

export default Header
