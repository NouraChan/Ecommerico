import { useState } from "react";
import './Footer.css';
import footerlogo from '../../img/image 30.png';
import visa from '../../img/image 29.png';
import mscard from '../../img/image 27.png';
import uob from '../../img/image 34.png';
import permata from '../../img/image 26.png';
import kerdivo from '../../img/image 33.png';
import bni from '../../img/image 25.png';
import mandiri from '../../img/image 32.png';
import gopay from '../../img/image 35.png';
import danamon from '../../img/image 28.png';
import chartered from '../../img/image 36.png';


export default function Footer() {

  let [] = useState();

  return <>
    <section>
      <div className="container-fluid">
        <div className="row footer2 layout7">
          <div className="col-2"><img width={100} src={bni} alt="" /></div>
          <div className="col-2"><img width={100} src={permata} alt="" /></div>
          <div className="col-2"><img width={100} src={mscard} alt="" /></div>
          <div className="col-2"><img width={100} src={danamon} alt="" /></div>
          <div className="col-2"><img width={100} src={visa} alt="" /></div>
          <div className="col-2"><img width={100} src={mandiri} alt="" /></div>
          <div className="col-2"><img width={100} src={kerdivo} alt="" /></div>
          <div className="col-2"><img width={100} src={uob} alt="" /></div>
          <div className="col-2"><img width={100} src={gopay} alt="" /></div>
          <div className="col-2"><img width={100} src={chartered} alt="" /></div>
        </div>

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
              <li><a href="#">Warrany & Complaints</a></li>
              <li><a href="#">Order & Shipping</a></li>
              <li><a href="#">Tracking Order</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Repair</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-2 footerlinks fw-normal lh-lg">
            <h5 className="ulhead fw-bold lh-lg">Campaign</h5>
            <ul>
              <li><a href="#">Mangenal Arti Cukup</a></li>
              <li><a href="#">Tell Your Difference</a></li>
              <li><a href="#">Waykambas</a></li>
              <li><a href="#">Rebrand</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Singo</a></li>
              <li><a href="#">Rakai</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>;
};
