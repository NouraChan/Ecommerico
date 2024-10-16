import { useEffect, useState } from "react";
import "./Details.css";
import View from "./View";
import Desc from "./Desc";
import Related from "./Related";
import { useParams } from 'react-router-dom';
import axios from "axios";


export default function Details() {

    const { id } = useParams();

    const params = useParams();

    let [product, setProduct] = useState();

    async function getProductData() {
        let productdata = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.productId}`);
        setProduct(productdata.data);
console.log(productdata);

    };


    useEffect(() => {
        getProductData();
    }, [params.productId])



    return <>
        <div className="container">
            <View product={product}/>
            <Desc product={product}/>
            <Related />
        </div>
    </>



}