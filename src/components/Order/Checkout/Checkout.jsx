import { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";


export default function Checkout() {

    let [paymentDiv, setPaymentDiv] = useState(false);
    // let [productPrice, setProductPrice] = useState(10000);
    // let [productDesc, setProductDesc] = useState('lorem ipsum');


    function proceedOrder() {
        setPaymentDiv(!paymentDiv);

    }

    return <><div className="container">

        <form action="" method="post">
            <div className="row gap-4" >

                <div className="col-lg-5 mb-5 h-50">

                    <div className="row gap-4 mb-5 p-3 bg-white" >

                        <h2 className="mb-4">Order Details</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="pe-5"><h4>Subtotal :</h4></td>
                                    <td>0 EGP</td>
                                </tr>
                                <tr>
                                    <td className="pe-5"><h4>Shipping Cost :</h4></td>
                                    <td>0 EGP</td>
                                </tr>
                                <tr>
                                    <td><h4>Promocode :</h4></td>
                                    <td>0 EGP</td>
                                </tr>
                                <tr><td><h4>Packaging :</h4></td>
                                    <td>0 EGP</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <table>
                            <tfoot>
                                <tr>
                                    <td className="pe-5"><h4>Grand Total :</h4></td>
                                    <td>0 EGP</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    {/* {paymentDiv &&
                        <div className="row gap-4 p-3 bg-white h-25">
                            <h2 className="mb-4">Payment Details</h2>
                            <p>Please make a payment according with the limit time specified, starting from now</p>

                        </div>} */}

                </div>
                <div className="col-lg-6 p-3 bg-white mb-5">
                    <h2 className="mb-4">Billing Address</h2>
                    <div className="form-group">
                        <label className="text-capitalize" htmlFor="fullname">FullName</label>
                        <input type="text" name="fullname" placeholder="" className="form-control mb-3 border-0 form-texty" id="fullname"></input>
                    </div>
                    <div className="form-group">
                        <label className="text-capitalize" htmlFor="email">Email Address</label>
                        <input type="email" name="email" placeholder="" className="form-control mb-3 border-0 form-texty" id="email"></input>
                    </div>
                    <div className="form-group">
                        <label className="text-capitalize" htmlFor="phone">Phone number</label>
                        <input type="text" name="phone" placeholder="" className="form-control mb-3 border-0 form-texty" id="phone"></input>
                    </div>
                    <div className="form-group">
                        <label className="text-capitalize" htmlFor="address">shipping address</label>
                        <input type="text" name="address" placeholder="" className="form-control mb-3 border-0 form-texty" id="address"></input>
                    </div>
                    <div className="form-group">
                        <label className="text-capitalize" htmlFor="country">Country</label>
                        <select name="country" placeholder="" className="form-control mb-3 border-0 form-texty" id="country">
                            <option value="">Select</option>
                            <option value="egypt">Egypt</option>
                            <option value="saudiarabia">Saudi Arabia</option>
                            <option value="palestine">Palestine</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="text-capitalize" htmlFor="state">State/Province</label>
                        <select name="state" placeholder="" className="form-control mb-3 border-0 form-texty" id="state">
                            <option value="">Select</option>
                            <option value="cairo">Cairo</option>
                            <option value="alex">Alexandria</option>
                            <option value="giza">Giza</option>
                        </select>
                    </div>

                    <div className="d-inline-flex gap-5 w-100">
                        <div className="form-group w-50">
                            <label className="text-capitalize" htmlFor="city">city</label>
                            <select name="city" placeholder="" className="form-control mb-3 border-0 form-texty " id="city">
                                <option value="">Select</option>
                                <option value="maadi">Maadi</option>
                                <option value="darelsalam">DarElsalam</option>
                                <option value="mokattam">Mokattam</option>
                            </select>
                        </div>
                        <div className="form-group w-50">
                            <label className="text-capitalize" htmlFor="zip">zipcode</label>
                            <input type="text" name="zip" placeholder="EX:94024" className="form-control mb-3 border-0 form-texty " id="zip"></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="text-capitalize" htmlFor="courier">select courier</label>
                        <select name="courier" placeholder="" className="form-control mb-3 border-0 form-texty" id="courier">
                            <option value="">Select</option>
                            <option value="fedex">Fedex</option>
                            <option value="amazon">Amazon</option>
                            <option value="alibaba">Alibaba</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* {paymentDiv &&

                <div className="row gap-4 p-3 bg-white mb-5" >
                    <h2 className="mb-4">Payment Method</h2>

                </div>
            } */}
            <div className="d-flex justify-content-end mx-4 mb-4 gap-3">
                <Link to="../" className="colthemeoutline text-center text-nowrap w-25 p-2">Continue Shopping</Link>
                <Link to='payment' className="text-white text-center text-nowrap w-25 coltheme1 p-2 border-0" onClick={proceedOrder} >Place My Order</Link>
            </div>
        </form>
    </div>
    </>



}