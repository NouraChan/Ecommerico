import { useState } from "react";
import './Home.css';
import Categories from "./Categories";
import Deals from "./Deals";
import { createBrowserRouter } from "react-router-dom";
import Details from "../Product/Details";

export default function Home() {

    let [] = useState();
  

    return <>
        <div className="container">
            <Categories />
            <Deals />
             </div>
    </>;
};
