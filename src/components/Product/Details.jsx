import { useState } from "react";
import View from "./View";
import Desc from "./Desc";
import Related from "./Related";

export default function Details() {

    // let [productName, setProductName] = useState('Iphone');
    // let [productPrice, setProductPrice] = useState(10000);
    // let [productDesc, setProductDesc] = useState('lorem ipsum');


    // function applyOffer() {
        
    //     productPrice = productPrice*0.9
    //     setProductPrice(productPrice)
        
    // }

    return <>
    <div className="container">
            <View />
            <Desc />
            <Related/>
             </div>
    </>



}