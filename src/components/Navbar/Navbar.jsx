import { useState, useEffect } from "react";
import './Navbar.css';
import axios from "axios";
import { Link } from "react-router-dom";
import applogo from '../../img/923d23ccee9da5bc510b8d159f185505.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faUser , faBagShopping, faShoppingCart, faShoppingBag} from '@fortawesome/free-solid-svg-icons';




export default function Navbar() {

    let [categories, setCategories] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [categorieslimited] = useState(3);
    let [totalObjects, setTotal] = useState(0);

    async function getCategoriesData() {
        let categoriesData = await axios.get('https://api.escuelajs.co/api/v1/categories');
        // let catarray =  JSON.stringify(categoriesData);
        // let categories3 = categoriesData.splice(2,10);
        setCategories(categoriesData.data);

    };


    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
  };

    const startIndex = (currentPage - 1) * categorieslimited;
    const endIndex = startIndex + categorieslimited;





    useEffect(() => {
        getCategoriesData();

    }, [currentPage, categorieslimited])

        return <> 
           <section>
           <div className="container">
      <nav className="navbar navbar-expand-sm justify-content-center mb-2 navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-start" to="/"> <img src={applogo} width={150}/>
          </Link> 
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"> <span className="navbar-toggler-icon"></span> </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-4 controlsbar">
            {categories.slice(startIndex, endIndex).map((category) => 
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#">{category.name}</a> </li> )}
               <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#">News</a> 
              </li>
            </ul>
            <ul className="navbar-nav me-4 ">
          
              <li className="nav-item"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#"><FontAwesomeIcon icon={faSearch} className="text-dark"/></a>
              </li>
              <li className="nav-item text-nowrap"> <a
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize"
                href="#"><FontAwesomeIcon icon={faUser} className="text-dark"/> <span>login </span></a>
              </li>
              <li className="nav-item"> <Link
                className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-capitalize cartbtn"
                to="checkout"><FontAwesomeIcon icon={faShoppingBag} className="text-dark"/></Link> </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </section>
  
        </>;
    };
