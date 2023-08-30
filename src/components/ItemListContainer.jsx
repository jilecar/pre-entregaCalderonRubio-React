import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import img from 

function ItemListContainer({greeting}) {
  /*almacenar o cargar productos*/
  const[almacen,setItems]=useState([])
  /*Consulta a la base de datos "json" de los productos del almacen */
  const getProductos=async()=>{
    const consulta=await fetch()
    const productos=await consulta.json
    setItems(productos)
  }
  return (
    <div className="item-list-container">
      <h3>{greeting}</h3>
      <p>¡Todo lo que necesita su negocio!</p>
    </div>
  );
}

export default ItemListContainer;