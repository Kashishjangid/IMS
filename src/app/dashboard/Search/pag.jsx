// "use client"
// import React, { useEffect, useState } from "react";

// // import axios from "axios";

// const SearchField = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filterData, setFilterData] = useState([]);
//     const [photos, setPhotos] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     "https://api.unsplash.com/search/photos?page=1&query=coding&client_id=0UJyyJWVy2WKkIhq8cJ8As73CpazjUWshHZnPGhfJLI"
//                 );

//                 const arr = response.data.results;
                
//                 console.log(arr);
//                 setPhotos(arr);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleClick = () => {
//         const filterdData = photos.filter((item) => {
//             if (searchTerm === "") {
//                 return null;
//             } else {
//                 return item.alt_description
//                     .toLowerCase()
//                     .includes(searchTerm.toLowerCase());
//             }
//         });
//         console.log(filterdData);
//         setFilterData(filterdData);
//     };



    

//     return (
//         <>
//             <div className="flex justify-center mt-20  gap-4">

//                 <input
//                     onChange={handleSearchChange}
//                     type="text"

//                     placeholder="Enter Your Search"
//                     className="border border-black"
//                 />

//                 <br />
//                 <button

//                     className="bg-blue-600 text-white px-3 py-1 w-fit"
//                     onClick={handleClick}
//                     type="button"
//                 >Search</button>
//             </div>
//         </>
//     )
// }

// export default SearchField;



///////////////////////////////////////////////////////////////////////////////////////////////////
// "use client"
// import React, { useEffect, useState } from 'react'

// const page = () => {


//     const [data, setData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");


//     useEffect(() => {
//         const fetchData = async () => {

//             const res = await fetch("http://192.168.1.82/lumentest/public/product", { cache: 'no-store' });
//             const jsonData = await res.json();
//             setData(jsonData)




//         }
//         fetchData();
//     }, [])

//     // console.log(data[0])

    
//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };
    

//     const handleClick = () => {
//         const filteredData = data.filter((item) => {
//             console.log(item)
//             if (searchTerm === "") {
//                 return true;
//             } else {
                
//                 return Object.keys(item).some((key) => {
//                     // Check if the value is a string before calling .toLowerCase()
//                     if (typeof item[key] === 'string') {
//                         return item[key].toLowerCase().includes(searchTerm.toLowerCase());
//                     }
//                     return false;
//                 });
//             }
//         });
//         setData(filteredData); 
//         // Update the data state with filtered data
//     };




//     return (
//         <>
//             <div className="   mt-10  gap-4 h-full">

//                 <input
//                     type="text"
//                     onChange={handleSearchChange}

//                     placeholder="Enter Your Search"
//                     className="border border-black w-[30%]"
//                 />
//                 <button className="bg-blue-600 text-white px-3 py-1 w-fit" type="button" onClick={handleClick}>
//                     Search
//                 </button>

//                 <div className='w-full overflow-auto md:pb-20'>
//                     <table className='w-full mt-2'>
//                         <thead>
//                             <tr className="items-center *:p-2 bg-[#d5d7da]">
//                                 <th>Id</th>
//                                 <th>Brand Name</th>
//                                 <th>Serial Name</th>
//                                 <th>Model Number</th>
//                                 <th>Configuration</th>
//                                 <th>Ram</th>
//                                 <th>HDD</th>

//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data


//                                 .map((element, index) => (
//                                     <tr className='!text-center  border-1 *:border-b *:p-4 hover:cursor-pointer hover:bg-gray-100' key={index}>
//                                         {Object.keys(element).map((key) => (
//                                             <td key={key}>
//                                                 {/* <p>{key}</p> */}

//                                                 <div >
                                                   
//                                                         {element[key]}
                                                   
//                                                 </div>
//                                                 {/* </div> */}
//                                             </td>
//                                         ))}
                                        
//                                     </tr>
//                                 ))}
//                         </tbody>
//                     </table>
//                 </div>

//             </div>

//         </>
//     )
// }

// export default page
