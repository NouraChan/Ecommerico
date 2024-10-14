import { useState } from "react";
// import "./Details.css";
// import View from "./View";
// import Desc from "./Desc";
// import Related from "./Related";

export default function Checkout() {

    // let [productName, setProductName] = useState('Iphone');
    // let [productPrice, setProductPrice] = useState(10000);
    // let [productDesc, setProductDesc] = useState('lorem ipsum');


    // function applyOffer() {

    //     productPrice = productPrice*0.9
    //     setProductPrice(productPrice)

    // }

    return <>
        <div className="container">
            <div className="row gap-4" >
                <div className="col-lg-5 p-3">
                    <h2 className="mb-4">Order Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td><h4>Subtotal :</h4></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><h4>Shipping Cost :</h4></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><h4>Promocode :</h4></td>
                                <td></td>
                            </tr>
                            <tr><td><h4>Packaging :</h4></td>
                                <td></td>
                            </tr>
                            <hr />
                            <tr><td><h4>Grand Total :</h4></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-lg-5 p-3">
                <h2 className="mb-4">Billing Address</h2>
                <form action="" method="post">
                    <input type="text" value="" name="fullname"></input>
                </form>


                </div>
            </div>
        </div>
    </>



}