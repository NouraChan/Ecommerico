import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Skeleton() {

    let [] = useState();

    return <>
        <div className="App container-fluid">
            <Navbar />
            <Outlet />
            <Footer />
        </div>

    </>;
};
