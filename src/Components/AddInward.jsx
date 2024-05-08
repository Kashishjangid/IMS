"use client"
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";

import SearchComponent from './SearchComponent';

import { form } from "./datas"

const AddOutward = ({ hiddenaddoutward, sendDataToParent }) => {



    const [options, setOptions] = useState([])

    const [productidfromchild, setProductidfromchild] = useState("")


    const handlesentproductid = (data) => {
        setProductidfromchild(data);
    }






    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await fetch(
                    "http://localhost/ims/public/outward",

                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                        },
                        cache: "no-store"
                    }
                );
                const jsonData = await res.json();
                if (res.ok) {
                    // setData(jsonData)
                    const productIds = jsonData.map(item => ({
                        value: item.product_serial_number.toString(),
                        label: item.product_serial_number.toString(),
                    }));
                    setOptions(productIds);

                }



            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const initialFormData = Object.fromEntries(form.map(field => [field.name, ""]));


    const [formData, setFormData] = useState([])
    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFormData({
            "product_serial_number": productidfromchild,

            ...formData,
            [name.toLowerCase().replace(/\s+/g, "_")]: value,
        })

    }
    const handleaddinward = async (e) => {
        e.preventDefault();
        // setFormData([])


        // console.log(formData);
        try {
            const res = await fetch("http://localhost/ims/public/inward",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                    },
                    body: JSON.stringify(formData),
                })
            if (res.ok) {
                if(res.status===200){

                    alert("Successfully")
                    console.log(res.status)
                    
                    sendDataToParent(true);
                    setFormData(initialFormData);
                    setProductidfromchild("");
                }
                else{
                    alert(res.success)
                }
            }
            else {
                alert("Please Fill Requird Fields")
                throw new Error("Some Erro")
            }
        }
        catch (error) {
            console.log("Error", error)
        }
    }


    const handleAddOutwardDetailstoggle = (e) => {
        e.preventDefault();
        sendDataToParent(true);
        setFormData(initialFormData);




    };








    return (
        <div>
            <div
                className={`absolute flex-grow   top-0 left-[50%] -translate-x-[50%]  ${hiddenaddoutward ? "hidden" : "flex"
                    }    bg-black/30 backdrop-blur-[2px] md:pt-4 pt-24 h-full max-md:pt-20 max-md:pb-0 overflow-auto w-full z-20`}
            >
                <div className="w-full sm:p-0 h-full flex flex-col items-center jus overflow-auto md:pb-20 z-20">
                    <div className="border bg-white p-4 rounded w-[80%] ">
                        <div className="space-y-2">
                            <div className="flex justify-between text-2xl">
                                <h1>Add Inward Details</h1>
                                <RxCross2 size={30}
                                    onClick={handleAddOutwardDetailstoggle}
                                    className="cursor-pointer" />
                            </div>


                        </div>


                        <form >
                            <div className=" space-y-4 " >


                                <div className="  md:gap-2 mt-4 space-y-6 md:space-y-0 ">
                                    <div className="space-y-2">
                                        <span>Product Id</span>

                                        <SearchComponent options={options} sentproductid={handlesentproductid} />





                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {form.map((field, fieldIndex) => (
                                        <div key={fieldIndex} className="md:gap-4 mt-4 space-y-6 md:space-y-0 overflow-hidden">
                                            <div className="space-y-2">
                                                <span>{field.label}</span>
                                                {field.type !== "select" ? (
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        placeholder={field.label}
                                                        value={formData[field.name]}
                                                        className="border-2 outline-[#1D4ED8] bg-[#F9FAFB] w-full p-2 rounded-xl"
                                                        onChange={handleInputChange2}
                                                    />
                                                ) : (
                                                    <select
                                                        className="border-2 outline-[#1D4ED8] bg-[#F9FAFB] p-2 w-full rounded-xl cursor-pointer"
                                                        name={field.name}
                                                        value={formData[field.name]}
                                                        onChange={handleInputChange2}
                                                    >
                                                        {field.option.map((option, optionIndex) => (
                                                            <option key={optionIndex} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>






                                <div className={`flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 `}>

                                    <button className="bg-[#1D4ED8] hover:bg-blue-600   text-white" onClick={handleaddinward}>
                                        Add Inward
                                    </button>
                                    <button
                                        className="bg-red-400 hover:bg-red-500   text-white"
                                        onClick={handleAddOutwardDetailstoggle}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>

                        </form>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddOutward

