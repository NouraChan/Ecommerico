import { useState } from "react";

export default function View(product) {

    let [] = useState();

    
    return <>
        <div className="row product-view my-4 justify-content-center">
            <div className="col-lg-2"><a href="#" className="d-block"><img src={product.images} alt="1" srcSet="" /></a><a href="#" className="d-block"><img src="" alt="2" srcSet="" /></a> </div>
            <div className="col-lg-4">
                <img src="" alt="" srcSet="" />
            </div>
            <div className="col-lg-6">
                <h2>{product.title}</h2>
                <p>discount</p>
                <h5>$ {product.price}</h5>
                <div className="row gap-3 w-25">
                    <p>Choose Model</p>

                    <a href="#" className="rounded-circle bg-success w-25"><img src="" alt="" /></a> <a href="#" className="bg-primary rounded-circle w-25"> <img src="" alt="" /></a>
                </div>
                <div className="d-flex gap-3 my-4">
                    <a href="#" className="btn btn-outline-danger">-</a> <span>0</span> <a href="#" className="btn btn-outline-danger">+</a> 
                    <a href="#" className="text-white btn btn-danger"><img src="" alt="" srcSet="" />Add to cart</a>
                    <a href="#" className="btn btn-outline-danger">Cicil</a>
                </div>

            </div>


        </div>
    </>;
};
