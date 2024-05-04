"use client"
import React, { useEffect, useState } from 'react'
import Select from "react-select";

const SearchComponent = ({options, sentproductid}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        // alert(selectedOption.value)
        sentproductid(selectedOption.value);
    };

    
    
    return (
        <div className=''>

            <Select
                className=" rounded-xl"
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                // isMulti={true}
                placeholder="Search"
                styles={{
                    control: (provided) => ({
                        ...provided,
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                        borderBottomRightRadius: '4px',

                    }),
                    // dropdownIndicator: () => ({ display: 'none' }),
                    // indicatorSeparator: () => ({ display: 'none' }),


                }}
            />

        </div>
    )
}

export default SearchComponent
