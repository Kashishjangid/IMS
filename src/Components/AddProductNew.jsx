"use client"
import React, { useEffect, useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import AddDropDown from './AddDropDown';
import Link from 'next/link';

const AddProductNew = ({ data, dataActive }) => {
    const [handlehidden, setHandleHidden] = useState(true)
    const [optioncolor, setOptionColor] = useState("blue-500")

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionsValue, setSelectedOptionsValue] = useState([]);


    const fun = (ele) => {


        if (!selectedOptions.includes(ele)) {

            setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, ele]);
        }
    }
    useEffect(() => {

        if (dataActive) {

            setSelectedOptions([]);

        }
    }, [dataActive])

    const removeFields = (itemToRemove) => {
        const updatedFields = selectedOptions.filter(item => itemToRemove != item);
        setSelectedOptions(updatedFields);
    };
    const removeFieldsOptions = (itemToRemove) => {
        const updatedFields = selectedOptionsValue.filter(item => itemToRemove != item);
        setSelectedOptionsValue(updatedFields);
    };

    const handlecancel = () => {
        setFormCreation(true)
    }



    const [handlefielddata, setHandleFieldData] = useState("");

    const handlefieldsname = (e) => {
        document.querySelectorAll('.border').forEach(span => {
            span.style.backgroundColor = '';
            span.style.borderColor = "";
        });

        const span = e.target.parentNode.querySelector('span');

        span.style.backgroundColor = 'blue';
        span.style.borderColor = "blue";

        setHandleFieldData(e.target.textContent);

    };

    // console.log(handlefielddata)
    const [alldata, setAllData] = useState([]);

    const [enterfieldsnamedata, setEnterFieldsNameData] = useState("");

    const enterfieldsnamedatafun = (e) => {
        setEnterFieldsNameData(e.target.value)
    }
    useEffect(() => {
        setEnterFieldsNameData("")

    }, [selectedOptions])








    const [optiondata, setOptionData] = useState("");
    const fun4 = (e) => {
        setOptionData(e.target.value)
    }
    const fun3 = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (!selectedOptionsValue.includes(optiondata) && optiondata.length > 0) {


                setSelectedOptionsValue(prevSelectedOptions => [...prevSelectedOptions, optiondata]);
            }
        }

    }
    useEffect(() => {

        setOptionData("")
    }, [selectedOptionsValue]);

    const [dropdownfieldname, setDropDownFieldName] = useState("");
    const handledropdownfieldname = (e) => {
        setDropDownFieldName(e.target.value)
    }




    useEffect(() => {
        if (selectedOptionsValue.length != 0) {
            setOptionsnull(true)


        }
        else {
            setOptionsnull(false)
        }
    }, [selectedOptionsValue])



    const [fieldtypeValue, setFieldtypeValue] = useState({});
    const fun2 = (e) => {
        // console.log(handlefielddata)
        // console.log(handlefielddata)
        const demodata = handlefielddata === "Dropdown" ? true : false
        // console.log(demodata)
        if (e.key === 'Enter') {

            // setHandleFieldData("Dropdown");
            e.preventDefault();
            if (!selectedOptions.includes(e.target.value) && !data.some(ele => ele === e.target.value)) {

                let fieldtypeValue;


                if (handlefielddata !== "Dropdown") {
                    fieldtypeValue = {
                        title: e.target.value,
                        fieldtype: handlefielddata

                    }

                } else {
                    fieldtypeValue = {
                        title: dropdownfieldname,
                        fieldtype: handlefielddata,
                        options: selectedOptionsValue.map((ele) => ({ option: ele }))
                    };
                }
                setAllData(prevSelectedOptions => [...prevSelectedOptions, fieldtypeValue]);

                setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, e.target.value]);


            }
        }
    }
    const [formcreation, setFormCreation] = useState(true);
    const formcreationfun = () => {

        if (selectedOptions.length !== 0) {
            setFormCreation(false)

        }
        console.log(alldata)
        // console.log(selectedOptionsValue)



    }

    const [optionsnull, setOptionsnull] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = {
            title: dropdownfieldname,
            fieldtype: handlefielddata,
            options: [

                ...selectedOptionsValue.map(option => ({ title: option }))
            ]
        };
        if (!selectedOptions.includes(dropdownfieldname) && selectedOptionsValue.length > 0 && !data.some(ele => ele === dropdownfieldname)) {

            setSelectedOptions(prevalue => [...prevalue, dropdownfieldname]);
        }


        if (selectedOptionsValue.length > 0) {

            setDropDownFieldName("");
        }
        setSelectedOptionsValue([])

        // console.log(formData)
    };







    return (

        <div className='relative'>
            <div
                className={` 
                       bg-black/30 backdrop-blur-[2px]   h-full     w-full`}
            >

                <div className="  h-full flex flex-col ">
                    <div className=" bg-white  w-full   ">
                        {
                            formcreation ? (<div className="space-y-2">
                                <div className='space-y-2'>
                                    <p>Enter Fildes Types</p>
                                    <ul className='flex gap-4 *:cursor-pointer'>
                                        <div className='flex items-center gap-1' onClick={handlefieldsname}>
                                            <span className='border border-black h-4 w-4 rounded-full'></span>
                                            <li >Text</li>
                                        </div>
                                        <div className='flex items-center gap-1' onClick={handlefieldsname}>
                                            <span className='border border-black h-4 w-4 rounded-full'></span>
                                            <li >Number</li>
                                        </div>
                                        <div className='flex items-center gap-1' onClick={handlefieldsname}>
                                            <span className='border border-black h-4 w-4 rounded-full'></span>
                                            <li >date</li>
                                        </div>
                                        <div className='flex items-center gap-1' onClick={handlefieldsname}>
                                            <span className='border border-black h-4 w-4 rounded-full'></span>
                                            <li >Dropdown</li>
                                        </div>
                                    </ul>

                                    <p>Enter Fildes Name</p>

                                    <div className='w-full flex gap-2'>
                                        <div className='w-full'>
                                            {
                                                handlefielddata != "Dropdown" ? (<input
                                                    // type={handlefielddata}
                                                    type="text"
                                                    value={enterfieldsnamedata}
                                                    onChange={enterfieldsnamedatafun}
                                                    placeholder={`Enter ${handlefielddata}`}
                                                    onKeyDown={fun2}


                                                    className="border-2  outline-[#1D4ED8] w-1/2  bg-[#F9FAFB]   p-2 rounded-xl"
                                                />)
                                                    : (

                                                        <div className=''>
                                                            <div className="w-full">
                                                                <input
                                                                    type="text"
                                                                    value={dropdownfieldname}
                                                                    onChange={handledropdownfieldname}

                                                                    onKeyDown={fun2}
                                                                    placeholder="Enter Field Name"
                                                                    className="border-2 outline-[#1D4ED8] w-1/2   bg-[#F9FAFB] p-2 rounded-xl"
                                                                />
                                                            </div>
                                                            <div className="space-y-2 ">
                                                                <div className=' flex gap-2 w-full'>
                                                                    <div className=' w-1/2  '>
                                                                        <div className=' flex justify-between gap-4 items-center'>

                                                                            <p>Enter options</p>
                                                                            <p className={` text-red-500 font-semibold ${optionsnull ? "hidden" : "block"}`}>Atleast one option*</p>
                                                                        </div>
                                                                        <div className='flex  w-full gap-2'>
                                                                            <div className='w-[90%] '>
                                                                                <input
                                                                                    type="text"
                                                                                    value={optiondata}
                                                                                    onChange={fun4}

                                                                                    placeholder="Enter option"
                                                                                    onKeyDown={fun3}

                                                                                    className="border-2 outline-[#1D4ED8]   w-full  bg-[#F9FAFB] p-2 rounded-xl"
                                                                                />
                                                                            </div>
                                                                            <div className='*:rounded-xl  *:py-2 *:px-5'>
                                                                                <button
                                                                                    className="bg-red-400 hover:bg-red-500   text-white"

                                                                                    onClick={handleSubmit}


                                                                                >
                                                                                    Done
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className=' w-1/2'>

                                                                        <p>Options</p>
                                                                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-1    '>
                                                                            {selectedOptionsValue.map((ele, index) => (
                                                                                <div className='relative'>

                                                                                    <div key={index} className={` border border-black cursor-pointer  text-black rounded  flex items-center justify-center overflow-x-auto`} style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                                                                                        {ele}
                                                                                    </div>

                                                                                    <div className='absolute top-0 right-0 '>


                                                                                        <RxCrossCircled size={12} className='text-black scale-110 cursor-pointer' onClick={() => removeFieldsOptions(ele)} />
                                                                                    </div>
                                                                                </div>
                                                                            ))}


                                                                        </div>

                                                                    </div>


                                                                </div>

                                                            </div>
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2   gap-2    '>
                                        {selectedOptions.map((ele, index) => (
                                            <div className='relative'>

                                                <div key={index} className={`bg-red-400 hover:cursor-pointer hover:bg-red-500 text-white rounded-xl p-2 flex items-center justify-center overflow-x-auto`} style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                                                    {ele}
                                                </div>

                                                <div className='absolute top-1 right-1 '>


                                                    <RxCrossCircled size={12} className='text-white scale-150 cursor-pointer' onClick={() => removeFields(ele)} />
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h1>Choose Fields</h1>
                                </div>

                                <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2   gap-2   *:rounded-xl *:p-2 *:flex  *:items-center *:justify-center '>
                                    {data
                                        .filter((ele, index) => index > 0)
                                        .map((ele, index) => (

                                            <div key={index} className={` bg-[#1D4ED8] ${selectedOptions.includes(ele) ? 'bg-red-400 hover:cursor-not-allowed' : 'bg-[#1D4ED8] hover:cursor-pointer'}    text-white `} onClick={() => fun(ele)}>
                                                {ele}
                                            </div>
                                        ))}


                                </div>
                                <div className="flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5">
                                    {/* <div className=" "> */}
                                    <button className={`bg-[#1D4ED8] hover:bg-blue-600 rounded-xl ${selectedOptions.length > 0 ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}     py-2 px-5  text-white`} onClick={formcreationfun}>

                                        Create Form
                                    </button>


                                    <button
                                        className="bg-red-400 hover:bg-red-500   text-white"
                                        onClick={handlecancel}

                                    >
                                        Cancel
                                    </button>
                                </div>



                            </div>) : 
                            (<form className=" space-y-4 ">
                            <div className="grid sm:grid-cols-2 gap-4">


                                {selectedOptions.length > 0 && selectedOptions

                                    .map((demoItem, index) => (
                                        <div key={index} >

                                            <div className="  md:gap-4 mt-4 space-y-6 md:space-y-0 overflow-hidden">
                                                <div className="space-y-2">
                                                    <span>{demoItem}</span>
                                                    <input
                                                        type="text"
                                                        name={demoItem}
                                                        placeholder={demoItem}
                                                        className="border-2  outline-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"

                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                            </div>
                            <button className={`bg-[#1D4ED8] hover:bg-blue-600 rounded-xl      py-2 px-5  text-white`}>

                                Submit
                            </button>
                            <button className={`bg-red-400 hover:bg-red-500  rounded-xl     py-2 px-5  text-white`} onClick={handlecancel}>

                                Cancel
                            </button>
                        </form>)

                        //     ((<form className="space-y-4">
                        //     <div className="grid sm:grid-cols-2 gap-4">
                        //       {selectedOptions.length > 0 &&
                        //         selectedOptions.map((demoItem, index) => (
                        //           <div key={index}>
                        //             <div className="md:gap-4 mt-4 space-y-6 md:space-y-0 overflow-hidden">
                        //               <div className="space-y-2">
                        //                 <span>{demoItem.title}</span> {/* Display the title */}
                        //                 {/* Render input field for Text type and dropdown for Dropdown type */}
                        //                 {demoItem.fieldtype === "Text" ? (
                        //                   <input
                        //                     type="text"
                        //                     name={demoItem.title}
                        //                     placeholder={demoItem.title}
                        //                     className="border-2 outline-[#1D4ED8] bg-[#F9FAFB] w-full p-2 rounded-xl"
                        //                   />
                        //                 ) : demoItem.fieldtype === "Dropdown" ? (
                        //                   <select
                        //                     className="border-2 outline-[#1D4ED8] bg-[#F9FAFB] p-2 w-full rounded-xl cursor-pointer"
                        //                     name={demoItem.title}
                        //                   >
                        //                     {demoItem.options.map((option, optionIndex) => (
                        //                       <option key={optionIndex} value={option.title}>
                        //                         {option.title}
                        //                       </option>
                        //                     ))}
                        //                   </select>
                        //                 ) : null /* Handle other field types if needed */}
                        //               </div>
                        //             </div>
                        //           </div>
                        //         ))}
                        //     </div>
                        //     <button className="bg-[#1D4ED8] hover:bg-blue-600 rounded-xl py-2 px-5 text-white">
                        //       Submit
                        //     </button>
                        //     <button
                        //       className="bg-red-400 hover:bg-red-500 rounded-xl py-2 px-5 text-white"
                        //       onClick={handlecancel}
                        //     >
                        //       Cancel
                        //     </button>
                        //   </form>
                        //   ))

                        }





                    </div>
                </div>

            </div>


        </div>

    )
}

export default AddProductNew
