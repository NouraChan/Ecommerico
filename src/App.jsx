import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Skeleton from './components/Skeleton/Skeleton';
import Details from './components/Product/Details';
import Exception from './components/Exception/Exception';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Order from './components/Order/Order';



let mainRoutes = createBrowserRouter([{
  path: '', element: <Skeleton />, children: [{ index: true, element: <Home /> }
    , { path: "*", element: <Exception /> }
    , { path: "product/:id", element: <Details /> }
    // , { path: "product/:id", element: <Details id={product.id} /> }

    , { path: "order", element: <Order /> }]
}]);

export default function App() {

  return <>
    <RouterProvider router={mainRoutes}></RouterProvider>
  </>

}
