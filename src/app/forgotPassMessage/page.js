import Link from "next/link";
import Image from "next/image";
import img from "../../../public/images/check.png"

const page = () => {
  return (
    <div className="border container mx-auto w-fit text-center  rounded   mt-10  p-10 bg-[#555C7C]">
      <div className="flex justify-center"></div>
      <div className="space-y-4 flex flex-col justify-center items-center">
        <Image src={img} width={80}></Image>
        <h2 className="text-3xl text-white">Password Changed</h2>
        <p className="text-xl text-white">
         
          Your password has been changed successfully.
        </p>
      

      </div>
        <Link href="/dashboard">
          <button className="bg-[#1059FF] w-[50%] mt-10 rounded text-[white] hover:scale-[1.01]  py-1.5 px-6">
            Back to sign in
          </button>
        </Link>
      
    </div>
  )
}

export default page
