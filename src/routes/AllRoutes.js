import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { DashbaordPage, HomePage, PageNotFound } from '../pages';
import { ProductList, Login, SignUp, ProductDetail } from '../pages';
import { CartPage } from '../pages/Cart/CartPage'
import {OrderPage} from '../pages/Order/OrderPage'
import { useSession } from '../context/sessionContext';


function AllRoutes() {

  const { isLogged } = useSession()

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
       
        <Route path='/cart' element={isLogged ? <CartPage /> : <Navigate to='/login' />} />
        <Route path='/order-summary' element={isLogged ? <OrderPage /> : <Navigate to='/login' />} />
        <Route path='/Dashboard' element={isLogged ? <DashbaordPage /> : <Navigate to='/login' />} />
        
        <Route path='/products' element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path='*'element={<PageNotFound />}  />
      </Routes>
    </main>
  );
}

export default AllRoutes;