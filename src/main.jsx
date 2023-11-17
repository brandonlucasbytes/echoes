import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import Products from './pages/products/Products.jsx';
import Product from './pages/product/Product.jsx';
import OrderSuccess from './pages/order/ordersuccess/OrderSuccess.jsx';
import OrderCancel from './pages/order/ordercancel/OrderCancel.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/*" element={<Products />} />
      <Route path="product/:id" element={<Product />}/>
      <Route path="success" element={<OrderSuccess />} />
      <Route path="cancel" element={<OrderCancel />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
