import { useEffect, useState } from 'react';
import {dataforproduct} from "@/app/dashboard/product/data"
export default function ChildComponent({ onData2 }) {
  const [data, setData] = useState('');
  // console.log(dataforproduct)

  // const sendDataToParent = () => {
  //   onData2(data);
  // };
   const fun=(e)=>{
    setData(e.target.value);
    // onData2(data)
   }

  //  useEffect(()=>{
  //     onData2(data)
  //  },[data])

   const senddata=()=>{
    onData2(dataforproduct);
   }

  return (
    <div>
      <input value={data} onChange={fun} />
      <button onClick={senddata}>Send Data</button>
    </div>
  );
}
