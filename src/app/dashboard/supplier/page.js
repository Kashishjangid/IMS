"use client";
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";


import Select from "react-select";
import AddSupplier from "@/Components/AddSupplier";


const options = [
    { value: "Dell", label: "Dell" },
    { value: "Asus", label: "Asus" },
    { value: "4 GB", label: "4 GB" },
    { value: "8 GB", label: "8 GB" },
    { value: "12 GB", label: "12 GB" },
    { value: "16 GB", label: "16 GB" },
    { value: "i7", label: "i7" },
];

const fieldName = ["Company Name" ,"Contact Person Name", "Contact No.","Address","Action"];

const Page = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState([]);

    const [editableItem, setEditableItem] = useState(null);
    const [Hidden, setHidden] = useState(true);

    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

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
    const handleHidden = (e, index) => {
        setFormData1(data[index]);
        setHidden(false);
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
    // const [hiddenforproduct, setHiddenForProduct] = useState(true);
    const [hiddenaddproduct, setHiddenAddProduct] = useState(true);
    // const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedProductData, setSelectedProductData] = useState("");
    // const [selectedProductDatafornewproduct, setSelectedProductDataForNewProduct] = useState("");
    const [existst, setExistsT] = useState(false)
    // console.log(existst)
    // console.log(selectedProductDatafornewproduct.length)
    const [productid, setProductId] = useState("");
    // const [selectedProductBrand, setSelectedProductBrand] = useState("")
    // const optionHandle = (selectedOptions) => {

    //     setSelectedProduct(selectedOptions);
    //     setSelectedProductData(selectedOptions.value)



    //     setProductId(selectedOptions.id)
    //     setSelectedProductBrand("")

    // };

    // const [handleformhidden, setHandleFormHidden] = useState(true)
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
    

    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };


    const handleDataFromChild = (data) => {
        if(data)
        {
                  setHiddenAddProduct(true);
        }
        
      };



    return (
        <>
            <div
                className={`h-screen relative max-md:pt-20 max-md:pb-0    ${scrollfun ? "overflow-auto" : "overflow-hidden"
                    }  w-full`}
            >
                <div className="sm:flex sm:space-y-0 space-y-2  justify-between m-4">
                    <h1 className="text-3xl  font-semibold">Suppliers</h1>
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
                        onClick={handleAddProducts}
                    >
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
                            {data.map((element, index) => (
                                <tr
                                    className="!text-center border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100"
                                    key={index}
                                >
                                    {Object.keys(element)
                                    // .filter((ele,index)=>index=>index<3))
                                    .filter((ele, index) => index <= 3)
                                    .map((key) => (
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
                                    <td className="*:border space-x-3 *:p-1  *:rounded *:text-white">
                                        {editableItem === index ? (
                                            <>
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
                                            </>
                                        ) : (
                                            <button
                                                className="hover:opacity-80 bg-[#184892]"
                                                onClick={(e) => handleHidden(e, index)}
                                            >
                                                <CiEdit />
                                            </button>
                                        )}
                                        <button className="hover:opacity-80 bg-[#8d2618]">
                                            <MdDelete />
                                        </button>
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

                {/* for add product */}
                
                <AddSupplier hiddenaddproduct={hiddenaddproduct} fieldName={fieldName} sendDataToParent={handleDataFromChild}/>
                


            </div>

        </>
    );
};

export default Page;
