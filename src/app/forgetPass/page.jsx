import React from "react";
import Image from "next/image";
import forgot_image from "../../../public/images/padlock.png";
import mail_icon from "../../../public/images/mail.png";
import Link from "next/link";

const ForgetPass = () => {
  return (
    <div className="border container mx-auto w-fit text-center rounded space-y-8  mt-10  p-10 bg-[#555C7C]">
      <div className="flex justify-center">
        <Image src={forgot_image} width={90} className=""></Image>
      </div>
      <div>
        <h2 className="text-3xl text-white">Forgot Password</h2>
        <p className="text-xl text-white"> You can reset your password here</p>
      </div>
      <form className="flex justify-center flex-col space-y-8">
        <div className="flex  justify-center items-center ">
          <Image
            src={mail_icon}
            width={40}
            className="self-center p-1 bg-[#6E738F] rounded-l"
          ></Image>
          <input
            type="email"
            placeholder="email address"
            // className="w-full  h-8 bg-white font-[1rem] text-black  outline-none p-[20px] rounded-r"
            className="w-full rounded-r-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-l border-gray-700  outline-none p-[20px]"
            required
          />
        </div>

        <Link href="./newPassword">
          <button className="bg-[#1059FF] w-full rounded text-[white] hover:scale-[1.01]  py-1.5 px-6">
            Reset Password
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ForgetPass;
