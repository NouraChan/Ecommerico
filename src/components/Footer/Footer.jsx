import { useState } from "react";
import './Footer.css';
import footerlogo from '../../img/image 30.png';

export default function Footer() {

let [] = useState();
    
        return <>   
          <section>
      <div className="container-fluid">
        <div className="row footer layout7">
          <div className="col-lg-4">
          <h5 className="ulhead fw-bold lh-lg"><img src={footerlogo} width={150} alt="" /></h5>
          
          <ul className="contacts">
              <li>
              <h6 className="fw-semibold lh-lg pe-5">Address</h6></li>
              <li>
              <h6 className="fw-normal lh-lg">Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung, Jawa Barat, Indonesia 40152</h6>
              </li>
              <li>
                <h6 className="fw-normal lh-lg">Office Hours</h6>
              </li>
              <li>
                <h6 className="fw-normal lh-lg">Monday-Sunday</h6>
                <h6>10.00 - 18.00</h6>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 footerlinks fw-normal lh-lg">
          <h5 className="ulhead fw-bold lh-lg">Get In Touch</h5>
          <table className="text-white">
            <tr>
              <td className=""><h6 className="fw-bold lh-lg pe-5 text-center">Phone</h6></td>
              <td><h6 className="fw-normal lh-lg">022-20277564</h6></td>
            </tr>
            <tr>
            <td className=""><h6 className="fw-bold lh-lg pe-5 text-center">Service Center</h6></td>
            <td><h6 className="fw-normal lh-lg">0811-233-8899</h6></td>
            </tr>
            <tr>
            <td className=""><h6 className="fw-bold lh-lg pe-5 text-center">Customer Service</h6></td>
            <td><h6 className="fw-normal lh-lg">0811-235-9988</h6></td>
            </tr>
          </table>
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
