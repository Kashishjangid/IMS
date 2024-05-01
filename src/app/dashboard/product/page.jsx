"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { demo, allfildes } from "./data";

import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
import AddProductNew from "@/Components/AddProductNew";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Demo from "@/Components/Demo"
import { Dropdown } from "@mui/base";
import AddDropDown from "@/Components/AddDropDown";
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
    const router = useRouter();
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState([]);

    const [editableItem, setEditableItem] = useState(null);
    const [Hidden, setHidden] = useState(true);
    const [Hiddenview, setHiddenView] = useState(true);

    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [handleDelete, setHandleDelete] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await fetch(
                    "http://localhost/ims/public/product",

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


                if (selectedValues.length === 0) {
                    setData(jsonData)


                }
                else {


                    setData(
                        jsonData.filter(item => {
                            // For All selected value, check if it exists in the item
                            // return selectedValues.some(filterItem => {
                            // For each selected value, check if it exists in the item
                            return selectedValues.every(filterItem => {
                                // Check if any of the item properties contain the filter value
                                return Object.values(item).some(val => {
                                    // Check if the value is a string before calling .toLowerCase()
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
    }, [Hidden, selectedValues, handleDelete]);
    // for product
    const [dataforproduct, setDataForProduct] = useState([])
    useEffect(() => {
        const productdatafetch = async () => {

            try {
                const response = await fetch("http://localhost/ims/public/subcategory", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                    },
                    cache: "no-store"

                });
                if (!response.ok) {
                    // If response is not ok, throw an error
                    throw new Error('Failed to fetch product data');
                }
                const jsonproductdata = await response.json();
                setDataForProduct(jsonproductdata);
                // const jsonproductdata = await response.json();
                // // console.log(prodata)
                // setDataForProduct(jsonproductdata)
            } catch (error) {

                console.error(error)

            }

        };
        productdatafetch();
    }, [])
    // for brand
    const [dataforproductbrand, setDataForProductBrand] = useState([])
    useEffect(() => {
        const productdatafetch1 = async () => {
            try {
                const response = await fetch("http://localhost/ims/public/brand", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                    },
                    cache: "no-store"
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonproductdata = await response.json();
                // console.log(jsonproductdata);
                setDataForProductBrand(jsonproductdata);
            } catch (error) {
                console.error("Error fetching data:", error);
                // You can handle the error here, for example:
                // setError("An error occurred while fetching data");
            }
        };

        productdatafetch1();
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
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
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
        // alert(index)
        setFormData1(data[index]);
        setHidden(false);
        setScrollFun(false);
    };
    const handleHiddenView = (e, index) => {
        // alert(index)
        setFormData1(data[index]);
        setHiddenView(false);
        setScrollFun(false);
    };

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
    //     // configuration: formData1.Product_Configuration,
    //     ram: formData1.Product_Ram,
    //     hdd: formData1.Product_HDD,
    // };

    const handleSaveEditForm = async (e) => {
        e.preventDefault();
        // console.log(dataobjectForm)
        // console.log(formData1)
        // console.log( `http://192.168.1.82/lumentest/public/product/${formData1.product_id}`)

        try {
            const res = await fetch(
                // `http://192.168.1.82/lumentest/public/product/${formData1.product_id}`,
                `http://localhost/ims/public/product/${formData1.product_id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                    },
                    body: JSON.stringify(formData1),
                }
            );
            if (res.ok) {
                // router.refresh();
                // alert("Hello")
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
    const handleCancelViewForm = (e) => {
        // alert("J")
        e.preventDefault();
        setHiddenView(true);
        setScrollFun(true);
    };

    //for add product
    const [hiddenforproduct, setHiddenForProduct] = useState(true);
    const [hiddenaddproduct, setHiddenAddProduct] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedProductData, setSelectedProductData] = useState("");
    const [selectedProductDatabyid, setSelectedProductDatabyid] = useState("");
    const [selectedProductDatafornewproduct, setSelectedProductDataForNewProduct] = useState("");
    const [existst, setExistsT] = useState(false)
    // console.log(existst)
    // console.log(selectedProductDatafornewproduct.length)
    const [productid, setProductId] = useState("");
    const [selectedProductBrand, setSelectedProductBrand] = useState("")
    const optionHandle = (selectedOptions) => {
        // console.log(selectedOptions.id)

        setSelectedProduct(selectedOptions);
        setSelectedProductData(selectedOptions.value)
        setSelectedProductDatabyid(selectedOptions.id)
        




        setProductId(selectedOptions.id)
        // alert(selectedOptions.id)
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

    useEffect(() => {
        const existsInDataForProduct = dataforproduct.some(option => option === selectedProductData);
        setExistsT(existsInDataForProduct);
        // console.log(existst);

    }, [selectedProductData]);





    const handleAddProducts = (e) => {
        e.preventDefault();
        setHiddenAddProduct(false);

        setScrollFun(false);
    };


    const [customfieldsdataactive, setCustomfieldsDataActive] = useState(false);
    const [scrollfun, setScrollFun] = useState(true);
    const handleAddProductsDiscard = (e) => {
        e.preventDefault();
        setHiddenAddProduct(true);
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
        // console.log('Received data from child:', data);
        // setReceivedData(data);
        if (data === "Hello") {
            // alert("HE")
            setHandleFormHidden(true);
        }

    };
    // try {
    //     const res = await fetch(
    //         // `http://192.168.1.82/lumentest/public/product/${formData1.product_id}`,
    //         `http://localhost/ims/public/product/${formData1.product_id}`,
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
    //         // router.refresh();
    //         // alert("Hello")
    //         setHidden(true);
    //     } else {
    //         throw new Error("Some Error");
    //     }
    // } catch (error) {
    //     console.log("Error", error);
    // }
    const handleDeletefun = async (e, index) => {
        // console.log(data[index].product_id)
        // console.log(`http://localhost/ims/public/product/${data[index].product_id}`)
        if (confirm("Are You Sure You Want to delete this product") == true) {


            try {
                const res = await fetch(`http://localhost/ims/public/product/${data[index].product_id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                    },
                });

                if (res.ok) {
                    // Deletion successful, update your UI or trigger any necessary actions
                    // alert("Product deleted successfully");
                    setHandleDelete(data[index].product_id)
                    alert("Product deleted successfully")
                } else {
                    // Server returned an error status, handle it accordingly
                    throw new Error("Failed to delete product");
                }
            } catch (error) {
                // An error occurred during the fetch request or processing the response
                console.error("Error deleting product:", error);
            }
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
    // console.log(data)



    const [formfield, setFormfield] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // alert(`http://localhost/ims/public/form/${productid}`)
            try {
                const response = await fetch(`http://localhost/ims/public/form/${productid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzE0NDc1MTI4LCJleHAiOjE3MTUzMzkxMjgsIm5iZiI6MTcxNDQ3NTEyOCwianRpIjoiamlZQkZWcnUxNE9EM3hFcyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kqPSTt2UKDW7AnY58zx7oYsOEHEslACAKMfxBL9dJ-A"
                    },
                    cache: "no-store"
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
              
                setFormfield(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [productid]);
    // console.log(formfield.length)
    
    


    const handlesaveaddproduct = (e) => {
        e.preventDefault();

        console.log(formData);
        setFormData({})

    }





    return (
        <>
            <div
                className={`h-screen relative max-md:pt-20 max-md:pb-0  ${scrollfun ? "overflow-auto" : "overflow-hidden"
                    }  w-full`}
            >
                <div className="sm:flex sm:space-y-0 space-y-2  justify-between m-4">
                    <h1 className="text-3xl  font-semibold">Product List </h1>
                    <div className=" sm:flex sm:space-x-2 space-x-0 sm:space-y-0 space-y-2">

                        <div className="flex  items-center">

                            <Select
                                className="min-w-[300px] rounded-3xl"
                                // options={options}
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
                        onClick={handleAddProducts}
                    >
                        Add Products
                    </button>
                </div>
                <div className="w-full overflow-auto md:pb-20">
                    <table className="w-full mt-2">
                        <thead>
                            <tr className="items-center *:p-2 bg-[#d5d7da]">
                                <th>Id</th>
                                <th>Product</th>
                                <th>Brand</th>
                                <th>Serial Number</th>
                                <th>Model</th>
                                {/* <th>Configuration</th> */}
                                {/* <th>Ram</th> */}
                                <th>HDD</th>

                                <th>Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {data.map((element, index) => (
                                <tr
                                    className="!text-center border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100"
                                    key={index}
                                >
                                    {Object.keys(element).map((key) => (
                                        <td key={key}>
                                            {/* <p>{key}</p> */}

                                            <div onClick={() => handleEditClick(index)}>
                                                {editableItem === index ? (
                                                    <input
                                                        type="text"
                                                        name={key}
                                                        value={element[key]}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                        className="w-20"
                                                    />
                                                ) : (
                                                    element[key]
                                                )}
                                            </div>
                                            {/* </div> */}
                                        </td>
                                    ))}
                                    <td className=" justify-center space-x-1    *:*:p-1  flex    flex-wrap items-center    *:*:rounded *:text-white">
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
                                            // <button
                                            //     className="hover:opacity-80 bg-[#184892]"
                                            //     onClick={(e) => handleHidden(e, index)}
                                            // >
                                            //     <CiEdit />
                                            // </button>
                                            <div className="relative *:p-1 *:rounded">
                                                <div className={`absolute -top-6 overflow-hidden bg-[#184892] !px-4 -left-[50%] ${tooltip1 === index ? '' : 'hidden'}`}>
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
                                        )}
                                        <div className="relative ">
                                            <div className={`absolute -top-7 overflow-hidden bg-[green] !px-4 -left-[50%] ${tooltip2 === index ? '' : 'hidden'}`}>
                                                <h1 className="text-white text-[10px]">View</h1>
                                            </div>
                                            <button className="hover:opacity-80 bg-[green] "
                                                onClick={(e) => handleHiddenView(e, index)}
                                                onMouseEnter={(e) => handletooltip2(e, index)}
                                                onMouseLeave={() => setTooltip2(null)}

                                            >
                                                <MdOutlineRemoveRedEye />
                                            </button>
                                        </div>
                                        <div className="relative">
                                            <div className={`absolute -top-7 overflow-hidden bg-[red] !px-2 -left-[50%] ${tooltip3 === index ? '' : 'hidden'}`}>
                                                <h1 className="text-white text-[10px]">Delete</h1>
                                            </div>

                                            <button className="hover:opacity-80 bg-[red]"
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

                {/* for Edit section */}
                <div
                    className={`flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%]  justify-center md:pt-4 pt-24  pb-20  ${Hidden ? "hidden" : "flex"
                        } bg-black/30 backdrop-blur-[2px] overflow-auto `}
                >

                    <div className=" sm:w-[70%] w-full  sm:p-0 !h-fit    ">
                        <form action="" className="   rounded p-8    bg-white">
                            <h1 className="text-4xl text-red-400 font-semibold">Edit</h1>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">



                                {Object.entries(formData1).map(([key, value], index) => (
                                    <div className="" key={index}>
                                        <span className="">{key}</span>
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



                {/* for view Data */}
                <div
                    className={`flex-grow h-full absolute top-0 left-[50%] w-full -translate-x-[50%]  justify-center md:pt-4 pt-24  pb-20  ${Hiddenview ? "hidden" : "flex"
                        } bg-black/30 backdrop-blur-[2px] overflow-auto `}
                >

                    <div className=" sm:w-[70%] w-full  sm:p-0 !h-fit    ">
                        <form action="" className="   rounded p-8    bg-white">
                            <h1 className="text-4xl text-red-400 font-semibold">Edit</h1>
                            <div className="grid md:grid-cols-2 md:gap-8 mt-4 *:space-y-2 space-y-6 md:space-y-0 ">



                                {Object.entries(formData1).map(([key, value], index) => (
                                    <div className="" key={index}>
                                        <span className="">{key}</span>
                                        <div className="border-2 outline-red-500 border-[#1D4ED8] bg-[#F9FAFB] w-full p-2 rounded-xl">
                                            {value}
                                        </div>
                                        {/* <input
                                            type="text"
                                            value={value} // Use the value corresponding to the key
                                            // onChange={(e) => handleInputChangeForm(e, key)} // Optionally handle change
                                            name={key} // Use the key as the input name
                                            className="border-2 outline-red-500 border-[#1D4ED8] bg-[#F9FAFB] w-full p-2 rounded-xl"
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

                {/* for add product */}
                <div
                    className={`absolute flex-grow   top-0 left-[50%] -translate-x-[50%]  ${hiddenaddproduct ? "hidden" : "flex"
                        }    bg-black/30 backdrop-blur-[2px] md:pt-4 pt-24 h-full max-md:pt-20 max-md:pb-0 overflow-auto w-full`}
                >
                    <div className="w-full sm:p-0 h-full flex flex-col items-center overflow-auto md:pb-20">
                        <div className="border bg-white p-4 rounded w-[90%] ">
                            <div className="space-y-2">
                                <div className="flex justify-between text-2xl">
                                    <h1>Add New Product</h1>
                                    <RxCross2 size={30} onClick={handleAddProductsDiscard} />
                                </div>
                                <div className="space-y-2 ">
                                    <h2>Product Type</h2>

                                    <div className="flex w-full justify-center items-center gap-3">


                                        <CreatableSelect
                                            className="rounded-3xl w-full"
                                            options={dataforproduct.map(ele => ({ value: ele.name, label: ele.name, id: ele.id }))}
                                            // value={selectedProduct}
                                            // value={selectedProduct[selectedProduct.length - 1]}
                                            value={selectedProduct}

                                            onChange={optionHandle}
                                            // isValidNewOption={isValidNewOption}
                                            // onInputChange={handleInputchange}
                                            // isMulti={true}
                                            placeholder="Select type of products"

                                        />

                                        {/* <AddProductNew data={allfildes} /> */}
                                    </div>
                                    {/* {
                                        selectedProductDatafornewproduct.length === 0 ? ("Hello") : (selectedProductDatafornewproduct.length)
                                    } */}
                                    {/* <AddProductNew data={allfildes}/> */}
                                </div>
                                <div className={`space-y-2 ${handleformhidden ? "block" : "hidden"} `}>
                                    <h2>Brand Name</h2>

                                    <div className="flex w-full justify-center items-center gap-3">


                                        <CreatableSelect
                                            className="rounded-3xl w-full"
                                            // options={dataforproductbrand
                                            // .filter((ele, index) => productid === ele.subcategory_id)
                                            // console.log(formfield[0].brand)
                                            options={formfield[0]?.brand
                                                .map(ele => ({ value: ele.name, label: ele.name }))}

                                            value={selectedProductBrand}

                                            onChange={optionHandleForProductBrand}
                                            // onInputChange={handleInputchange}

                                            placeholder="Select type of products"

                                        />

                                        {/* <AddProductNew data={allfildes} /> */}
                                    </div>
                                    {/* {
                                        selectedProductDatafornewproduct.length === 0 ? ("Hello") : (selectedProductDatafornewproduct.length)
                                    } */}
                                    {/* <AddProductNew data={allfildes}/> */}
                                </div>
                            </div>
                            {/* <form className=" " hidden={false}> */}
                            <form className=" space-y-4 ">
                                <div>


                                { formfield.length>0&&formfield
                                        
                                        // .filter((item, index) => formfield[index].subcategory.id === selectedProductDatabyid && selectedProductBrand != "")
                                        .filter((item, index) => selectedProductBrand != "")
                                       
                                        .map((demoItem, index) => (
                                            <div key={index} className="grid sm:grid-cols-2 gap-4">
                                                {demoItem.form.map((field, fieldIndex) => (
                                                    <div className="  md:gap-4 mt-4 space-y-6 md:space-y-0 overflow-hidden">
                                                        <div key={fieldIndex} className="space-y-2">
                                                            <span>{field.label}</span>
                                                            {field.type != "Dropdown" ? (
                                                                <input
                                                                    type={field.type}
                                                                    name={field.name}

                                                                    placeholder={field.label}
                                                                    className="border-2  outline-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"
                                                                    onChange={handleInputChange2}
                                                                />

                                                            ) : (
                                                                <div>
                                                                    <select
                                                                        className="border-2 outline-[#1D4ED8] bg-[#F9FAFB]  p-2 w-full rounded-xl cursor-pointer"
                                                                        name={field.label}
                                                                        onChange={handleInputChange2}
                                                                    >
                                                                        {field.option.map((option, optionIndex) => (
                                                                            <option key={optionIndex} value={option.value}>
                                                                                {option.label}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}

                                </div>
                                <div className={`flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 ${handleformhidden ? "block" : "hidden"}`}>
                                    <button className="bg-[#1D4ED8] hover:bg-blue-600   text-white" onClick={handlesaveaddproduct}>
                                        Add product
                                    </button>
                                    <button
                                        className="bg-red-400 hover:bg-red-500   text-white"
                                        onClick={handleAddProductsDiscard}
                                    >
                                        Discard
                                    </button>
                                </div>
                            </form>
                            <div className={`${handleformhidden ? "hidden" : "block"} mt-6 `}>

                                <AddProductNew data={allfildes} dataActive={customfieldsdataactive} sendDataToParent={handleDataFromChild} selectedProductData={selectedProductData} />
                            </div>

                            {/* <Demo/> */}
                        </div>
                    </div>
                    {/* <AddDropDown/> */}
                </div>

                {/* <AddDropDown className="hidden"/> */}
            </div>

        </>
    );
};

export default Page;
