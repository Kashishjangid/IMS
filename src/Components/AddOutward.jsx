"use client"
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import SearchComponent from './SearchComponent';

const AddOutward = ({ hiddenaddoutward, sendDataToParent, fieldName }) => {

    const [inputData, setInputData] = useState(Array(fieldName.length).fill(''));
    const [data, setData] = useState([])
    const [options, setOptions] = useState([])

    const[productidfromchild,setProductidfromchild]=useState("")

    const handlesentproductid=(data)=>{
        setProductidfromchild(data);
    }
    useEffect(()=>{
        console.log(productidfromchild)

    },[productidfromchild])



    const fieldName2 = ["Product Id", "Customer Id"]


    const handleInputChange = (event, index) => {
        const newInputData = [...inputData];
        newInputData[index] = event.target.value;
        setInputData(newInputData);
    };
    const fun = (e) => {
        e.preventDefault();
        const formData = {};
        fieldName.forEach((field, index) => {
            formData[field] = inputData[index];
        });
        // setInputData("")
        // console.log(formData);
        setInputData(Array(fieldName.length).fill(''))


    }

    const [productIds, setProductIds] = useState("");
    const handleAddOutwardDetailstoggle = (e) => {
        e.preventDefault();
        sendDataToParent(true);
        setProductIds("")
        setData([])
        // setOptions([]);

        // console.log(productIds.length)


    };
    const handleProductIdChange = (index, newValue) => {
        setProductIds(prevProductIds => {
            const newProductIds = [...prevProductIds];
            newProductIds[index] = newValue;
            return newProductIds;
        });
    };



    // useEffect(() => {
    const handleproductidfun = async (e) => {
        // alert(productIds)
        // alert(`http://localhost/ims/public/product/${productIds[0]}`)
        e.preventDefault();
       
    };

    // fetchData();
    // }, []);
    // console.log(data)
    // const handleproductidfun=(e)=>{
    //     e.preventDefault();
    //     console.log(productid)
    //     console.log(`http://localhost/ims/public/product/${productid}`)
    // }
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        alert(selectedOption.value)
    };
    // const options = [
    //     { value: "Dell", label: "Dell" },
    //     { value: "Asus", label: "Asus" },
    //     { value: "4 GB", label: "4 GB" },
    //     { value: "8 GB", label: "8 GB" },
    //     { value: "12 GB", label: "12 GB" },
    //     { value: "16 GB", label: "16 GB" },
    //     { value: "i7s", label: "i7s" },
    // ];


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
                if(res.ok){
                    // setData(jsonData)
                    const productIds = jsonData.map(item => ({
                        value:item.product_id.toString(),
                        label:item.product_id.toString(),
                    }));
                    setOptions(productIds);
                    
                }
                
                
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);


    useEffect(()=>{
        const productdata=async()=>{
            try {
                const res = await fetch(
                    `http://localhost/ims/public/product/${productidfromchild}`,
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
                    if (jsonData.status === 204) {
    
                        setData([])
                        alert(jsonData.fail)
                    }
                    // console.log(jsonData.status)
                    else {
    
                        setData(jsonData)
                    }
                    // console.log(res.status)
    
    
                } else {
    
                    // console.log("sjsj")
                    // console.log(res.status)
                    // console.log("Response not OK:", res.status);
                    throw new Error("Some Error");
                }
            } catch (error) {
    
                // console.log("sjsj")
                console.log("Error", error);
            }
        }
        productdata();
    },[productidfromchild])

    



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
                                <h1>Add Outward Details</h1>
                                <RxCross2 size={30}
                                    onClick={handleAddOutwardDetailstoggle}
                                    className="cursor-pointer" />
                            </div>


                        </div>


                        <form >
                            <div className=" space-y-4 " >
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {/* {fieldName */}
                                    <div className="  md:gap-2 mt-4 space-y-6 md:space-y-0 ">
                                        <div className="space-y-2">
                                            <span>Product Id</span>
                                            {/* <div className='flex gap-2'> */}


                                            {/* <input
                                                        type="number"
                                                        value={productIds.length > 0 ? productIds[index] : ""}
                                                        onChange={(event) => handleProductIdChange(index, event.target.value)}


                                                        className="border-2  outline-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"


                                                    /> */}
                                                    <SearchComponent  options={options} sentproductid={handlesentproductid}/>
                                            {/* <Select
                                                className="rounded"
                                                options={optionss}
                                                value={selectedOptions}
                                                onChange={handleChange}
                                                // isMulti={true}
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
                                            /> */}

                                            {/* </div> */}


                                        </div>
                                    </div>
                                    <div className="  md:gap-2 mt-4 space-y-6 md:space-y-0 ">
                                        <div className="space-y-2">
                                            <span>Customer Name</span>
                                            {/* <div className='flex gap-2'> */}


                                            {/* <input
                                                        type="number"
                                                        value={productIds.length > 0 ? productIds[index] : ""}
                                                        onChange={(event) => handleProductIdChange(index, event.target.value)}


                                                        className="border-2  outline-[#1D4ED8]  bg-[#F9FAFB] w-full  p-2 rounded-xl"


                                                    /> */}
                                                    <SearchComponent  options={options} sentproductid={handlesentproductid}/>
                                            {/* <Select
                                                className="rounded"
                                                options={optionss}
                                                value={selectedOptions}
                                                onChange={handleChange}
                                                // isMulti={true}
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
                                            /> */}

                                            {/* </div> */}


                                        </div>
                                    </div>
                                    {/* {fieldName2

                                        // .filter((ele,index)=>index<fieldName.length-1)
                                        .map((ele, index) => (

                                            



                                        ))} */}
                                    {/* <div className={`flex  *:rounded-xl gap-4 *:py-2 *:px-5  `}>
                                        <button className="bg-[#1D4ED8] hover:bg-blue-600   text-white" onClick={handleproductidfun}>
                                            Add
                                        </button>

                                    </div> */}

                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {data.length > 0 && Object.entries(data[0]).map(([key, value], index) => (
                                        <div className="" key={index}>

                                            <span className="">{key
                                                .split('_')
                                                .map(word =>
                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                                )
                                                .join(' ')}</span>
                                            <div className="border-2 outline-red-500 border-[#1D4ED8] bg-[#F9FAFB] cursor-not-allowed w-full p-2 rounded-xl">
                                                {value}
                                            </div>

                                        </div>
                                    ))}
                                </div>

                            <div className={`flex  *:rounded-xl justify-end gap-4 *:py-2 *:px-5 `}>
                                <button className="bg-[#1D4ED8] hover:bg-blue-600   text-white" onClick={(e) => fun(e)}>
                                    Add Outward
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
