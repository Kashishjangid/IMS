"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
// import { demo, allfildes } from "./data";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import SearchComponent from '@/Components/SearchComponent';


import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
// import AddProductNew from "@/Components/AddProductNew";
import AddOutward from "@/Components/AddOutward";
import SearchItems from "@/Components/SearchItems";



const Page = () => {

   

    const fieldSet = new Set();

    // Iterate through each object in the data array and collect keys
    // outward.forEach((obj) => {
    //     Object.keys(obj).forEach((key) => {
    //         fieldSet.add(key); // Add each key to the Set (which automatically ensures uniqueness)
    //     });
    // });

    // Convert the Set back to an array of field names
    const fieldName = Array.from(fieldSet);

    // console.log(fieldName);


    const router = useRouter();
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState([]);

    const [editableItem, setEditableItem] = useState(null);
    const [Hidden, setHidden] = useState(true);

    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const[searchoption,setSearchOptionid]=useState([]);
    const[searchoptioncompanyname,setSearchOptioncompanyname]=useState([]);
    // const[searchoption,setSearchOption]=useState([]);
    // const[searchoption,setSearchOption]=useState([]);
    // const[searchoption,setSearchOption]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `http://localhost/ims/public/outward`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                        },

                    }
                );
                const jsonData = await res.json();
                if (res.ok) {
                    
                    setData(jsonData)
                    
                    const dataforsearch=jsonData.map((item)=>({
                        value:item.company_name.toString(),
                        label:item.company_name.toString(),
                    }))
                    setSearchOption(dataforsearch)
                    


                } else {

                    throw new Error("Some Error");
                }
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchData();
    }, []);
    




    const searchHandle = () => {
        alert("HEllo")
    }

    const handleEditClick = (index) => {
        setEditableItem(index);
    };

    const handleInputChange = (e, index) => {
        const newData = [...data];
        newData[index][e.target.name] = e.target.value;
        setUpdateData(newData[index]);

        setData(newData);
    };

    const dataobject = {
        brand_id: "1",
        serial_number: updatedata.Product_Serial_Number,
        model: updatedata.Product_Model,
        configuration: updatedata.Product_Configuration,
        ram: updatedata.Product_Ram,
        hdd: updatedata.Product_HDD,
    };

    const handleSaveClick = async (e, index) => {
        e.preventDefault();

        setEditableItem(null);



        try {
            const res = await fetch(
                `http://192.168.1.82/lumentest/public/product/${updatedata.Product_Id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataobject),
                }
            );
            if (res.ok) {

            } else {
                throw new Error("Some Error");
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    const handleCancelClick = () => {
        setEditableItem(null);

    };

    const [formData1, setFormData1] = useState({});
    const handleHidden = (e,index) => {
        // alert(data[index].id)
        setFormData1(data[index]);
        // console.log(index)
        // console.log(data[index])
        setHidden(false);
        setScrollFun(false);
    };

    // console.log(formData1);

    const handleInputChangeForm = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setFormData1({
            ...formData1,
            [name]: value,
        });

    };

    // const dataobjectForm = {
    //     brand_id: "1",
    //     serial_number: formData1.Product_Serial_Number,
    //     model: formData1.Product_Model,
    //     configuration: formData1.Product_Configuration,
    //     ram: formData1.Product_Ram,
    //     hdd: formData1.Product_HDD,
    // };

    const handleSaveEditForm = async (e) => {
        e.preventDefault();
        // console.log(formData1)
         alert(`http://localhost/ims/public/outward/${formData1.id}`)

        // try {
        //     const res = await fetch(
        //         `http://localhost/ims/public/outward/${formData1.id}`,
        //         {
        //             method: "PUT",
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
        //             },
        //             body: JSON.stringify(formData1),
        //         }
        //     );
        //     if (res.ok) {
        //         alert("Updates Successfully")
                
        //         setHidden(true);
        //     } else {
        //         throw new Error("Some Error");
        //     }
        // } catch (error) {
        //     console.log("Error", error);
        // }
    };

    const handleCancelEditForm = (e) => {
        e.preventDefault();
        setHidden(true);
        setScrollFun(true);
    };

    //for add product
    const [hiddenforproduct, setHiddenForProduct] = useState(true);
    const [hiddenaddoutward, setHiddenAddOutward] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedProductData, setSelectedProductData] = useState("");
    const [selectedProductDatafornewproduct, setSelectedProductDataForNewProduct] = useState("");
    const [existst, setExistsT] = useState(false)
    // console.log(existst)
    // console.log(selectedProductDatafornewproduct.length)
    const [productid, setProductId] = useState("");
    const [selectedProductBrand, setSelectedProductBrand] = useState("")
    const optionHandle = (selectedOptions) => {

        setSelectedProduct(selectedOptions);
        setSelectedProductData(selectedOptions.value)



        setProductId(selectedOptions.id)
        setSelectedProductBrand("")

    };

    const [handleformhidden, setHandleFormHidden] = useState(true)
    useEffect(() => {

        if (selectedProductData.length !== 0) {

            // const isMatch = dataforproduct.some((ele) => ele.name === selectedProductData);
            setHandleFormHidden(dataforproduct.some((ele) => ele.name === selectedProductData))
            // console.log(handleformhidden);
        }
    }, [selectedProductData]);







    const [selectedProductBrandData, setSelectedProductBrandData] = useState("");
    const optionHandleForProductBrand = (selectedOptions) => {

        setSelectedProductBrand(selectedOptions);
        // console.log(selectedOptions.value)
        setSelectedProductBrandData(selectedOptions.value)



    }
    useEffect(() => {
        // alert(selectedProductBrandData)
        // console.log(selectedProductBrandData)
    }, [selectedProductBrandData])

    // useEffect(() => {
    //     const existsInDataForProduct = dataforproduct.some(option => option === selectedProductData);
    //     setExistsT(existsInDataForProduct);
    //     // console.log(existst);

    // }, [selectedProductData]);


    const handleAddOutward = (e) => {
        e.preventDefault();
        setHiddenAddOutward(false);

        setScrollFun(false);
    };


    const [customfieldsdataactive, setCustomfieldsDataActive] = useState(false);
    const [scrollfun, setScrollFun] = useState(true);
    const handleAddProductsDiscard = (e) => {
        e.preventDefault();
        setHiddenAddOutward(true);
        setScrollFun(true);
        setSelectedProductData("");
        setSelectedProduct("");
        setSelectedProductBrand("");
        setCustomfieldsDataActive(true)
    };


    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };

    useEffect(() => {
        if (selectedOptions.length > 0) {
            setSelectedValues(selectedOptions.map(option => option.value));
        }
        else {
            setSelectedValues([])
        }
    }, [selectedOptions]);

    const [tooltip1, setTooltip1] = useState(false);
    const [tooltip2, setTooltip2] = useState(false);

    const handletooltip1 = (e, index) => {
        setTooltip1(index);
    };
    const handletooltip2 = (e, index) => {
        setTooltip2(index);
    };

    const [handleview, setHandleview] = useState(true)
    const handleCancelViewForm = (e) => {
        e.preventDefault();
        setHandleview(true);
        setScrollFun(true);
    };
    const [formData2, setFormData2] = useState({});
    const handleViewFun = (e, index) => {
        // console.log(data[index])

        setFormData2(data[index]);

        // console.log(fieldName)   
        // console.log(outward)


        setHandleview(false);
        setScrollFun(false);
    }

    const [formData, setFormData] = useState({});
    const handleInputChange2 = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

    };


    const [optionin, setOptionin] = useState(true)
    const [receivedData, setReceivedData] = useState('');
    //   const [handleFormHidden2, setHandleFormHidden2] = useState(false);


    const handleDataFromChild = (data) => {
        if (data) {
            setHiddenAddOutward(true);
            setScrollFun(true);
        }

    };


    return (
        <>
            <div
                className={`h-screen relative max-md:pt-20 max-md:pb-0    ${scrollfun ? "overflow-auto" : "overflow-hidden"
                    }  w-full`}
            >
                <div className="sm:flex sm:space-y-0 space-y-2  justify-between m-4">
                    <h1 className="text-3xl  font-semibold">Stock List</h1>
                   
                    <SearchItems searchElement={searchoption}  selectoptiondata={handleChange}  placeholderValue="Company Name" handlemultiple={false}/>
                    <button
                        className="  duration-700 border sm:py-2 sm:px-5 p-2  rounded bg-[#0E5AFE] text-white"
                        onClick={handleAddOutward}
                    >
                        Add Outward
                    </button>
                </div>
                {/* <div className="sm:flex sm:space-y-0 space-y-2  justify-between m-4"> */}
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2  m-4">
                    

                    <SearchComponent  options={searchoption} title="Id"/>
                    <SearchComponent  options={searchoption} title="Company Name"/>
                    <SearchComponent  options={searchoption} title="Address"/>
                    <SearchComponent  options={searchoption} title="Employee Code"/>
                    <SearchComponent  options={searchoption} title="Docket Number"/>
                    
                    
                </div>
                <div className="w-full overflow-auto md:pb-20">
                    <table className="w-full mt-2">
                        <thead>
                            <tr className="items-center *:p-2 bg-[#d5d7da]">
                                <th>Id</th>
                                <th>Company Name</th>
                                <th>Contact Person</th>
                                <th>Contact Number</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((element, index) => (
                                <tr
                                    className="!text-center border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100"
                                    key={index}
                                >
                                   
                                    <td>{element["id"]}</td>
                                    
                                    <td>{element["company_name"]}</td>
                                    <td>{element["challan_number"]}</td>
                                    <td>{element["contact_number"]}</td>

                                    <td>{element["delivery_location"]}</td>

                                    {/* Actions column */}
                                    <td className="  justify-center space-x-1    *:*:p-1  flex    flex-wrap items-center    *:*:rounded *:text-white">
                                        <div>
                                            {editableItem === index ? (
                                                <div className="flex gap-1 *:rounded  *:p-1 text-[10px]">
                                                    <button
                                                        className="hover:opacity-80  bg-[#184892]"
                                                        onClick={(e) => handleSaveClick(e, index)}
                                                    >
                                                        Save
                                                    </button>

                                                    <button
                                                        className="hover:opacity-80 bg-[#184892]"
                                                        onClick={handleCancelClick}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="relative *:p-1 *:rounded">
                                                    <div className={`absolute -top-6 overflow-hidden bg-[green] !px-4 -left-[50%] ${tooltip2 === index ? '' : 'hidden'}`}>
                                                        <h1 className="text-white  text-[10px]">View</h1>
                                                    </div>
                                                    <button className="hover:opacity-80 bg-[green] "
                                                        onClick={(e) => handleViewFun(e, index)}
                                                        onMouseEnter={(e) => handletooltip2(e, index)}
                                                        onMouseLeave={() => setTooltip2(null)}

                                                    >
                                                        <MdOutlineRemoveRedEye />
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative *:p-1 *:rounded">
                                                <div className={`absolute -top-7 overflow-hidden bg-[#184892] !px-4 -left-[50%] ${tooltip1 === index ? '' : 'hidden'}`}>
                                                    <h1 className="text-white text-[10px]">Edit</h1>
                                                </div>


                                                <button
                                                    className="hover:opacity-80 bg-[#184892]"
                                                    onClick={(e) => handleHidden(e, index)}
                                                    onMouseEnter={(e) => handletooltip1(e, index)}
                                                    onMouseLeave={() => setTooltip1(null)}
                                                >
                                                    <CiEdit />

                                                </button>
                                            </div>


                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                {/* for Edit section */}
                <div
                    className={`flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%]  justify-center md:pt-4 pt-24  pb-20  ${Hidden ? "hidden" : "flex"
                        } bg-black/30 backdrop-blur-[2px] overflow-auto `}
                >

                    <div className=" sm:w-[70%] w-full  sm:p-0 !h-fit    ">
                        <form action="" className="   rounded p-8    bg-white">
                            {/* <h1 className="text-4xl text-red-400 font-semibold">Edit</h1> */}
                            <div className=" flex justify-between items-center">


                                <h1 className="text-3xl text-red-400 font-semibold">Edit</h1>
                                <RxCross2 size={30} onClick={handleCancelEditForm} className="cursor-pointer" />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">



                                {Object.entries(formData1).map(([key, value], index) => (
                                    <div className="" key={index}>
                                        <span className="">{key.split('_')
                                            .map(word =>
                                                word.charAt(0).toUpperCase() + word.slice(1)
                                            )
                                            .join(' ')}</span>
                                        <input
                                            type="text"
                                            value={value} // Use the value corresponding to the key
                                            onChange={(e) => handleInputChangeForm(e, key)} // Optionally handle change
                                            name={key} // Use the key as the input name
                                            className="border-2 outline-red-500 border-[#1D4ED8] bg-[#F9FAFB] w-full p-2 rounded-xl"
                                        />
                                    </div>
                                ))}




                            </div>

                            <div className="flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 mt-5">
                                <button
                                    type="submit"
                                    className="bg-[#1D4ED8] hover:bg-blue-600   text-white"
                                    onClick={handleSaveEditForm}
                                >
                                    Submit
                                </button>
                                <button
                                    className="bg-red-400 hover:bg-red-500   text-white"
                                    onClick={handleCancelEditForm}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* For Viewing data */}

                <div
                    className={`flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%]  justify-center md:pt-4 pt-24  pb-20  ${handleview ? "hidden" : "flex"
                        } bg-black/30 backdrop-blur-[2px] overflow-auto `}
                >

                    <div className=" sm:w-[70%] w-full  sm:p-0 !h-fit    ">
                        <form action="" className="   rounded p-8    bg-white">
                            {/* <h1 className="text-4xl text-red-400 font-semibold">Supplier Details</h1> */}
                            <div className=" flex justify-between items-center">


                                <h1 className="text-3xl text-red-400 font-semibold">Supplier Details</h1>
                                <RxCross2 size={30} onClick={handleCancelViewForm} className="cursor-pointer" />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">


                                {Object.entries(formData2).map(([key, value], index) => (
                                    <div className="" key={index}>
                                       
                                        <span className="">{key
                                            .split('_')
                                            .map(word =>
                                                word.charAt(0).toUpperCase() + word.slice(1)
                                            )
                                            .join(' ')}</span>
                                        <div className="border-2 outline-red-500 border-[#1D4ED8] bg-[#F9FAFB] w-full p-2 rounded-xl">
                                            {value}
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className="flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 mt-5">
                                <button
                                    className="bg-red-400 hover:bg-red-500   text-white"
                                    onClick={handleCancelViewForm}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <AddOutward hiddenaddoutward={hiddenaddoutward} fieldName={fieldName} sendDataToParent={handleDataFromChild} />
            </div>


        </>
    );
};

export default Page;
