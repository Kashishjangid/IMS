'use client'
import { useState, useEffect } from "react";
import Select from "react-select";
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


const options = [
    { value: "Dell", label: "Dell" },
    { value: "Asus", label: "Asus" },
    { value: "4 GB", label: "4 GB" },
    { value: "8 GB", label: "8 GB" },
    { value: "12 GB", label: "12 GB" },
    { value: "16 GB", label: "16 GB" },
    { value: "i7", label: "i7" },
];


const page = () => {

    
    
    const [scrollfun, setScrollFun] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [hiddenaddsupplier, setHiddenAddSupplier] = useState(true);
    const [data, setData] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [Hidden, setHidden] = useState(true);
    const [editableItem, setEditableItem] = useState(null);
    const [updatedata, setUpdateData] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "http://localhost/ims/public/product",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzEzNzU5NTA5LCJleHAiOjE3MTM4NDU5MDksIm5iZiI6MTcxMzc1OTUwOSwianRpIjoiUzBhSVlXMzVPTDd0WXBxMCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.GMJ0jSHpyqBsYF7gBiJiSnRSsQFKrvAxGygZA2lykrk"
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
    }, [Hidden, selectedValues]);

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

    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };

    const handleEditClick = (index) => {
        setEditableItem(index);
    };

    const searchHandle = () => {
        alert("HEllo")
    }

    const handleInputChange = (e, index) => {
        const newData = [...data];
        newData[index][e.target.name] = e.target.value;
        setUpdateData(newData[index]);

        setData(newData);
    };

    const handleAddSupplier = (e) => {
        e.preventDefault();
        setHiddenAddSupplier(false);

        setScrollFun(false);
    };

  return (
    <>
        <div className={`h-screen relative max-md:pt-20 max-md:pb-0  ${scrollfun ? "overflow-auto" : "overflow-hidden"}  w-full`}>
        <div className="sm:flex sm:space-y-0 space-y-2  justify-between m-4">
            <h1 className="text-3xl  font-semibold">Suppliers </h1>
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
                        }}/>
                    <CiSearch className=" text-[#0E5AFE] border border-[#CCCCCC] border-l-0 hover:cursor-pointer rounded-tr rounded-br p-1 h-[38px]" size={33} onClick={searchHandle} />
                </div>
            </div>
            <button
                className="  duration-700 border sm:py-2 sm:px-5 p-2  rounded bg-[#0E5AFE] text-white"
                    onClick={handleAddSupplier}>Add Supplier
            </button>
            </div>
        </div>

        {/* Supplier Data Table */}

        <div className="w-full overflow-auto md:pb-20 text-black">
            <table className="w-full mt-2">
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
                        <tr
                            className="!text-center border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100"
                            key={index}>
                            {Object.keys(element).map((key) => (
                            <td key={key}>
                                <div onClick={() => handleEditClick(index)}>
                                    {editableItem === index ? (
                                        <input
                                            type="text"
                                            name={key}
                                            value={element[key]}
                                            onChange={(e) => handleInputChange(e, index)}
                                            className="w-20"/>
                                    ) : (
                                        element[key]
                                    )}
                                    </div>
            
                            </td>
                            ))}
                            <td className="*:border space-x-3 *:p-1  *:rounded *:text-white">
                                {editableItem === index ? (
                                <>
                                    <button
                                        className="hover:opacity-80  bg-[#184892]"
                                        onClick={(e) => handleSaveClick(e, index)}>
                                        Save
                                    </button>
                                    <button
                                        className="hover:opacity-80 bg-[#184892]"
                                        onClick={handleCancelClick}>
                                        Cancel
                                    </button>
                                </>
                                ) : (
                                    <button
                                        className="hover:opacity-80 bg-[#184892]"
                                        onClick={(e) => handleHidden(e, index)}>
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

    </>
)}

export default page