import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import axios from "axios";

export default function Deals() {


    let [products, setProducts] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [productsPerpage] = useState(4);
    let [totalObjects, setTotal] = useState(0);


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
                    <div className="col-lg-3 bg-white p-5" key={product.id}>
                        <Link to="product" ><img src={product.images[0]} alt="1" srcset="" width={200} className=" rounded mb-4" /></Link>
                        <h4>{product.title}</h4>
                        <p>offer</p>
                        <h4>$ {product.price}</h4>
                        <div className="row gap-3 prod-control">
                            <a href="#" className="btn btn-outline-danger w-25"><img src="" alt="" srcset="" /></a> <a href="#" className="text-white text-center text-nowrap w-50 coltheme1">Add to cart</a>
                        </div>
                    </div>)}
                {/* <div>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <span>Page {currentPage} of {Math.ceil(totalObjects / productsPerpage)}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(totalObjects / productsPerpage)}>Next</button>
                </div> */}



            </div>
        </section>
    </>;
};
