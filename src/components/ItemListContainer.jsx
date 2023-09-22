import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Col, Row, Button, Container } from 'react-bootstrap'
import {db} from "../firebase/cliente";
import {getDocs, collection, query, where, limit, getDoc, doc} from 'firebase/firestore'


export default function ItemListContainer() {
 
  const[productos, setProductos]=useState([])
  const { id } = useParams()

 //traer la base de datos de la coleccion de firebase
 const productoRef=collection(db,"productos")


  /*Consulta a la base de datos "firebase" de los productos del almacen */
  useEffect(() => {
    const getProductos = async () => {
      const consulta = await getDocs(productoRef)
      const consultaFiltro = consulta.docs.map((doc) => ( {...doc.data(), id: doc.id}))
      console.log(consultaFiltro)
      setProductos(consultaFiltro)
    }
    getProductos();
  },[id]);

  return (
    <Container fluid className='mt-4'>
      <Row>
        {productos.map(doc => (
          <Col key={doc.id} lg={4} className='mb-4'>
            <Card>
              <Card.Img variant='top' src={doc.imagen} />
              <Card.Body>
                <Card.Title>{doc.nombre}</Card.Title>
                <Card.Text>{doc.descripcion}</Card.Text>
                {/*<Button variant='dark'>Mas Detalles</Button>*/}
                <Link to={`/detalle/${doc.id}`}>Mas Detalles</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}