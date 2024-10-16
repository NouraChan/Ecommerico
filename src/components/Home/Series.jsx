import { useState,useEffect } from "react";
import axios from "axios";

export default function Series() {


    let [products, setProducts] = useState([]);
    // let [currentPage, setCurrentPage] = useState(1);
    // let [productsPerpage] = useState(3);
    // let [totalObjects, setTotal] = useState(0);


    async function getProductsData() {
        let latestProducts = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(latestProducts.data);

    };

    let datafilter = [15,50,40];
    let datacloth = "Clothes";
    let datamisc = "Miscellaneous";
    let datashoes = "Shoes";

    useEffect(() => {
        getProductsData();

    })
    
        return <>   
          <section>
            <div className="row gap-5 my-4 justify-content-center">
            {products.filter(productCategory=>datafilter.includes(productCategory.id)).map((product) =>
                <div className="col-lg-3 col-sm-12 bg-white text-dark">
                    <h3 className="my-4">{product.category.name}</h3>
                                {products.filter(productCategory=>datafilter.includes(productCategory.id)).map((product) =>
                                // {products.filter(productCategory=>datacloth.includes(productCategory.category.name)).map((product) =>

                    <a href="#" className="text-dark"><div className="row g-3"><div className="col-4"><img src={product.images[0]} alt="" srcSet="" width={50} /></div><div className="col-7"><h5>{product.title}</h5><h4>{product.price} EGP</h4></div></div></a>)}
                </div>)}
          
            </div>
        </section>
        </>;
    };
