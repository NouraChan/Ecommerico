import { useState } from "react";

export default function Details() {

    let [productName, setProductName] = useState('Iphone');
    let [productPrice, setProductPrice] = useState(10000);
    let [productDesc, setProductDesc] = useState('lorem ipsum');


    function applyOffer() {
        
        productPrice = productPrice*0.9
        setProductPrice(productPrice)
        
    }

    return <>
        <div className="row g-4">
            <div className="col-lg-12">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                            <div className="">
                                <a href="">
                                    <img
                                        src="" className="img-fluid w-100 rounded-top"
                                        alt="" style={{ height: 400 }}></img></a>
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                >Sale</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                <h4>{productName}</h4>
                                <p>{productDesc}</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">${productPrice}</p>
                                    <a href="#" onClick={applyOffer}
                                        className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                            className="fa fa-shopping-bag me-2 text-primary"></i>Take 10% offer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>



}