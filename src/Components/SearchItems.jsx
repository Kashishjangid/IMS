"use client"
import React, { useState } from 'react'
import Select from "react-select";
import { CiSearch } from "react-icons/ci";

const SearchItems = ({searchElement,selectoptiondata,placeholderValue,handlemultiple}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        selectoptiondata(selectedOption)

    };
    return (
        <div>
            <div className=" sm:flex sm:space-x-2 space-x-0 sm:space-y-0 space-y-2">

                <div className="flex  items-center">

                    <Select
                        className="min-w-[300px] rounded-3xl"
                        // options={options}
                        options={searchElement}
                        value={selectedOptions}
                        onChange={handleChange}
                        isMulti={handlemultiple}
                        placeholder={placeholderValue}
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


                    <CiSearch className=" text-[#0E5AFE] border border-[#CCCCCC] border-l-0 hover:cursor-pointer rounded-tr rounded-br p-1 h-[38px]" size={33} />
                </div>
            </div>
        </div>
    )
}

export default SearchItems
