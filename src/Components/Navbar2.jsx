"use client"
import Image from "next/image";
import home_img from "../../public/images/homebutton.png";
import customer from "../../public/images/people.png";
import products from "../../public/images/product.png";
import supplier from "../../public/images/supplier.png";
import order from "../../public/images/checklist.png";
import logout from "../../public/images/out.png";
import menu from "../../public/images/menu-bar.png";
import alarm from "../../public/images/alarm.png";
import delete1 from "../../public/images/x.png";
import { removeUser } from "@/app/redux/slice";
import user from '../../public/images/user.png'



import Link from "next/link";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "@/app/redux/slice";

const Navbar = () => {

    let [imgchange, setImgchange] = useState(false);
    
    


    // const dispatch=useDispatch();

    const changeImage = () => {


        setImgchange(!imgchange);
        // dispatch(addUser("hello"))
    };

    
    let[mobileToggle,setMobileToggle]=useState(true);

    const mobile_img_change=()=>{
        setMobileToggle(!mobileToggle)
    }



    return (
        <>


            <div className="w-fit overflow-hidden md:block hidden h-screen   text-white bg-[#212B36] py-6">
                <div className="flex flex-row justify-between px-4">
                    <Image src={user} width={35} className={`${imgchange?'hidden':'block'}`}></Image>

                    <h1 className={`text-3xl ${imgchange ? 'hidden' : 'block'}`}>Dash UI</h1>

                    <Image
                        src={imgchange ? menu : delete1}

                        height={30} 
                        className={`cursor-pointer `}


                        onClick={changeImage}
                    />
                </div>
                {!imgchange ?
                    (
                        <div className="">
                            <div className="mt-10">
                                <div className="flex gap-4 self-center px-4 py-2 rounded hover:bg-blue-500">
                                    <Image src={home_img} width={30}></Image>
                                    <p className="cursor-pointer"><Link href="/dashboard">Dashboard</Link> </p>
                                </div>
                                <div className="w-full mt-4 border-b-2 border-white text-white"></div>
                            </div>
                            <div className="mt-6">
                                <ul className="space-y-4 *:cursor-pointer *:flex *:gap-4 *:py-2 *:px-4  *:rounded">
                                    <li className="hover:bg-blue-500">
                                       
                                        <Image src={customer} width={30}></Image> <Link href='/dashboard/customer'>Customer</Link>
                                    </li>
                                    <li className="hover:bg-blue-500">
                                        <Image src={products} width={30}></Image><Link href='/dashboard/product'>Products</Link>
                                    </li>
                                    <li className="hover:bg-blue-500">
                                        <Image src={supplier} width={30}></Image><Link href='/dashboard/supplier'>Supplier</Link>
                                    </li>
                                    <li className="hover:bg-blue-500">
                                        <Image src={order} width={30}></Image>Order
                                    </li>
                                    <li className="hover:bg-blue-500">
                                        <Image src={logout} width={30}></Image><Link href={"/UserForm2"}>Logout</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>) : (
                        <ul className="space-y-8 mt-10 *:cursor-pointer *:flex *:gap-4 *:px-4">
                            <Link href="/dashboard"><Image src={home_img} width={30}></Image></Link>
                            <li>
                                <Link href="/dashboard/customer"><Image src={customer} width={30}></Image></Link>
                            </li>
                            <li>
                                <Link href="/dashboard/product"><Image src={products} width={30}></Image></Link>
                            </li>
                            <li>
                            <Link href="/dashboard/supplier"><Image src={supplier} width={30}></Image></Link>
                            </li>
                            <li>
                                <Image src={order} width={30}></Image>
                            </li>
                            <li>
                                <Image src={logout} width={30}></Image>
                            </li>

                        </ul>)
                }

            </div>

            <div className="md:overflow-hidden h-fit md:hidden max-md:fixed top-0 z-20 w-full block bg-[#212B36] text-white p-4">
                <div className="flex justify-between  ">
                    <h1 className="text-2xl">Inventory Application</h1>
                    <Image 
                    src={mobileToggle?menu:delete1} 
                    width={35}
                    onClick={mobile_img_change}
                    
                    ></Image>
                </div>

                <ul className={`*:cursor-pointer z-20 w-full h-fit left-0  bg-[#212B36]   p-4  ${mobileToggle?'hidden':'block'}`}>
                    <li>
                       <Link href='/dashboard' onClick={mobile_img_change}>Home</Link>
                    </li>
                    <li>
                       
                        <Link href='/dashboard/customer' onClick={mobile_img_change}>Customer</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/product'onClick={mobile_img_change}>Products</Link>
                    </li>
                    <li>
                        Supplier
                    </li>
                    <li>
                        Order
                    </li>
                    <li>
                        <Link href={"/UserForm2"}>Logout</Link>
                    </li>
                   
                   

                </ul>

            </div>

        </>
    );
};

export default Navbar;
