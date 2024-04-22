"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';


const Page = () => {
    const router=useRouter();
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState([]);

    const [editableItem, setEditableItem] = useState(null);
    const [Hidden, setHidden] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://192.168.1.82/lumentest/public/product", { cache: 'no-store' });
                const jsonData = await res.json();
                setData(jsonData);
                // console.log("jitendra")
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [Hidden]);

    const handleEditClick = (index) => {
        setEditableItem(index);
    };

    const handleInputChange = (e, index) => {
        const newData = [...data];
        newData[index][e.target.name] = e.target.value;
        setUpdateData(newData[index])
       
        setData(newData);
    };

    const dataobject =
    {
        "brand_id":"1",
        "serial_number": updatedata.Product_Serial_Number,
        "model": updatedata.Product_Model,
        "configuration": updatedata.Product_Configuration,
        "ram": updatedata.Product_Ram,
        "hdd": updatedata.Product_HDD
    }


    const handleSaveClick = async (e, index) => {
        e.preventDefault();
        console.log(`http://192.168.1.82/lumentest/public/product/${updatedata.Product_Id}`)
        setEditableItem(null);

       
        // console.log(dataobject)
        

        try {

            const res = await fetch(`http://192.168.1.82/lumentest/public/product/${updatedata.Product_Id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataobject)
            });
            if (res.ok) {
                alert("Post success")
            }
            else {
                throw new Error("Some Error")
            }



        } catch (error) {

            console.log("Error", error)

        }
    }


    const handleCancelClick = () => {

        setEditableItem(null);
        // setHidden(true)


    }

    
    const [formData1, setFormData1] = useState({});
    const handleHidden = (e, index) => {
        
        setFormData1(data[index])
        setHidden(false)
        
    }

    
    const handleInputChangeForm = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        
        setFormData1({
            ...formData1,
            [name]: value
        });
        // console.log(formData1)
        // console.log(formData1.Product_Id)
        
    };

    const dataobjectForm =
    {
        "brand_id":"1",
        "serial_number": formData1.Product_Serial_Number,
        "model": formData1.Product_Model,
        "configuration": formData1.Product_Configuration,
        "ram": formData1.Product_Ram,
        "hdd": formData1.Product_HDD
    }


    const handleSaveEditForm = async (e) => {
        e.preventDefault();
      
        

        try {

            const res = await fetch(`http://192.168.1.82/lumentest/public/product/${formData1.Product_Id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataobjectForm)
            });
            if (res.ok) {
                router.refresh();
                setHidden(true)
                
                
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
            <div className='h-screen max-md:pt-20 max-md:pb-0 overflow-auto w-full'>

                {
                    Hidden ? (<>
                        <div className='flex justify-between m-4'>
                            <h1 className='text-3xl  font-semibold'>Product List   </h1>
                            {/* <h1 className='text-3xl  font-semibold'>Total: 120 {`${data.}`}   </h1> */}
                           
                            <button className='hover:opacity-80 border py-2 px-5 rounded-xl bg-[#0E5AFE] text-white'>
                                <Link href='./originalForm'>Add Products</Link>
                            </button>
                        </div>
                        <div className='w-full overflow-auto md:pb-20'>
                            <table className='w-full mt-2'>
                                <thead>
                                    <tr className="items-center *:p-2 bg-[#d5d7da]">
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
                                <tbody>
                                    {data.map((element, index) => (
                                        <tr className='!text-center border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100' key={index}>
                                            {Object.keys(element).map((key) => (
                                                <td key={key}>
                                                    {/* <div className='flex justify-center items-center space-x-2'> */}
                                                    {/* <div className={`${key == 'stock' ? 'block' : 'hidden'} ${element.stock > '80' ? 'bg-red-700' : 'bg-green-700'} rounded-3xl border h-4 w-4`}></div> */}
                                                    {/* <div onClick={() => handleEditClick(index)} className={`${key == 'Product_Brand' && index === editableItem ? 'text-blue-800 border rounded bg-blue-200 w-fit px-1 text-sm font-semibold mx-auto' : ''}`}> */}
                                                    <div onClick={() => handleEditClick(index)}>
                                                        {editableItem === index ? (
                                                            <input
                                                                type="text"
                                                                name={key}
                                                                value={element[key]}
                                                                onChange={(e) => handleInputChange(e, index)}
                                                                className='w-20'
                                                            />
                                                        ) : (
                                                            element[key]
                                                        )}
                                                    </div>
                                                    {/* </div> */}
                                                </td>
                                            ))}
                                            <td className='*:border space-x-3 *:p-1 *:rounded *:text-white'>
                                                {editableItem === index ? (
                                                    <>
                                                        <button className='hover:opacity-80 bg-[#184892]' onClick={(e) => handleSaveClick(e, index)}>
                                                            Save
                                                        </button>
                                                        {/* <button className='hover:opacity-80 bg-[#184892]' onClick={handleSaveClick1()}> */}
                                                        <button className='hover:opacity-80 bg-[#184892]' onClick={handleCancelClick} >
                                                            Cancel
                                                        </button>
                                                    </>
                                                ) : (
                                                    // <button className='hover:opacity-80 bg-[#184892]' onClick={() => handleEditClick(index)}>
                                                    // <Link href={`/dashboard/customer1/${index}`}>
                                                    // </Link>
                                                    <button className='hover:opacity-80 bg-[#184892]' onClick={(e) => handleHidden(e, index)} >
                                                        <CiEdit />
                                                    </button>
                                                )}
                                                <button className='hover:opacity-80 bg-[#8d2618]'><MdDelete /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>) : (<>

                       
                        <div className="flex-grow h-screen flex justify-center pt-4  bg-gray-200">
                            <div className=' sm:w-[70%] w-full p-2 sm:p-0 !h-fit    '>
                                <form action="" className='  p-8 rounded    bg-white'>
                                    <div className="grid md:grid-cols-2 md:gap-14 mt-4 space-y-6 md:space-y-0 ">

                                        <div className=" inline-block">
                                            <span className=" bg-white px-1">Serial Number</span>
                                            <input type="text" value={formData1.Product_Serial_Number}  onChange={(e) => handleInputChangeForm(e)} name='Product_Serial_Number' className='border outline-none w-full pt-4 border-black p-2 rounded' ></input>
                                        </div>
                                        <div className=" inline-block">
                                            <span className=" bg-white px-1">Model</span>
                                            <input type="text" value={formData1.Product_Model}  onChange={(e) => handleInputChangeForm(e)}  name="Product_Model" className='border outline-none w-full pt-4 border-black p-2 rounded' ></input>
                                        </div>
                                        <div className=" inline-block">
                                            <span className=" bg-white px-1">Configuration</span>
                                            <input type="text" value={formData1.Product_Configuration}  onChange={(e) => handleInputChangeForm(e)}  name='Product_Configuration' className='border outline-none w-full pt-4 border-black p-2 rounded' ></input>
                                        </div>
                                        <div className=" inline-block">
                                            <span className=" bg-white px-1">Ram</span>
                                            <input type="text" value={formData1.Product_Ram}  onChange={(e) => handleInputChangeForm(e)}  name="Product_Ram" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
                                        </div>
                                        <div className=" inline-block">
                                            <span className=" bg-white px-1">Hdd</span>
                                            <input type="text" value={formData1.Product_HDD}  onChange={(e) => handleInputChangeForm(e)}  name="Product_HDD" className='border outline-none w-full pt-4 border-black p-2 rounded' ></input>
                                        </div>




                                    </div>
                                    <div className='flex *:border *:border-black *:rounded  justify-end gap-4 *:p-2 *:px-5 mt-5'>

                                        <button type="submit" className='hover:bg-black bg-white hover:text-white' onClick={handleSaveEditForm}>
                                            Submit
                                        </button>
                                        <button type="submit" className='hover:bg-black bg-white hover:text-white' onClick={() => setHidden(true)}>
                                            Cancel
                                        </button>
                                      
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>)

                }
            </div>
        </>
    )
};

export default Page;



