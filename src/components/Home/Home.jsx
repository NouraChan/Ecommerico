import { useEffect, useState } from "react";
import './Home.css';
import Categories from "./Categories";
import Deals from "./Deals";
import Series from "./Series";
import axios from "axios";
import Slider from "./Slider";



export default function Home() {



    return <>
        <div className="container">
            <Slider/>
            <Categories />
            <Deals />
            <Series />

        </div>
    </>;
};
