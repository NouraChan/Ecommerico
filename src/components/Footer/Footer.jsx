import { useState } from "react";
import './Footer.css';

export default function Footer() {

let [] = useState();
    
        return <>   
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
        </>;
    };
