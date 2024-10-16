import { useState } from "react";
import './Footer.css';
import footerlogo from '../../img/image 30.png';

export default function Footer() {

let [] = useState();
    
        return <>   
          <section>
      <div className="container-fluid">
        <div className="row footer layout7">
          <div className="col-lg-3">
          <h5 className="ulhead fw-bold lh-lg"><img src={footerlogo} width={150} alt="" /></h5>
          
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
          <div className="col-lg-4 footerlinks fw-normal lh-lg">
          <h5 className="ulhead fw-bold lh-lg">Get In Touch</h5>
          <table className="text-white">
            <tr>
              <td><h6 className="fw-normal lh-lg pe-5">Address</h6></td>
              <td><h6 className="fw-normal lh-lg">Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung, Jawa Barat, Indonesia 40152</h6>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
            <ul>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2 footerlinks lh-lg">
            <h5 className="ulhead fw-bold lh-lg">Useful Links</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2 footerlinks fw-normal lh-lg">
            <h5 className="ulhead fw-bold lh-lg">Campaign</h5>
            <ul>
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytic</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
        </>;
    };
