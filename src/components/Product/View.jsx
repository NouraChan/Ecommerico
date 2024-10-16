



export default function View({ product }) { 

    return (
        <div className="row product-view my-4 justify-content-center">
            <div className="col-lg-2">
                <a href="#" className="d-block">
                    <img width={50} src={product.images[0]} alt="Product Image" className="img-fluid" />
                </a>
                <a href="#" className="d-block">
                    <img width={50} src={product.images[1]} alt="Product Image" className="img-fluid" />
                </a>
            </div>

            <div className="col-lg-4">
                <img width={600} src={product.images[0]} alt="Product Main Image" className="img-fluid" />
            </div>

            <div className="col-lg-6">
                <h2>{product.title}</h2>
                <p>Discount</p>
                <h5>$ {product.price}</h5>
                <div className="row gap-3 w-25">
                    <p>Choose Model</p>
                    <a href="#" className="rounded-circle bg-success w-25"><img width={30} src={product.images[0]} alt="Model" /></a>
                    <a href="#" className="bg-primary rounded-circle w-25"><img width={30} src={product.images[1]} alt="Model" /></a>
                </div>
                <div className="d-flex gap-3 my-4">
                    <a href="#" className="btn btn-outline-danger">-</a>
                    <span>0</span>
                    <a href="#" className="btn btn-outline-danger">+</a>
                    <a href="#" className="text-white btn btn-danger">
                        <img width={25} src="" alt="Cart Icon" /> Add to cart
                    </a>
                    <a href="#" className="btn btn-outline-danger">Cicil</a>
                </div>
            </div>
        </div>
    );
};