// import React from 'react'
// import {Outlet} from "react-router";
//
// const AuthLayout = () => {
//     return (
//         <div className="auth-layout">
//             <div className="flex min-h-screen font-sans">
//                 {/* Left Panel */}
//                 <div className="w-1/2 bg-[#8B4513] text-white flex flex-col justify-center items-center px-8">
//                     {/* Logo */}
//                     <div className="mb-4">
//                         <img src="/Zelestra_Logo.png" alt="Zelestra Logo" className="h-8 mb-4" />
//                     </div>
//
//                     {/* Tagline */}
//                     {/*<h1 className="text-3xl font-bold tracking-wide mb-2">Zelestra</h1>*/}
//                     <p className="text-center mb-6">Making Decarbonization a Reality...</p>
//
//                     {/* Learn More */}
//                     <button className="bg-white text-[#8B4513] px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
//                         Learn More
//                     </button>
//                 </div>
//
//                 {/* Right Panel */}
//                 <div className="w-1/2 bg-white flex justify-center items-center">
//                     <div className="children"> <Outlet /> </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default AuthLayout

import React from 'react'
import {Outlet} from "react-router"
import HelpButton from "~/components/HelpButton";

const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <HelpButton />
            {/* Left Panel */}
            <div className="w-1/2 bg-[#964209] text-white flex flex-col justify-center items-center px-8">
                <img src="/Zelestra_Logo.png" alt="Zelestra Logo" className="h-8 mb-4" />
                <p className="text-center mb-6 pt-4">Making Decarbonization a Reality...</p>
                <button className="bg-white text-[#8B4513] px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                    Learn More
                </button>
            </div>

            {/* Right Panel */}
            <div className="w-1/2 bg-white flex justify-center items-center">
                <div className="w-full max-w-md p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

