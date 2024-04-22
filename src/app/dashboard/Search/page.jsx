// "use client";
// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// const options = [
//     { value: "delectus aut autem", label: "delectus aut autem" },
//     { value: "fugiat veniam minus", label: "fugiat veniam minus" },
//     { value: "illo expedita consequatur quia in", label: "illo expedita consequatur quia in" },
    
// ];

// const page = () => {
//     const [data, setData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
//                 cache: "no-store",
//             });
//             const jsonData = await res.json();
//             setData(jsonData);
//         };
//         fetchData();
//     }, []);

//     // console.log(data);

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleClick = () => {
//         const filteredData = data.filter((item) => {
//             // console.log(item);
//             if (searchTerm === "") {
//                 return true;
//             } else {
//                 return Object.keys(item).some((key) => {
//                     // Check if the value is a string before calling .toLowerCase()
//                     if (typeof item[key] === "string") {
//                         return item[key].toLowerCase().includes(searchTerm.toLowerCase());
//                     }
//                     return false;
//                 });
//             }
//         });
//         setData(filteredData);
//         // Update the data state with filtered data
//     };

//     const [selectedOptions,setSelectedOptions]=useState([]);
//     const [inputdata,setInputData]=useState("sss");

//     const handleChange =(select)=>{  
//         // console.log(select.value)
//         setSelectedOptions(select)
//         // console.log(selectedOptions)
        
//         // console.log(selectedOptions)
//     } 
//     // selectedOptions.map((ele,index)=>(
//     //     // console.log(ele.value)
//     //     // setInputData(ele.value)
//     // ))
//     return (
//         <>
//             <div className=" flex flex-col  items-center   mt-10  gap-4 h-full">
//                 <input
//                     type="text"
//                     onChange={handleSearchChange}
//                     placeholder="Enter Your Search"
//                     className="border border-black w-[30%]"
//                 />
//                 <Select
//                     className="min-w-[200px] "
//                     options={options}
//                     value={selectedOptions}
//                     onChange={handleChange}
//                     isMulti={true}
//                     placeholder="Filter"
//                 />
//                 <button
//                     className="bg-blue-600 text-white px-3 py-1 w-fit"
//                     type="button"
//                     onClick={handleClick}
//                 >
//                     Search
//                 </button>
//                 {/* <p>{inputdata}</p>  */}
//                 {data
//                     .filter((ele, index) => index <= 7)
//                     .map((ele, index) => (
//                         <div key={index} className="flex">
//                             <p>{`${ele.id}=> `}</p>
//                             <p>{ele.title}</p>
//                         </div>
//                     ))}

                  
//             </div>
//         </>
//     );
// };

// export default page;


"use client"
import React, { useEffect, useState } from 'react'

const page = () => {


    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        const fetchData = async () => {

            const res = await fetch("http://192.168.1.82/lumentest/public/product", { cache: 'no-store' });
            const jsonData = await res.json();
            setData(jsonData)




        }
        fetchData();
    }, [])

    // console.log(data[0])

    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    

    const handleClick = () => {
        const filteredData = data.filter((item) => {
            console.log(item)
            if (searchTerm === "") {
                return true;
            } else {
                
                return Object.keys(item).some((key) => {
                    // Check if the value is a string before calling .toLowerCase()
                    if (typeof item[key] === 'string') {
                        return item[key].toLowerCase().includes(searchTerm.toLowerCase());
                    }
                    return false;
                });
            }
        });
        setData(filteredData); 
        // Update the data state with filtered data
    };




    return (
        <>
            <div className="   mt-10  gap-4 h-full">

                <input
                    type="text"
                    onChange={handleSearchChange}

                    placeholder="Enter Your Search"
                    className="border border-black w-[30%]"
                />
                <button className="bg-blue-600 text-white px-3 py-1 w-fit" type="button" onClick={handleClick}>
                    Search
                </button>

                <div className='w-full overflow-auto md:pb-20'>
                    <table className='w-full mt-2'>
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
                            {data


                                .map((element, index) => (
                                    <tr className='!text-center  border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100' key={index}>
                                        {Object.keys(element).map((key) => (
                                            <td key={key}>
                                                {/* <p>{key}</p> */}

                                                <div >
                                                   
                                                        {element[key]}
                                                   
                                                </div>
                                                {/* </div> */}
                                            </td>
                                        ))}
                                        
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default page


