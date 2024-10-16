import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import axios from "axios";

export default function Deals() {


    let [products, setProducts] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [productsPerpage] = useState(4);
    // let [totalObjects, setTotal] = useState(0);


    async function getProductsData() {
        let latestProducts = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(latestProducts.data);

    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * productsPerpage;
    const endIndex = startIndex + productsPerpage;

    useEffect(() => {
        getProductsData();

    }, [currentPage, productsPerpage])

    return <>
        <section className="my-5">
            <h2 className="my-4">Latest products</h2>
            <div className="row justify-content-evenly">
                {products.slice(startIndex, endIndex).map((product) =>
                    <div className="col-lg-3 bg-white p-4" key={product.id}>
                        <div> <Link to={`product/${product.id}`} className="text-dark"><img src={product.images[0]} alt="1" srcSet="" width={200} className=" rounded mb-4" />
                        <h5 className="fs-6">{product.title}</h5>
                        <p>offer</p>
                        <h4>$ {product.price}</h4></Link></div>
                       
                        <div className="row gap-3 prod-control">
                            <a href="#" className="btn btn-outline-danger w-25"><img src="" alt="" srcSet="" /></a> <a href="#" className="text-white text-center text-nowrap w-50 coltheme1 p-2">Add to cart</a>
                        </div>
                    </div>)}
 

            </div>
        </section>
    </>;
};
