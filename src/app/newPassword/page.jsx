import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="border container mx-auto w-fit text-center rounded space-y-8  mt-10  p-10 bg-[#555C7C]">
      <div className="flex justify-center"></div>
      <div className="space-y-4">
        <h2 className="text-3xl text-white">Reset password</h2>
        <p className="text-xl text-white">
         
          The password should have atleast 6 characters
        </p>
      </div>
      <form className="flex text-start flex-col space-y-8">
        <div>
          <label htmlFor="" className="text-white opacity-80 text-[13px]">
            New password
          </label>
          <input
            type="password"
            className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"
            required
          />
        </div>
        <div>
          <label htmlFor="" className="text-white opacity-80 text-[13px]">
            confirm password
          </label>
          <input
            type="password"
            className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"
            required
          />
          <label htmlFor="" className="text-white  ">password match</label>
        </div>

        <Link href="./forgotPassMessage">
          <button className="bg-[#1059FF] w-full rounded text-[white] hover:scale-[1.01]  py-1.5 px-6">
            Reset Password
          </button>
        </Link>
      </form>
    </div>
  );
};

export default page;
