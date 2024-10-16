import { useState } from "react";

export default function Slider() {

    let [] = useState();

    return <>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item p-5 active colthemefaint row">
                    <img src="..." class="d-block w-100" alt="..."></img>
                    <div><h2>Product</h2><hr />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aspernatur aliquam, cumque culpa accusantium sapiente ipsum modi quo dignissimos vero commodi, quasi neque possimus aut nesciunt quas nemo unde sit.</p>
                        <a href="#" className="text-dark fw-bold fs-f4">Discover</a></div>

                    <div className="row gap-3 justify-content-end p-5 prod-control">
                         <a href="#" className="text-white text-center text-nowrap w-25 coltheme1 p-2">Add to cart</a>
                    </div>
                </div>
                <div class="carousel-item p-5 active colthemefaint row">
                    <img src="..." class="d-block w-100" alt="..."></img>
                    <div><h2>Product</h2><hr />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aspernatur aliquam, cumque culpa accusantium sapiente ipsum modi quo dignissimos vero commodi, quasi neque possimus aut nesciunt quas nemo unde sit.</p>
                        <a href="#" className="text-dark fw-bold fs-f4">Discover</a></div>
                    <div className="row gap-3 justify-content-end p-5 prod-control">
                         <a href="#" className="text-white text-center text-nowrap w-25 coltheme1 p-2">Add to cart</a>
                    </div>
                </div>
                <div class="carousel-item p-5 active colthemefaint row">
                    <img src="..." class="d-block w-100" alt="..."></img>
                    <div><h2>Product</h2><hr />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aspernatur aliquam, cumque culpa accusantium sapiente ipsum modi quo dignissimos vero commodi, quasi neque possimus aut nesciunt quas nemo unde sit.</p>
                        <a href="#" className="text-dark fw-bold fs-f4">Discover</a></div>
                    <div className="row gap-3 justify-content-end p-5 prod-control">
                         <a href="#" className="text-white text-center text-nowrap w-25 coltheme1 p-2">Add to cart</a>
                    </div>
                </div>




            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>;
};
