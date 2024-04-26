"use client";
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";


import Select from "react-select";
import AddSupplier from "@/Components/AddSupplier";


// const options = [
//     { value: "Dell", label: "Dell" },
//     { value: "Asus", label: "Asus" },
//     { value: "4 GB", label: "4 GB" },
//     { value: "8 GB", label: "8 GB" },
//     { value: "12 GB", label: "12 GB" },
//     { value: "16 GB", label: "16 GB" },
//     { value: "i7", label: "i7" },
// ];

const fieldName = ["ID", "Company Name" , "Contact No.", "GST", "Address","Action"];

const Page = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState([]);

    const [editableItem, setEditableItem] = useState(null);
    const [Hidden, setHidden] = useState(true);

    const [selectedValues, setSelectedValues] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [supplierData, setSupplierData]=useState([
        {
          "ID": 456,
          "Company Name": "Stokes Inc",
          "Contact No.": "(527) 134-1234",
          "GST": "3JF95GQ",
          "Address": "1234 Oak Street",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 789,
          "Company Name": "Roberts LLC",
          "Contact No.": "(905) 456-7890",
          "GST": "8N2TG4H",
          "Address": "5678 Maple Avenue",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 234,
          "Company Name": "Smith and Sons",
          "Contact No.": "(234) 567-8901",
          "GST": "5RYF9T2",
          "Address": "910 Pine Street",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 901,
          "Company Name": "Johnson Enterprises",
          "Contact No.": "(789) 012-3456",
          "GST": "7J4G8NT",
          "Address": "123 Elm Avenue",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 567,
          "Company Name": "Williams Ltd",
          "Contact No.": "(345) 678-9012",
          "GST": "9TH2R5F",
          "Address": "456 Cedar Road",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 123,
          "Company Name": "Brown and Co.",
          "Contact No.": "(890) 123-4567",
          "GST": "2GQ3F95",
          "Address": "789 Oak Lane",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 678,
          "Company Name": "Anderson Group",
          "Contact No.": "(012) 345-6789",
          "GST": "4H8N2TG",
          "Address": "901 Maple Drive",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 345,
          "Company Name": "Miller Corp",
          "Contact No.": "(678) 901-2345",
          "GST": "T25RYF9",
          "Address": "234 Pine Lane",
          "Action": "View/Edit/Delete"
        },
        {
          "ID": 890,
          "Company Name": "Wilson Industries",
          "Contact No.": "(123) 456-7890",
          "GST": "NT7J4G8",
          "Address": "567 Elm Street",
          "Action": "View/Edit/Delete"
        },
        // {
        //   "ID": 012,
        //   "Company Name": "Taylor Holdings",
        //   "Contact No.": "(456) 789-0123",
        //   "GST": "5F2GQ3F",
        //   "Address": "890 Cedar Avenue",
        //   "Action": "View/Edit/Delete"
        // }
      ]
      
    )

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "http://localhost/ims/public/product", //change that with the api of getting ll suppliers
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzEzOTM4MTYyLCJleHAiOjE3MTQwMjQ1NjIsIm5iZiI6MTcxMzkzODE2MiwianRpIjoiNlR6ZXFOWW1UUFBVMVZ0diIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.nR2N8zXTZtxMQKODeI_XZCdh41Pz-RK3V308N6Y7R6s"
                        },
                        cache: "no-store"
                    }
                );
                const jsonData = await res.json();

                if (selectedValues.length === 0) {
                    setData(jsonData)
                }
                else {
                    setData(
                        jsonData.filter(item => {
                            return selectedValues.every(filterItem => {
                                return Object.values(item).some(val => {
                                    if (typeof val === 'string') {
                                        return val.toLowerCase().includes(filterItem.toLowerCase());
                                    }
                                    return false;
                                });
                            });
                        })
                    );
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [Hidden, selectedValues]);
    


  

    const handleEditClick = (index) => {
        setEditableItem(index);
    };

    const handleInputChange = (e, index) => {
        const newData = [...data];
        newData[index][e.target.name] = e.target.value;
        setUpdateData(newData[index]);

        setData(newData);
    };

    // const dataobject = {
    //     brand_id: "1",
    //     serial_number: updatedata.Product_Serial_Number,
    //     model: updatedata.Product_Model,
    //     configuration: updatedata.Product_Configuration,
    //     ram: updatedata.Product_Ram,
    //     hdd: updatedata.Product_HDD,
    // };

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
    const handleHidden = (e, index) => {
        setFormData1(supplierData[index]);
        setHidden(false);
        setScrollFun(false);
    };

    const handleInputChangeForm = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setFormData1((prevFormData)=>({
            ...prevFormData,
            [name]: value,
        }));

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

        try {
            const res = await fetch(
                `http://192.168.1.82/lumentest/public/product/${formData1.Product_Id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataobjectForm),
                }
            );
            if (res.ok) {
                router.refresh();
                setHidden(true);
            } else {
                throw new Error("Some Error");
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    const handleCancelEditForm = (e) => {
        e.preventDefault();
        setHidden(true);
        setScrollFun(true);
    };

    const [handleview, setHandleview] = useState(true)
    const handleCancelViewForm = (e) => {
        e.preventDefault();
        setHandleview(true);
        setScrollFun(true);
    };

    const handleViewFun= (e)=>{
        setHandleview(false);
        setScrollFun(false);
    }

    //for add product
    // const [hiddenforproduct, setHiddenForProduct] = useState(true);
    const [hiddenaddproduct, setHiddenAddProduct] = useState(true);
    // const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedProductData, setSelectedProductData] = useState("");
    // const [selectedProductDatafornewproduct, setSelectedProductDataForNewProduct] = useState("");
    const [existst, setExistsT] = useState(false)
    // console.log(existst)
    // console.log(selectedProductDatafornewproduct.length)
    const [productid, setProductId] = useState("");
   
    useEffect(() => {

        if (selectedProductData.length !== 0) {

            // const isMatch = dataforproduct.some((ele) => ele.name === selectedProductData);
            setHandleFormHidden(dataforproduct.some((ele) => ele.name === selectedProductData))
            // console.log(handleformhidden);
        }
    }, [selectedProductData]);
   
    const handleAddProducts = (e) => {
        e.preventDefault();
        setHiddenAddProduct(false);

        setScrollFun(false);
    };


    const [scrollfun, setScrollFun] = useState(true);
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleChange = (selectedOption) => {
        if (selectedOption) {
          setSelectedCompany(selectedOption.value);
        } else {
          setSelectedCompany(null);
        }
      };



    const handleDataFromChild = (data) => {
        if(data)
        {
                  setHiddenAddProduct(true);
                  setScrollFun(true);
        }
        
      };

    const [tooltip1, setTooltip1] = useState(false);
    const [tooltip2, setTooltip2] = useState(false);
    const [tooltip3, setTooltip3] = useState(false);


    const handletooltip1 = (e, index) => {
        setTooltip1(index);
    };
    const handletooltip2 = (e, index) => {
        setTooltip2(index);
    };
    const handletooltip3 = (e, index) => {
        setTooltip3(index);
    };



    return (
        <>
            <div className={`h-screen relative max-md:pt-20 max-md:pb-0    ${scrollfun ? "overflow-auto" : "overflow-hidden"}  w-full`}>
                <div className="sm:flex sm:space-y-0 space-y-2  justify-between m-4">
                    <h1 className="text-3xl  font-semibold">Suppliers</h1>
                    <div className=" sm:flex sm:space-x-2 space-x-0 sm:space-y-0 space-y-2">
                        <div className="flex  items-center">
                        <Select
                            className="min-w-[300px] rounded-3xl"
                            options={supplierData.map((option) => ({ value: option["Company Name"], label: option["Company Name"] }))}
                            onChange={handleChange}
                            placeholder="Search by Company Name"
                            isClearable
                        />
                            {/* <CiSearch className=" text-[#0E5AFE] border border-[#CCCCCC] border-l-0 hover:cursor-pointer rounded-tr rounded-br p-1 h-[38px]" size={33} onClick={searchHandle} /> */}
                        </div>
                    </div>
                    <button
                        className="  duration-700 border sm:py-2 sm:px-5 p-2  rounded bg-[#0E5AFE] text-white"
                        onClick={handleAddProducts}>
                        Add Supplier Details
                    </button>
                </div>
                <div className="w-full overflow-auto md:pb-20">
                    <table className="w-full mt-2">
                        <thead>
                            <tr className="items-center *:p-2 bg-[#d5d7da]">
                                {fieldName.map((ele,index)=>(
                                    <th>{ele}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {supplierData.map((element, index) => (
                                <tr className="!text-center border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100"
                                    key={index}>
                                    {Object.keys(element)
                                    .filter((ele, index) => index < fieldName.length-1)
                                    .map((key) => (
                                        <td key={key}>
                                            <div onClick={() => handleEditClick(index)}>
                                                {editableItem === index ? (
                                                    <input
                                                        type="text"
                                                        name={key}
                                                        value={element[key]}
                                                        // value={value}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                        className="w-20"
                                                    />
                                                ) : (
                                                    element[key]
                                                )}
                                            </div>
                                        </td>
                                    ))}
                            
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
                                                        <div className={`absolute -top-10 overflow-hidden bg-[#184892] !px-4 -left-[50%] ${tooltip1 === index ? '' : 'hidden'}`}>
                                                            <h1 className="text-white">Edit</h1>
                                                        </div>
                                                        <button className="hover:opacity-80 bg-[#8d2618] "
                                                    onClick={(e) => handleViewFun(e, index)}
                                                    onMouseEnter={(e) => handletooltip2(e, index)}
                                                    onMouseLeave={() => setTooltip2(null)}

                                                >
                                                    <MdOutlineRemoveRedEye />
                                                </button>
                                                    </div>
                                                    )}
                                                </div>

                                            <div className="relative ">
                                                <div className={`absolute -top-10 overflow-hidden bg-green-500 !px-4 -left-[50%] ${tooltip2 === index ? '' : 'hidden'}`}>
                                                    <h1 className="text-white">View</h1>
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
                                            <div className="relative">
                                                <div className={`absolute -top-10 overflow-hidden bg-red-500 !px-2 -left-[50%] ${tooltip3 === index ? '' : 'hidden'}`}>
                                                    <h1 className="text-white">Delete</h1>
                                                </div>

                                                <button className="hover:opacity-80 bg-[#184892]"
                                                    onClick={(e) => handleDeletefun(e, index)}
                                                    onMouseEnter={(e) => handletooltip3(e, index)}
                                                    onMouseLeave={() => setTooltip3(null)}
                                                >
                                                    <MdDelete />
                                                </button>
                                            </div>


                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div
                    className={`flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%]  justify-center md:pt-4 pt-24  pb-20  ${Hidden ? "hidden" : "flex"
                        } bg-black/30 backdrop-blur-[2px] overflow-auto `}
                >

                    <div className=" sm:w-[70%] w-full  sm:p-0 !h-fit    ">
                        <form action="" className="   rounded p-8    bg-white">
                            <h1 className="text-4xl text-red-400 font-semibold">Edit</h1>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">
                        
                            {fieldName
                                // .filter((ele,index) => ele.length <= 3)
                                .filter((ele,index)=>index<fieldName.length-1)
                                .map((ele, index) => (
                                    <div key={index} className=" ">
                                    <span className=" ">{ele}</span>
                                    <input
                                        type="text"
                                        value={formData1[ele]}
                                        onChange={handleInputChangeForm}
                                        name={ele}
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
                {/* for view */}
                <div
                    className={`flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%]  justify-center md:pt-4 pt-24  pb-20  ${handleview ? "hidden" : "flex"
                        } bg-black/30 backdrop-blur-[2px] overflow-auto `}
                >

                    <div className=" sm:w-[70%] w-full  sm:p-0 !h-fit    ">
                        <form action="" className="   rounded p-8    bg-white">
                            <h1 className="text-4xl text-red-400 font-semibold">Supplier Details</h1>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">
                        
                            {fieldName
                                // .filter((ele,index) => ele.length <= 3)
                                .filter((ele,index)=>index<fieldName.length-1)
                                .map((ele, index) => (
                                    <div key={index} className=" ">
                                    <span className=" ">{ele}</span>
                                    <div className="border-2  bg-white w-full p-2 rounded-xl">
                                    {formData1[ele]}
                                    </div>
                                    {/* <input
                                        type="text"
                                        value={formData1[ele]}
                                        // onChange={handleInputChangeForm}
                                        name={ele}
                                        className="border-2  bg-white w-full p-2 rounded-xl"
                                     /> */}
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

                {/* for adding supplier */}
                
                <AddSupplier hiddenaddproduct={hiddenaddproduct} fieldName={fieldName} sendDataToParent={handleDataFromChild}/>
            </div>
        </>
    );
};

export default Page;
