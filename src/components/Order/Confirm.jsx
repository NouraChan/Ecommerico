import { useState } from "react";
import { Link } from "react-router-dom";

export default function Confirm() {

let [] = useState();
    
      
return <><div className="container">

<form action="" method="post">
    <div className="row gap-4 justify-content-center" >

        <div className="col-lg-5 mb-5 h-75 bg-white p-3">

                <h2 className="mb-4">Order Details</h2>
                <table>
                    <tbody>
                        <tr>
                            <td className="pe-5"><h4>Subtotal :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                        <tr>
                            <td className="pe-5"><h4>Shipping Cost :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                        <tr>
                            <td><h4>Promocode :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                        <tr><td><h4>Packaging :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table>
                    <tfoot>
                        <tr>
                            <td className="pe-5"><h4>Grand Total :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        <div className="col-lg-5 p-3 bg-white mb-5">
        <h2 className="mb-4">Order Details</h2>
                <table>
                    <tbody>
                        <tr>
                            <td className="pe-5"><h4>Subtotal :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                        <tr>
                            <td className="pe-5"><h4>Shipping Cost :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                        <tr>
                            <td><h4>Promocode :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                        <tr><td><h4>Packaging :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table>
                    <tfoot>
                        <tr>
                            <td className="pe-5"><h4>Grand Total :</h4></td>
                            <td>0 EGP</td>
                        </tr>
                    </tfoot>
                </table>
        </div>
    </div>

    
    <div className="d-flex justify-content-end mx-4 mb-4 gap-3">
    <Link to='/confirm' className="text-white text-center text-nowrap w-25 coltheme1 p-2 border-0" >Proceed Payment</Link>
    </div>
</form>
</div>
</>



}