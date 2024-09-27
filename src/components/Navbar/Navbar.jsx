import { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {

let [] = useState();
    
        return <> 
           <section>
      <nav className="navbar navbar-expand-sm justify-content-center mb-2 navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-start" to="/"> <img src='img/923d23ccee9da5bc510b8d159f185505.png'/>
          </Link> 
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
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
              <li className="nav-item"> <Link
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize cartbtn"
                to="checkout"><img src="img/cart.png" alt="" srcset=""/></Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  
        </>;
    };
