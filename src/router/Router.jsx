import React from "react";
import '../App.css';
import Navbar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import{BrowserRouter,Routes,Route}from 'react-router-dom'

export default function Router(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          {/*Busqueda de categorias por id */}
          <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        </Routes>
        </BrowserRouter>
    )
}