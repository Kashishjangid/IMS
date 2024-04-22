// "use client";
// import Link from "next/link";
// import { useState } from "react";
// // import { useRouter } from "next/router";

// const Index = () => {
//   const [toggle, setToggle] = useState(true);
//   // const router=useRouter();
//   const [name, setName] = useState("");

//   const [password, setPassword] = useState("");
//   // const [contact, setContact] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if (!name || !password) {
//     //   alert("Plz Fill the form")
//     //   // alert(JSON.stringify({name,email,contact}))

//     //   return;
//     // }
//     // console.log(name, email, contact)

//     // try {

//       //  alert(name);
//      // alert(JSON.stringify({"email": name, password }))
//       const res = await fetch("http://192.168.1.82/ims/public/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({"email": name, password }),
//         // body: formData.toString(),
//       });
//       if (res.ok) {
//         alert("Success")
//         // router.push("/UserForm2");
//         // alert(res.access_token)
//       }
//       else {
//         throw new Error("Some Error")
//       }
//       // console.log(res);
//     // } catch (error) {
//     //   console.log("Error is", error)
//     // }
//   };



//   return (



//     <div className="border rounded container mx-auto  mt-10  p-10 bg-[#555C7C] overflow-hidden  max-w-[450px] h-[580px]">
//       <button><Link href='./dashboard'>go to Dashboard</Link></button>

//       <div className="flex text-xl text-white gap-6 *:cursor-pointer">
//         <h3
//           onClick={() => setToggle(true)}
//           className={`${toggle ? "underline underline-offset-[15px] signin_h3 " : ""
//             } `}
//         >
//           SIGN IN
//         </h3>
//         <h3
//           onClick={() => setToggle(false)}
//           className={`${toggle
//               ? ""
//               : "opacity-80 underline underline-offset-[15px]  hover:opacity-100 signup_h3"
//             }`}
//         >
//           SIGN UP
//         </h3>
//       </div>

//       {toggle ? (
//         <form onSubmit={handleSubmit} className="signin duration-[1s] transition-all px-0 space-y-6 mt-24 absolute top-20">
//           <div>
//             <label htmlFor="" className="text-white opacity-80 text-[13px]">
//               Email
//             </label>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               value={name}
//               name="email"
//               className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"

//             />
//           </div>
//           <div>
//             <label htmlFor="" className="text-white opacity-80 text-[13px]">
//               PASSWORD
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               name="password"
//               className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"

//             />
//           </div>

//           <button type="submit" className="bg-[#1059FF] w-full rounded-3xl text-[white] hover:scale-[1.01] !mt-12 py-1.5 px-6">
//             SIGN IN
//           </button>
//           <div className="w-full border-b-[0.5px] bg-[#727892] !mt-10"></div>
//           <Link href="/forgetPass" className="">
//             <div className="justify-center flex ">
//               <label
//                 htmlFor=""
//                 className="text-white opacity-60 text-[13px] cursor-pointer mt-10"
//               >
//                 Forgot your password?
//               </label>
//             </div>
//           </Link>
//         </form>
//       ) : (
//         <form className="signup duration-[1s]   transition-all space-y-4 mt-24 absolute top-20">
//           <div>
//             <label htmlFor="" className="text-white opacity-80 text-[13px]">
//               FULL NAME
//             </label>
//             <input
//               type="text"
//               className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="text-white opacity-80 text-[13px]">
//               EMAIL
//             </label>
//             <input
//               type="email"
//               className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="text-white opacity-80 text-[13px]">
//               PASSWORD
//             </label>
//             <input
//               type="password"
//               className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="text-white opacity-80 text-[13px]">
//               CONFIRM PASSWORD
//             </label>
//             <input
//               type="password"
//               className="w-full rounded-[13px] h-8 bg-[#6E738F] font-[1rem] text-white border-none outline-none p-[17px] mt-2"
//               required
//             />
//           </div>

//           <button className="bg-[#1059FF] w-full rounded-3xl text-[white] hover:scale-[1.01] !mt-12 py-1.5 px-6">
//             Sign Up
//           </button>
//         </form>


//       )}
//     </div>


//   );
// };

// export default Index;


// pages/login.js
"use client"
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { login } from './auth';
import { LoginForm } from './LoginForm';

export default function LoginPage() {
  // const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      // Redirect to the dashboard page
      // router.push('/dashboard');
      // alert("Jitendra")

    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1></h1>

      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
