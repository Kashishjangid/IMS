// "use client"
// import { useState } from 'react';
// import ChildComponent from '@/Components/ChildComponent';
// // import AddProductNew from '@/Components/AddProductNew';

// export default function ParentComponent() {
//   const [dataFromChild, setDataFromChild] = useState(null);
  
//   const handleChildData = (data) => {
//     setDataFromChild(data);
    
//   };
  

//   return (
//     <div>
//       <ChildComponent onData2={handleChildData} />
//       <p>Data from child: {dataFromChild}</p>
        
//     </div>
//   );
// }

import React from 'react'
const dataforproduct = [
  "Select type of products",
  "Laptop",
  "Deshtop",
  "Printer",
  "Projector",
  "TFT",
  "UPS",
  "Battery",
  "Screen",
  "Charge",
  "Fan",
  "Headphone",
  "Keyboard",
  "Mouse",
  "RAM",
  "Harddisk",
  "Mobile",
  "Toner",
  "Wifi card",
  "Connector"
];

const demo = dataforproduct.map((item, index) => {
  
    return { title: item};
 
});


console.log(demo);

const page = () => {
  return (
    <div>
      {
        demo.map((ele,index)=>(
          <h1>{ele.title}</h1>
        ))
      }
    </div>
  )
}

export default page

