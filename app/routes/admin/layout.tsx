// import React from 'react'
// import {Outlet} from "react-router";
// import Sidebar from "~/components/SideNavigationBar";
//
//
// const Layout = () => {
//     return (
//         <div className="default-layout">
//             <div className="glow-circle circle-yellow" />
//             <div className="glow-circle circle-orange" />
//             <main>
//                 <Sidebar/>
//                 <div>
//                     <Outlet/>
//                 </div>
//             </main>
//             {/*<div className="relative w-full h-screen overflow-hidden bg-white text-black">*/}
//             {/*    /!* Glow Circles *!/*/}
//             {/*    <div className="absolute top-[10%] right-[10%] w-[30vw] max-w-[400px] aspect-square rounded-full bg-[#FFE500] opacity-95 z-0 blur-[300px] md:w-[45vw] md:blur-[90px] sm:w-[60vw] sm:blur-[70px]" />*/}
//             {/*    <div className="absolute bottom-[10%] left-[10%] w-[30vw] max-w-[400px] aspect-square rounded-full bg-[#FF6A00] opacity-95 z-0 blur-[300px] md:w-[45vw] md:blur-[90px] sm:w-[60vw] sm:blur-[70px]" />*/}
//
//             {/*    /!* Page Content *!/*/}
//             {/*    <div className="relative z-10">*/}
//             {/*        <Sidebar />*/}
//             {/*        <div>*/}
//             {/*            <Outlet/>*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//         </div>
//     );
// }
// export default Layout
import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '~/components/SideNavigationBar';

const Layout = () => {
    return (
        <div className="flex h-screen w-full">
            {/* Sidebar (no glow) */}
            <aside className="w-64 shrink-0 border-r border-gray-200 z-10 bg-white">
                <Sidebar />
            </aside>

            {/* Main content with background glow */}
            <main className="relative flex-1 overflow-auto bg-white text-black">
                {/* Glow Circles */}
                <div className="glow-circle circle-yellow" />
                <div className="glow-circle circle-orange" />
                {/*<aside className="w-64 shrink-0 border-r border-gray-200 z-10 bg-white">*/}
                {/*    <Sidebar />*/}
                {/*</aside>*/}
                {/* Routed page */}
                <div className="relative z-10 p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
