"use client";
import React, { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import AddDropDown from "./AddDropDown";
import Link from "next/link";

const AddProductNew = ({ data, dataActive, sendDataToParent, selectedProductData }) => {
    // console.log("Hello",selectedProductData)
    const [handlehidden, setHandleHidden] = useState(true);
    const [optioncolor, setOptionColor] = useState("blue-500");

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionsValue, setSelectedOptionsValue] = useState([]);
    const [handlefielddata, setHandleFieldData] = useState("");
    const [alldata, setAllData] = useState([]);
    const [enterfieldsnamedata, setEnterFieldsNameData] = useState("");
    const [fieldtypeValue, setFieldtypeValue] = useState({});
    const [formcreation, setFormCreation] = useState(true);
    const [optionsnull, setOptionsnull] = useState(true);
    const [optiondata, setOptionData] = useState("");

    const fun = (ele) => {
        if (!selectedOptions.includes(ele)) {
            setSelectedOptions((prevSelectedOptions) => [
                ...prevSelectedOptions,
                ele,
            ]);
        }
    };
    useEffect(() => {
        if (dataActive) {
            setSelectedOptions([]);
        }
    }, [dataActive]);

    const removeFields = (itemToRemove) => {
        const updatedFields = selectedOptions.filter(
            (item) => itemToRemove != item
        );

        setSelectedOptions(updatedFields);
    };


    const removeFieldsOptions = (itemToRemove) => {
        const updatedFields = selectedOptionsValue.filter(
            (item) => itemToRemove != item
        );
        setSelectedOptionsValue(updatedFields);
    };
    // const [handlecancelform,setHandleCancelForm]=useState(true);
    const handlecancel = (e) => {
        e.preventDefault();
        setFormCreation(true);

    };
    const handlecustomfieldcancel = (e) => {
        e.preventDefault();
        setSelectedOptions([])

        sendDataToParent("Hello");
    };

    const handlefieldsname = (e) => {
        document.querySelectorAll(".border").forEach((span) => {
            span.style.backgroundColor = "";
            span.style.borderColor = "";
        });

        const span = e.target.parentNode.querySelector("span");

        span.style.backgroundColor = "blue";
        span.style.borderColor = "blue";

        setHandleFieldData(e.target.textContent);
    };

    // console.log(handlefielddata)

    const enterfieldsnamedatafun = (e) => {
        if (handlefielddata.length > 0) {
            setEnterFieldsNameData(e.target.value);
        }
    };
    useEffect(() => {
        setEnterFieldsNameData("");
    }, [selectedOptions, handlefielddata]);

    const fun4 = (e) => {
        if (dropdownfieldname.length > 0) {
            setOptionData(e.target.value);
        }
    };
    const fun3 = (e) => {
        e.preventDefault();

        if (!selectedOptionsValue.includes(optiondata) && optiondata.length > 0) {
            setSelectedOptionsValue((prevSelectedOptions) => [
                ...prevSelectedOptions,
                optiondata,
            ]);
        }
    };
    useEffect(() => {
        setOptionData("");
    }, [selectedOptionsValue]);

    const [dropdownfieldname, setDropDownFieldName] = useState("");
    const handledropdownfieldname = (e) => {
        setDropDownFieldName(e.target.value);
    };

    useEffect(() => {
        if (selectedOptionsValue.length != 0) {
            setOptionsnull(true);
        } else {
            setOptionsnull(false);
        }
    }, [selectedOptionsValue]);


    // const [fieldtypeValue1,setFieldTypeValue1]=useState([]);

    // const fun2 = (e) => {
    //     console.log(handlefielddata);

    //     e.preventDefault();
    //     if ( !selectedOptions.includes(enterfieldsnamedata) && !data.some((ele) => ele === enterfieldsnamedata) 
    //     // && enterfieldsnamedata.length > 0 

    //     ) {
    //         // let fieldtypeValue;

    //         if (handlefielddata !== "Dropdown" && enterfieldsnamedata.length > 0 ) {
    //             setFieldTypeValue1({
    //                 title: enterfieldsnamedata,
    //                 fieldtype: handlefielddata,
    //             });
    //             setSelectedOptions((prevSelectedOptions) => [
    //                 ...prevSelectedOptions,
    //                 enterfieldsnamedata,
    //             ]);
    //         } else if(handlefielddata === "Dropdown"  && dropdownfieldname.length>0) {
    //             setFieldTypeValue1({
    //                 title: dropdownfieldname,
    //                 fieldtype: handlefielddata,
    //                 options: selectedOptionsValue.map((ele) => ({ option: ele })),
    //             });
    //             // setSelectedOptions((prevSelectedOptions) => [
    //             //     ...prevSelectedOptions,
    //             //     enterfieldsnamedata,
    //             // ]);

    //         }


    //             setAllData((prevSelectedOptions) => [
    //                 ...prevSelectedOptions,
    //                 fieldtypeValue1,
    //             ]);


    //     }
    // };

    // const[fieldtypeValue]
    const fun2 = (e) => {
        // console.log(handlefielddata);

        e.preventDefault();
        if (!selectedOptions.includes(enterfieldsnamedata) && !data.some((ele) => ele === enterfieldsnamedata)
            // && enterfieldsnamedata.length > 0 

        ) {
            let fieldtypeValue;

            if (handlefielddata !== "Dropdown" && enterfieldsnamedata.length > 0) {
                fieldtypeValue = {
                    title: enterfieldsnamedata,
                    fieldtype: handlefielddata,
                };
                setSelectedOptions((prevSelectedOptions) => [
                    ...prevSelectedOptions,
                    enterfieldsnamedata,
                ]);
            } else if (handlefielddata === "Dropdown" && dropdownfieldname.length > 0) {
                fieldtypeValue = {
                    title: dropdownfieldname,
                    fieldtype: handlefielddata,
                    options: selectedOptionsValue.map((ele) => ({ option: ele })),
                };
                // setSelectedOptions((prevSelectedOptions) => [
                //     ...prevSelectedOptions,
                //     enterfieldsnamedata,
                // ]);

            }


            setAllData((prevSelectedOptions) => [
                ...prevSelectedOptions,
                fieldtypeValue,
            ]);


        }
    };

    // useEffect(() => {
    //     // Call fun2 to update allData whenever selectedOptions or selectedOptionsValue change
    //     fun2();
    // }, [selectedOptions, selectedOptionsValue]);






    const formcreationfun = (e) => {

        if (selectedOptions.length !== 0) {
            setFormCreation(false);
        }

        // console.log(alldata);
    };

    const handleSubmit = (e) => {
        // e.preventDefault();

        const formData = {
            title: dropdownfieldname,
            fieldtype: handlefielddata,
            options: [...selectedOptionsValue.map((option) => ({ title: option }))],
        };
        if (
            !selectedOptions.includes(dropdownfieldname) &&
            selectedOptionsValue.length > 0 &&
            !data.some((ele) => ele === dropdownfieldname)
        ) {
            setSelectedOptions((prevalue) => [...prevalue, dropdownfieldname]);
        }

        if (selectedOptionsValue.length > 0) {
            setDropDownFieldName("");
        }
        setSelectedOptionsValue([]);
        // console.log(formData)
    };



    const [enterbrandfieldsnamedata, setEnterbrandfieldsnamedata] = useState("");
    const enterbrandfieldsnamedatafun = (e) => {
        setEnterbrandfieldsnamedata(e.target.value)

    }
    const [brandvalue, setBrandValue] = useState([]);
    const handleenterbrandfieldsnamedatafun = (e) => {
        e.preventDefault();
        if (!brandvalue.includes(enterbrandfieldsnamedata) && enterbrandfieldsnamedata.length > 0) {

            setBrandValue((prevalue) => [
                ...prevalue, enterbrandfieldsnamedata
            ])
        }



    }

    const removeBrand = (remove_item) => {
        const newbrandvalue = brandvalue.filter((ele) => ele != remove_item);
        setBrandValue(newbrandvalue)

    }

    useEffect(() => {
        setEnterbrandfieldsnamedata("")
    }, [brandvalue])


    const handledatasubmit = (e) => {
        e.preventDefault();
        let newdata = {
            "subcategory_name": selectedProductData,
            brand_name: brandvalue,
            form: alldata

        }
        console.log(newdata)
    }



    return (
        <div className="relative">
            <div
                className={` 
                       bg-black/30 backdrop-blur-[2px]   h-full     w-full`}
            >
                <div className="  h-full flex flex-col ">

                    <div className=" bg-white  w-full   ">
                        <div className="space-y-2 *:space-y-2">
                            <div>
                                <p>Enter Brands Name</p>
                                <div className="w-full flex gap-2">
                                    <input
                                        type="text"
                                        value={enterbrandfieldsnamedata}
                                        onChange={enterbrandfieldsnamedatafun}
                                        placeholder="Enter Brand Name"


                                        className="border-2  outline-[#1D4ED8] w-1/2  bg-[#F9FAFB]   p-2 rounded-xl"
                                    />
                                    <div className="*:rounded-xl  *:py-2 *:px-5">
                                        <button
                                            className={`bg-red-400 hover:bg-red-500 ${enterbrandfieldsnamedata.length != 0 ? "cursor-pointer" : "cursor-not-allowed"}   text-white`}
                                            onClick={handleenterbrandfieldsnamedatafun}
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div>

                                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2   gap-2    ">
                                    {brandvalue.map((ele, index) => (
                                        <div className="relative">
                                            <div
                                                key={index}
                                                className={`bg-red-400 hover:cursor-pointer hover:bg-red-500 text-white rounded-xl p-2 flex items-center justify-center overflow-x-auto`}
                                                style={{
                                                    scrollbarWidth: "none",
                                                    "-ms-overflow-style": "none",
                                                }}
                                            >
                                                {ele}
                                            </div>

                                            <div className="absolute top-1 right-1 ">
                                                <RxCrossCircled
                                                    size={12}
                                                    className="text-white scale-150 cursor-pointer"
                                                    onClick={() => removeBrand(ele)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {formcreation ? (
                            <div className="space-y-2">

                                <div className="space-y-2">
                                    <p>Enter Fildes Types</p>
                                    <ul className="flex gap-4 *:cursor-pointer">
                                        <div
                                            className="flex items-center gap-1"
                                            onClick={handlefieldsname}
                                        >
                                            <span className="border border-black h-4 w-4 rounded-full"></span>
                                            <li>Text</li>
                                        </div>
                                        <div
                                            className="flex items-center gap-1"
                                            onClick={handlefieldsname}
                                        >
                                            <span className="border border-black h-4 w-4 rounded-full"></span>
                                            <li>Number</li>
                                        </div>
                                        <div
                                            className="flex items-center gap-1"
                                            onClick={handlefieldsname}
                                        >
                                            <span className="border border-black h-4 w-4 rounded-full"></span>
                                            <li>date</li>
                                        </div>
                                        <div
                                            className="flex items-center gap-1"
                                            onClick={handlefieldsname}
                                        >
                                            <span className="border border-black h-4 w-4 rounded-full"></span>
                                            <li>Dropdown</li>
                                        </div>
                                    </ul>

                                    <p>Enter Fildes Name</p>

                                    <div className="w-full flex gap-2">
                                        <div className="w-full">
                                            {handlefielddata != "Dropdown" ? (
                                                <div className="w-full flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={enterfieldsnamedata}
                                                        onChange={enterfieldsnamedatafun}
                                                        placeholder={`Enter ${handlefielddata}`}
                                                        // onKeyDown={fun2}

                                                        className="border-2  outline-[#1D4ED8] w-1/2  bg-[#F9FAFB]   p-2 rounded-xl"
                                                    />
                                                    <div className="*:rounded-xl  *:py-2 *:px-5">
                                                        <button
                                                            className="bg-red-400 hover:bg-red-500   text-white"
                                                            onClick={fun2}
                                                        >
                                                            Done
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="">
                                                    <div className="w-full flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={dropdownfieldname}
                                                            onChange={handledropdownfieldname}
                                                            placeholder="Enter Field Name"
                                                            className="border-2 outline-[#1D4ED8] w-1/2   bg-[#F9FAFB] p-2 rounded-xl"
                                                        />
                                                        <div className="*:rounded-xl  *:py-2 *:px-5">
                                                            <button
                                                                className="bg-red-400 hover:bg-red-500   text-white"
                                                                // onClick={handleSubmit}
                                                                // onClick={fun2}
                                                                onClick={(e) => {
                                                                    e.preventDefault(); // Prevent the default behavior of the button click event
                                                                    handleSubmit(e); // Pass the event object to the handleSubmit function
                                                                    fun2(e);
                                                                }}
                                                            >
                                                                Done
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2 ">
                                                        <div className=" flex gap-2 w-full">
                                                            <div className=" w-1/2  ">
                                                                <div className=" flex justify-between gap-4 items-center">
                                                                    <p>Enter options</p>
                                                                    <p
                                                                        className={` text-red-500 font-semibold ${optionsnull ? "hidden" : "block"
                                                                            }`}
                                                                    >
                                                                        Atleast one option*
                                                                    </p>
                                                                </div>
                                                                <div className="flex  w-full gap-2">
                                                                    <div className="w-[90%] ">
                                                                        <input
                                                                            type="text"
                                                                            value={optiondata}
                                                                            onChange={fun4}
                                                                            placeholder="Enter option"
                                                                            className="border-2 outline-[#1D4ED8]   w-full  bg-[#F9FAFB] p-2 rounded-xl"
                                                                        />
                                                                    </div>
                                                                    <div className="*:rounded-xl  *:py-2 *:px-5">
                                                                        <button
                                                                            className="bg-red-400 hover:bg-red-500   text-white"
                                                                            onClick={fun3}
                                                                        >
                                                                            Done
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" w-1/2">
                                                                <p>Options</p>
                                                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-1    ">
                                                                    {selectedOptionsValue.map((ele, index) => (
                                                                        <div className="relative">
                                                                            <div
                                                                                key={index}
                                                                                className={` text-white cursor-pointer   rounded bg-[#1D4ED8]    flex items-center justify-center overflow-x-auto`}
                                                                                style={{
                                                                                    scrollbarWidth: "none",
                                                                                    "-ms-overflow-style": "none",
                                                                                }}
                                                                            >
                                                                                {ele}
                                                                            </div>

                                                                            <div className="absolute top-0 right-0 ">
                                                                                <RxCrossCircled
                                                                                    size={12}
                                                                                    className="text-white scale-125 cursor-pointer"
                                                                                    onClick={() =>
                                                                                        removeFieldsOptions(ele)
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div>

                                    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2   gap-2    ">
                                        {selectedOptions.map((ele, index) => (
                                            <div className="relative">
                                                <div
                                                    key={index}
                                                    className={`bg-red-400 hover:cursor-pointer hover:bg-red-500 text-white rounded-xl p-2 flex items-center justify-center overflow-x-auto`}
                                                    style={{
                                                        scrollbarWidth: "none",
                                                        "-ms-overflow-style": "none",
                                                    }}
                                                >
                                                    {ele}
                                                </div>

                                                <div className="absolute top-1 right-1 ">
                                                    <RxCrossCircled
                                                        size={12}
                                                        className="text-white scale-150 cursor-pointer"
                                                        onClick={() => removeFields(ele)}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <hr />
                                {/* <div>
                                    <h1>Choose Fields</h1>
                                </div>

                                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2   gap-2   *:rounded-xl *:p-2 *:flex  *:items-center *:justify-center ">
                                    {data
                                        .filter((ele, index) => index > 0)
                                        .map((ele, index) => (
                                            <div
                                                key={index}
                                                className={` bg-[#1D4ED8] ${selectedOptions.includes(ele)
                                                    ? "bg-red-400 hover:cursor-not-allowed"
                                                    : "bg-[#1D4ED8] hover:cursor-pointer"
                                                    }    text-white `}
                                                onClick={() => fun(ele)}
                                            >
                                                {ele}
                                            </div>
                                        ))}
                                </div> */}
                                <div className="flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5">
                                    {/* <div className=" "> */}
                                    <button
                                        className={`bg-[#1D4ED8] hover:bg-blue-600 rounded-xl ${selectedOptions.length > 0
                                            ? "hover:cursor-pointer"
                                            : "hover:cursor-not-allowed"
                                            }     py-2 px-5  text-white`}
                                        onClick={formcreationfun}
                                    >
                                        Create Form
                                    </button>

                                    <button
                                        className="bg-red-400 hover:bg-red-500   text-white"
                                        onClick={handlecustomfieldcancel}
                                    >
                                        Cancel
                                    </button>

                                </div>
                            </div>
                        ) : (
                            <form className=" space-y-4 ">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {alldata.length > 0 &&
                                        alldata
                                            .filter(demoItem => selectedOptions.includes(demoItem.title))
                                            // .filter((demoItem,index)=>demoItem.title===selectedOptions.some((ele,index)=>ele))
                                            .map((demoItem, index) => (
                                                <div key={index}>
                                                    <div className="  md:gap-4 mt-4 space-y-6 md:space-y-0 overflow-hidden">
                                                        <div className="space-y-2">
                                                            <span>{demoItem.title}</span>
                                                            {
                                                                demoItem.fieldtype != "Dropdown" ? (
                                                                    <input
                                                                        type={demoItem.fieldtype}
                                                                        name={demoItem.title}
                                                                        placeholder={demoItem.title}
                                                                        className="border-2  outline-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"
                                                                    />
                                                                ) : (
                                                                    <>
                                                                        <select className="border-2    bg-[#F9FAFB] w-full  p-2 rounded-xl">
                                                                            {demoItem.options.map((element, optionIndex) => (
                                                                                <option key={optionIndex}>
                                                                                    {/* {option.title} */}
                                                                                    {element.option}
                                                                                    {/* hello */}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </>
                                                                )
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                </div>
                                <div className="flex justify-end items-center gap-2">

                                    <button
                                        className={`bg-[#1D4ED8] hover:bg-blue-600 rounded-xl      py-2 px-5  text-white`}
                                        onClick={handledatasubmit}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className={`bg-red-400 hover:bg-red-500  rounded-xl     py-2 px-5  text-white`}
                                        onClick={handlecancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductNew;
