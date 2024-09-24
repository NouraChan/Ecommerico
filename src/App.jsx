import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Details from './components/Product/Details';




export default function App() {//header & footer & content

  createBrowserRouter([{
    path: "home", element: <Home />, children: [{}]
  }]);

  return <><div className="App container-fluid">
    <section>
      <nav className="navbar navbar-expand-sm justify-content-center mb-2 navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-start" href="home"> <img src='img/923d23ccee9da5bc510b8d159f185505.png'/>
          </a> <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"> <span className="navbar-toggler-icon"></span> </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-4 controlsbar">
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#">Watches</a> </li>
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#">Eyewear</a>
              </li>
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#">Accessories </a>
              </li>
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#">News</a> </li>
            </ul>
            <ul className="navbar-nav me-4 ">
          
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#"><img src="img/search.png" alt="" srcset=""/></a>
              </li>
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#"><img src="img/search.png" alt="" srcset=""/>login </a>
              </li>
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize cartbtn"
                href="#"><img src="img/cart.png" alt="" srcset=""/></a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>


{/* <Home/> */}
<Details/>



    <section>
      <div className="container-fluid">
        <div className="row footer layout7">
          <div className="col-md-4">
            <h5 className="ulhead fw-bold lh-lg">Get In Touch</h5>
            <ul className="contacts">
              <li>
                <h6 className="fw-normal lh-lg"><img src="images/bx_bx-phone.png" alt="" className="contacticn"></img>(480) 555-0103</h6>
              </li>
              <li>
                <h6 className="fw-normal lh-lg"><img src="images/bx_bx-map.png" alt="" className="contacticn"></img>4517 Washington Ave. Manchester, Kentucky 39495</h6>
              </li>
              <li>
                <h6 className="fw-normal lh-lg"><img src="images/carbon_send-alt.png" alt="" className="contacticn"></img>debra.holt@example.com</h6>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footerlinks fw-normal lh-lg">
            <h5 className="ulhead fw-bold lh-lg">Company Info</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2 footerlinks lh-lg">
            <h5 className="ulhead fw-bold lh-lg">Legal</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2 footerlinks fw-normal lh-lg">
            <h5 className="ulhead fw-bold lh-lg">Features</h5>
            <ul>
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytic</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>
          <div className="col-md-2 footerlinks fw-normal lh-lg">
            <h5 className="ulhead fw-bold lh-lg">Resources</h5>
            <ul>
              <li><a href="#">IOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>


        </div>
      </div>
    </section>

  </div></>

}
