import { useState } from "react";
import './Home.css';
import Categories from "./Categories";
import Deals from "./Deals";

export default function Home() {

    let [] = useState();

    return <>
        <div className="container">
            <Categories />
            <Deals />
             </div>
    </>;
};
