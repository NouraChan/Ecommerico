import { useEffect, useState } from "react";
import './Home.css';
import Categories from "./Categories";
import Deals from "./Deals";
import axios from "axios";



export default function Home() {



    return <>
        <div className="container">
            <Categories />
            <Deals />
        </div>
    </>;
};
