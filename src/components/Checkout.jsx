import { Timestamp, addDoc, collection, writeBatch } from 'firebase/firestore';
import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { db } from "../firebase/cliente";
import Formulario from './FormularioOrden';
import { CartContext } from './CartContext';

export default function Checkout({ detalle }) {
  const [cart, setCart] = useState(CartContext)

  const crearOrden = async ({ nombre, telefono, email }) => {
    const orden = {
      comprador: { nombre, telefono, email },
      items: cart,
      total: detalle.precio,
      fecha: Timestamp.fromDate(new Date())
    }
    const ordenCollection = collection(db, 'ordenes')
    addDoc(ordenCollection, orden).then(({ id }) => console.log(id))
  }
  return (
    <div>
      <h1>Realizar Compra</h1>
      {/*<FormularioOrden onConfirm={crearOrden}/>*/}

      <Button onClick={crearOrden} variant='dark'>Realizar Compra</Button>
    </div>
  );
}