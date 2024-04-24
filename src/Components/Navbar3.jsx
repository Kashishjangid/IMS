"use client"
import React, { useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa6";
import { TbPackageExport } from "react-icons/tb";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";





import Link from 'next/link';

const Navbar3 = () => {

  let [imgchange, setImgchange] = useState(false);
  const changeImage = () => {
    setImgchange(!imgchange);

  };


  let [mobileToggle, setMobileToggle] = useState(true);


  const [open, setOpen] = useState(true);
  const [openright, setOpenright] = useState(true);


  
  const Menus = [

    { title: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
    { title: "Customer", icon: <FaRegIdCard />, path: "/dashboard/customer" },
    { title: "Product", icon: <MdProductionQuantityLimits />, path: "/dashboard/product" },
    { title: "Supplier", icon: <TbPackageExport />, path: "/dashboard/supplier" },
    { title: "Order", icon: <MdOutlineShoppingCartCheckout />, path: "/dashboard" },
    {
      title: "Logout", icon: <TbLogout />
      , path: "/dashboard"
    },
  ];

  const rightSideBar = [
    { title: "My Profile" },
    { title: "Setting" },
    { title: "Logout" }
  ]

  return (
    <>
      <div className='max-md:fixed top-0 h-20 z-[99] w-full'>
        <div className="w-fit  md:block hidden h-screen     bg-[#184892] ">

          <div className={` px-5 py-8    ${open ? 'w-72' : 'w-20'} duration-300 relative z-40`}>
            <BsArrowLeftShort className={`bg-white text-[#212B36] text-3xl rounded-full absolute -right-3 top-9 border border-[#212B36] cursor-pointer ${!open && 'rotate-180'} duration-300`} onClick={() => setOpen(!open)} />
            <div className='inline-flex gap-4'>

              <FaRegUserCircle className={`text-4xl ${!open && 'rotate-[360deg]'} duration-100 text-white`} />
              <h1 className={`text-white text-xl ${open ? 'block' : 'hidden'} self-center duration-300`}>Dash Board</h1>
            </div>
            <div className={`flex items-center rounded-md mt-6 gap-2 bg-white  py-2 ${open ? 'px-4' : 'px-2.5'} `}>
              <FaSearch />
              <input type='text' className={`outline-none ${open ? 'block' : 'hidden'}`} placeholder='Search'></input>
            </div>

            <ul className='pt-4 '>
              {Menus.map((menu, index) => (
                <>
                  <Link key={index} href={menu.path} className='flex hover:bg-gray-500 rounded-md cursor-pointer'>
                    <li className={`text-white  flex gap-2  text-2xl items-center  ${open ? 'p-2' : 'p-1.5'} `}>
                      <span className='text-3xl'>{menu.icon}</span>
                      <span className={`${open ? 'block' : 'hidden'} duration-500`}>{menu.title}</span>

                    </li>
                  </Link>
                </>
              ))}
            </ul>


          </div>
        </div>


        <div className='bg-[#212B36] w-full z-20 items-center h-fit py-4 relative   text-white'>
          <div className='flex md:hidden p-2 justify-between'>

            {
              mobileToggle ? <IoMenu
                size={35}
                onClick={() => setMobileToggle(!mobileToggle)}
              /> : <RxCross2
                size={35}
                onClick={() => setMobileToggle(!mobileToggle)}
              />
            }


            <BsThreeDotsVertical
              size={35}
              onClick={() => { setOpenright(!openright) }}

            />
          </div>

          <div className={`absolute top-[100%] right-0  z-50 space-y-4 h-fit border-none flex flex-col text-white  bg-[#212B36] ${openright ? 'w-0 p-0 rounded-none' : 'w-fit  p-4 rounded-bl-2xl'} duration-300 overflow-hidden `}>

            {rightSideBar.map((data, index) => (

              <span key={index} className='text-2xl '>{data.title}</span>
            ))}

          </div>


        </div>





        <div className={`border bg-[#184892] h-screen   text-white z-20  border-none  md:hidden ${mobileToggle ? 'w-0' : 'w-[60%]'} duration-300 overflow-hidden  `}>
          <ul className=' mt-6 '>

            {Menus.map((menu, index) => (
              <Link href={menu.path} className='*:px-4 *:py-2 ' onClick={() => setMobileToggle(!mobileToggle)} key={index}>
               
                <li className='hover:bg-slate-600 text-2xl '>{menu.title}</li>
              </Link>
            ))}
          </ul>

        </div>



      </div>




    </>
  )
}

export default Navbar3
