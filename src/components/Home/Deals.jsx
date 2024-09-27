import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import axios from "axios";

export default function Deals() {


    let [products, setProducts] = useState([]);

    async function getProductsData() {
        let latestProducts = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(latestProducts.data);

    };

    useEffect(() => {
        getProductsData();

    })


    // createBrowserRouter([{
    //     path: `details`, element: <Details />, children: [{}]
    //   }]);
    //   createBrowserRouter([{
    //     path: `details/${id}`, element: <Details />, children: [{}]
    //   }]); 

    return <>
        <section className="my-5">
            <h2 className="my-4">Latest products</h2>
            <div className="row justify-content-evenly">
                {products.map((product) => 
                <div className="col-lg-3 bg-white p-5" key={product.id}>
                    <Link to="product" ><img src={product.images[0]} alt="1" srcset="" width={200} className=" rounded mb-4" /></Link>
                    <h4>{product.title}</h4>
                    <p>offer</p>
                    <h4>$ {product.price}</h4>
                    <div className="row gap-3 prod-control">
                        <a href="#" className="btn btn-outline-danger w-25"><img src="" alt="" srcset=""  /></a> <a href="#" className="text-white text-center text-nowrap w-50 coltheme1">Add to cart</a>
                    </div>
                </div>)}
                {/*            
                <div className="col-lg-3 bg-white" onMouseEnter="">
                <a href="details"><img src="" alt="2" srcset="" /></a>
                <h4>Name</h4>
                    <p>offer</p>
                    <h4>$ Price</h4>
                    <div className="row gap-3 prod-control">
                        <a href="#" className="btn btn-outline-danger w-25"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap w-50 coltheme1">Add to cart</a>
                    </div>
                </div>
                <div className="col-lg-3 bg-white" onMouseEnter="">
                <a href="details"><img src="" alt="3" srcset="" /></a>
                <h4>Name</h4>
                    <p>offer</p>
                    <h4>$ Price</h4>
                    <div className="row gap-3 prod-control">
                        <a href="#" className="btn btn-outline-danger w-25"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap w-50 coltheme1">Add to cart</a>
                    </div>
                </div>
                <div className="col-lg-3 bg-white" onMouseEnter="">
                <a href="details"><img src="" alt="4" srcset="" /></a>
                <h4>Name</h4>
                    <p>offer</p>
                    <h4>$ Price</h4>
                    <div className="row gap-3 prod-control">
                        <a href="#" className="btn btn-outline-danger w-25"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap w-50 coltheme1">Add to cart</a>
                    </div>
                </div> */}

            </div>
        </section>
    </>;
};
