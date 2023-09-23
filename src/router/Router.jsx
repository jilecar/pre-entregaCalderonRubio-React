import React from "react";
import '../App.css';
import Navbar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "../components/CartContext";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Checkout from "../components/Checkout";

export default function Router() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        {/*Busqueda de categorias por id */}
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        {/*<Route path="/cart" element={<CartView />}/>*/}
        <Route path="/Checkout" element={<Checkout />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}