import { useState } from "react";
import { Link } from "react-router-dom";


export default function Deals() {

    let [] = useState();
    // createBrowserRouter([{
    //     path: `details`, element: <Details />, children: [{}]
    //   }]);
    //   createBrowserRouter([{
    //     path: `details/${id}`, element: <Details />, children: [{}]
    //   }]);

    return <>
        <section className="my-5">
            <h2 className="my-4">Latest Deals</h2>
            <div className="row justify-content-evenly">
            <div className="col-lg-2 bg-white">
                    <Link to="product" ><img src="" alt="1" srcset="" /></Link>
                    <h4>Name</h4>
                    <p>offer</p>
                    <h4>$ Price</h4>
                    <div className="row">
                        <a href="#"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap coltheme1">Add to cart</a>
                    </div>
                </div>
                <div className="col-lg-2 bg-white">
                <a href="details"><img src="" alt="2" srcset="" /></a>
                <h4>Name</h4>
                    <p>offer</p>
                    <h4>$ Price</h4>
                    <div className="row">
                        <a href="#"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap coltheme1">Add to cart</a>
                    </div>
                </div>
                <div className="col-lg-2 bg-white">
                <a href="details"><img src="" alt="3" srcset="" /></a>
                <h4>Name</h4>
                    <p>offer</p>
                    <h4>$ Price</h4>
                    <div className="row">
                        <a href="#"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap coltheme1">Add to cart</a>
                    </div>
                </div>
                <div className="col-lg-2 bg-white">
                <a href="details"><img src="" alt="4" srcset="" /></a>
                <h4>Name</h4>
                    <p>offer</p>
                    <h4>$ Price</h4>
                    <div className="row">
                        <a href="#"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap coltheme1">Add to cart</a>
                    </div>
                </div>

            </div>
        </section>
    </>;
};
