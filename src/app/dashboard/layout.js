
// import Navbar2 from "@/Components/Navbar2"
// import Navbar3 from "@/Components/Navbar3"
// import { Provider } from "react-redux";
// import Header from "@/Components/Header";

// export default function DashboardLayout({ children }) {
//     return <>
//         <main className="md:flex pt-0 md:pt-0  w-full md:h-screen">
//             <div className="w-full md:flex  h-full  overflow-hidden">
//                 <div className="">
//                     <Navbar3 />

//                 </div>
//                 <div className="max-md:pt-20   w-full h-full md:overflow-hidden md:h-screen md:w-screen">

//                     <Header />
                    

//                     {children}
                   

//                 </div>
//             </div>

//         </main>


//     </>
// }

import Navbar2 from "@/Components/Navbar2"
import Navbar3 from "@/Components/Navbar3"
import { Provider } from "react-redux";
import Header from "@/Components/Header";

export default function DashboardLayout({ children }) {
    return <>
        <main className=" flex md:h-screen  md:overflow-hidden">
                    <div>

                    <Navbar3/>
                    </div>
                    <div className="w-full h-full">

                    <Header />
                    {children}
                    </div>
            

        </main>


    </>
}