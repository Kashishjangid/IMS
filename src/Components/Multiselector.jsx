"use client"
import React, { useState } from 'react'
import Select from "react-select"
const options = [
  { value: "Laptop", label: "Laptop" },
  { value: "4 RAM", label: "4 RAM" },
  { value: "8 RAM", label: "8 RAM" },
  { value: "12 RAM", label: "12 RAM" },
  { value: "16 RAM", label: "16 RAM" },
];

const page = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleChange = (selectedOption) => {

    setSelectedOptions(selectedOption);
    

  }

  const submit = (e) => {
    e.preventDefault();
    // alert("ji")
    console.log(selectedOptions)

  }

  return (
    <>
      {/* <div className='w-full  flex flex-col  overflow-auto  mt-20 h-full '> */}
        {/* <h1>Multiple Selector Dropdown</h1> */}
        <div>

          <Select
          className='min-w-[200px] '
            options={options}
            // value={selectedOptions}
            onChange={handleChange}
            isMulti={true}
            placeholder="Filter"
            
          />
        </div>


        {/* <button onClick={submit} className=' bg-black text-white w-fit p-2 mt-10 rounded-xl'>Submit</button> */}


      {/* </div> */}

    </>
  )
}

export default page
