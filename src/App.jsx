import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Skeleton from './components/Skeleton/Skeleton';
import Details from './components/Product/Details';
import Checkout from './components/Order/Checkout';
import Exception from './components/Exception/Exception';


let mainRoutes = createBrowserRouter([{
  path: '', element: <Skeleton />, children: [{ index: true, element: <Home /> }
    , { path: "*", element: <Exception /> }
    , { path: "product", element: <Details /> }
    , { path: "checkout", element: <Checkout /> }]
}]);

export default function App() {

  return <>
    <RouterProvider router={mainRoutes}></RouterProvider>
  </>

}
