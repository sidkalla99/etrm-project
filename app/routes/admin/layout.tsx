import React from 'react'
import {Outlet} from "react-router";
import Sidebar from "~/components/SideNavigationBar";


const Layout = () => {
    return (
        <div className="default-layout">
            <Sidebar />
            <div>
                <Outlet/>
            </div>
        </div>
    );
}
export default Layout