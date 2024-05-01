"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { demo, allfildes } from "./data";
import { MdOutlineRemoveRedEye } from "react-icons/md";


import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
// import AddProductNew from "@/Components/AddProductNew";
import AddOutward from "@/Components/AddOutward";

const options = [
    { value: "Dell", label: "Dell" },
    { value: "Asus", label: "Asus" },
    { value: "4 GB", label: "4 GB" },
    { value: "8 GB", label: "8 GB" },
    { value: "12 GB", label: "12 GB" },
    { value: "16 GB", label: "16 GB" },
    { value: "i7", label: "i7" },
];

const Page = () => {

    const [outward, setOutward] = useState([
        {
            "ID": 1,
            "Company Name": "ABC Inc.",
            "Ch. No.": "CH001",
            "Description": "Business laptop",
            "Laptop Model": "Dell Latitude",
            "Laptop Serial No.": ["SN001", "SN002", "SN003"],
            "GCV No.": "GCV123",
            "Contact Person": "John Doe",
            "Contact Number": "(123) 456-7890",
            "Delivery Address": "123 Main St, Anytown",
            "Laptop Start Date": "2024-04-01",
            "EMPLOYEE ID": "E001",
            "Configuration": "Standard",
            "RAM": "8GB",
            "HDD": "512GB SSD",
            "Qty.": 1,
            "NEW Req or Against Replace": "New Requirement",
            "Old laptop serial number If against Replacement": "",
            "If against Replacement than Return Status": "",
            "Employee Code If Req.": "EMP001",
            "DOCKET NO": "DOC001"
        },
        {
            "ID": 2,
            "Company Name": "XYZ Corporation",
            "Ch. No.": "CH002",
            "Description": "Developer laptop",
            "Laptop Model": "HP Spectre",
            "Laptop Serial No.": ["SN011", "SN012", "SN013"],
            "GCV No.": "GCV456",
            "Contact Person": "Jane Smith",
            "Contact Number": "(234) 567-8901",
            "Delivery Address": "456 Elm St, Somewhere",
            "Laptop Start Date": "2024-04-05",
            "EMPLOYEE ID": "E002",
            "Configuration": "Developer Edition",
            "RAM": "16GB",
            "HDD": "1TB SSD",
            "Qty.": 1,
            "NEW Req or Against Replace": "New Requirement",
            "Old laptop serial number If against Replacement": "",
            "If against Replacement than Return Status": "",
            "Employee Code If Req.": "EMP002",
            "DOCKET NO": "DOC002"
        },
        {
            "ID": 3,
            "Company Name": "Tech Solutions Ltd.",
            "Ch. No.": "CH003",
            "Description": "Executive laptop",
            "Laptop Model": "Lenovo ThinkPad",
            "Laptop Serial No.": ["SN021", "SN022", "SN023"],
            "GCV No.": "GCV789",
            "Contact Person": "Michael Johnson",
            "Contact Number": "(345) 678-9012",
            "Delivery Address": "789 Oak St, Techville",
            "Laptop Start Date": "2024-04-10",
            "EMPLOYEE ID": "E003",
            "Configuration": "Executive Package",
            "RAM": "16GB",
            "HDD": "1TB SSD",
            "Qty.": 1,
            "NEW Req or Against Replace": "New Requirement",
            "Old laptop serial number If against Replacement": "",
            "If against Replacement than Return Status": "",
            "Employee Code If Req.": "EMP003",
            "DOCKET NO": "DOC003"
        },
        {
            "ID": 4,
            "Company Name": "Global Innovations Inc.",
            "Ch. No.": "CH004",
            "Description": "High-performance laptop",
            "Laptop Model": "Apple MacBook Pro",
            "Laptop Serial No.": ["SN031", "SN032", "SN033"],
            "GCV No.": "GCV234",
            "Contact Person": "Emily Rogers",
            "Contact Number": "(456) 789-0123",
            "Delivery Address": "567 Maple Ave, Innovations City",
            "Laptop Start Date": "2024-04-15",
            "EMPLOYEE ID": "E004",
            "Configuration": "High Performance Edition",
            "RAM": "32GB",
            "HDD": "2TB SSD",
            "Qty.": 1,
            "NEW Req or Against Replace": "New Requirement",
            "Old laptop serial number If against Replacement": "",
            "If against Replacement than Return Status": "",
            "Employee Code If Req.": "EMP004",
            "DOCKET NO": "DOC004"
        },
        {
            "ID": 5,
            "Company Name": "Visionary Enterprises",
            "Ch. No.": "CH005",
            "Description": "Designer laptop",
            "Laptop Model": "Microsoft Surface Book",
            "Laptop Serial No.": ["SN041", "SN042", "SN043"],
            "GCV No.": "GCV567",
            "Contact Person": "David Anderson",
            "Contact Number": "(567) 890-1234",
            "Delivery Address": "910 Cedar St, Vision City",
            "Laptop Start Date": "2024-04-20",
            "EMPLOYEE ID": "E005",
            "Configuration": "Designer Package",
            "RAM": "16GB",
            "HDD": "1TB SSD",
            "Qty.": 1,
            "NEW Req or Against Replace": "New Requirement",
            "Old laptop serial number If against Replacement": "",
            "If against Replacement than Return Status": "",
            "Employee Code If Req.": "EMP005",
            "DOCKET NO": "DOC005"
        }
    ])

    const fieldSet = new Set();

    // Iterate through each object in the data array and collect keys
    outward.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
            fieldSet.add(key); // Add each key to the Set (which automatically ensures uniqueness)
        });
    });

    // Convert the Set back to an array of field names
    const fieldName = Array.from(fieldSet);

    // console.log(fieldName);


    const router = useRouter();
    // const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState([]);

    const [editableItem, setEditableItem] = useState(null);
    const [Hidden, setHidden] = useState(true);

    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {

    //             const res = await fetch(
    //                 "http://localhost/ims/public/product",
    //                 {
    //                     method: "GET",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzEzODQ5MzA3LCJleHAiOjE3MTM5MzU3MDcsIm5iZiI6MTcxMzg0OTMwNywianRpIjoibnpmc05HVWJEWFlEUE9ubCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.GeCf0tE9sGkfTKy93b4QfOiOENSFOVR0_-tqM47Wk1s"
    //                     },
    //                     cache: "no-store"
    //                 }
    //             );
    //             const jsonData = await res.json();

    //                 setData(jsonData)


    //             }    


    //          catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, [Hidden, selectedValues]);




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
    const handleHidden = (index) => {
        
        setFormData1(outward[index]);
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

    const dataobjectForm = {
        brand_id: "1",
        serial_number: formData1.Product_Serial_Number,
        model: formData1.Product_Model,
        configuration: formData1.Product_Configuration,
        ram: formData1.Product_Ram,
        hdd: formData1.Product_HDD,
    };

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
    const handleViewFun = (e,index) => {
        
        setFormData2(outward[index]);

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
                    <h1 className="text-3xl  font-semibold">Outward List</h1>
                    <div className=" sm:flex sm:space-x-2 space-x-0 sm:space-y-0 space-y-2">

                        <div className="flex  items-center">

                            <Select
                                className="min-w-[300px] rounded-3xl"
                                options={options}
                                value={selectedOptions}
                                onChange={handleChange}
                                isMulti={true}
                                placeholder="Search"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px',
                                        borderTopRightRadius: '0px',
                                        borderBottomRightRadius: '0px',

                                    }),
                                    dropdownIndicator: () => ({ display: 'none' }),
                                    indicatorSeparator: () => ({ display: 'none' }),


                                }}
                            />


                            <CiSearch className=" text-[#0E5AFE] border border-[#CCCCCC] border-l-0 hover:cursor-pointer rounded-tr rounded-br p-1 h-[38px]" size={33} onClick={searchHandle} />
                        </div>
                    </div>
                    <button
                        className="  duration-700 border sm:py-2 sm:px-5 p-2  rounded bg-[#0E5AFE] text-white"
                        onClick={handleAddOutward}
                    >
                        Add Outward
                    </button>
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
                            {outward.map((element, index) => (
                                <tr
                                    className="!text-center border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100"
                                    key={index}
                                >
                                    {/* Render specific fields: ID, Company Name, Contact Person, Address */}
                                    <td>{element["ID"]}</td>
                                    <td>
                                        <div onClick={() => handleEditClick(index)}>
                                            {editableItem === index ? (
                                                <input
                                                    type="text"
                                                    name="Company Name"
                                                    value={element["Company Name"]}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                    className="w-20"
                                                />
                                            ) : (
                                                element["Company Name"]
                                            )}
                                        </div>
                                    </td>
                                    <td>{element["Contact Person"]}</td>
                                    <td>{element["Contact Number"]}</td>

                                    <td>{element["Delivery Address"]}</td>

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
                            <h1 className="text-4xl text-red-400 font-semibold">Edit</h1>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">
                                <div className=" ">
                                    <span className="  ">Serial Number</span>
                                    <input
                                        type="text"
                                        value={formData1.Product_Serial_Number}
                                        onChange={(e) => handleInputChangeForm(e)}
                                        name="Product_Serial_Number"
                                        className="border-2 outline-red-500  border-[#1D4ED8]   bg-[#F9FAFB] w-full  p-2 rounded-xl"
                                    ></input>
                                </div>
                                <div className=" ">
                                    <span className=" ">Model</span>
                                    <input
                                        type="text"
                                        value={formData1.Product_Model}
                                        onChange={(e) => handleInputChangeForm(e)}
                                        name="Product_Model"
                                        className="border-2  outline-red-500  border-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"
                                    ></input>
                                </div>
                                <div className=" ">
                                    <span className=" ">Configuration</span>
                                    <input
                                        type="text"
                                        value={formData1.Product_Configuration}
                                        onChange={(e) => handleInputChangeForm(e)}
                                        name="Product_Configuration"
                                        className="border-2  outline-red-500  border-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"
                                    ></input>
                                </div>
                                <div className=" ">
                                    <span className=" ">Ram</span>
                                    <input
                                        type="text"
                                        value={formData1.Product_Ram}
                                        onChange={(e) => handleInputChangeForm(e)}
                                        name="Product_Ram"
                                        className="border-2  outline-red-500  border-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"
                                    ></input>
                                </div>
                                <div className=" ">
                                    <span className=" ">Hdd</span>
                                    <input
                                        type="text"
                                        value={formData1.Product_HDD}
                                        onChange={(e) => handleInputChangeForm(e)}
                                        name="Product_HDD"
                                        className="border-2  outline-red-500  border-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"
                                    ></input>
                                </div>
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
                            <h1 className="text-4xl text-red-400 font-semibold">Supplier Details</h1>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">

                                {fieldName.map((ele, index) => (
                                    <div key={index}>
                                        <span>{ele}</span>
                                        <div className="border-2 bg-white w-full p-2 rounded-xl">
                                            {formData2[ele]?formData2[ele]:"Default Value"}
                                            {/* {outward[ele]} */}
                                            
                                            
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
