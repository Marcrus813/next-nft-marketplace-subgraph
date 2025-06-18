import React from "react";

import Header from "./Header";
import Meta from "./Meta";
import { Toaster } from "react-hot-toast";
// import LowLevelHeader from "@/components/LowLevelHeader";

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Header />
            <Toaster />
            {children}
        </>
    );
};
export default Layout;
