import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Skeleton from './components/Skeleton/Skeleton';
import Details from './components/Product/Details';
import Exception from './components/Exception/Exception';
import Checkout from './components/Order/Checkout/Checkout';
import Payment from './components/Order/Payment/Payment';
import Confirm from './components/Order/Confirm';



let mainRoutes = createBrowserRouter([{
  path: '', element: <Skeleton />, children: [{ index: true, element: <Home /> }
    , { path: "*", element: <Exception /> }
    , { path: "product/:id", element: <Details /> }
    , { path: "payment", element: <Payment /> }
    , { path: "confirm", element: <Confirm /> }
    , { path: "checkout", element: <Checkout /> } ]
}]);
// , { path: "product/:id", element: <Details id={product.id} /> }


export default function App() {

  return <>
    <RouterProvider router={mainRoutes}></RouterProvider>
  </>

}
