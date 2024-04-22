"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"


const DelButton = ({index}) => {

  const router=useRouter();

  const deletefun=async(e)=>{
    e.preventDefault();
    const confirmed=confirm("Are you sure ?");
    alert(`http://192.168.1.82/lumen/public/customer/${index}`)
    if(confirmed){
      const res= await fetch(`http://192.168.1.82/lumen/public/customer/${index}`,{
        method:"DELETE"
      });
    }
    if(res.ok){
      router.push("./UserForm2");
    }
    
  }

  return (
    
      <td className='*:border space-x-3 *:p-1 *:rounded *:bg-[#0E5AFE] *:text-white ' >
      <button className='hover:opacity-80' > <Link href='./customerform'>Edit</Link> </button>
      
      <button className='hover:opacity-80' onClick={deletefun}>Delete</button>
      </td>
        
   
  )
}

export default DelButton
