import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { db } from '../firebase/cliente';
import { getDocs, collection, query, where, getDoc, } from 'firebase/firestore';

//pendiente aplicar estilos para mejorar la visulización

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();
  const { id } = useParams();

  // Traer la base de datos de la colección de Firebase.
  const productoRef = collection(db, 'productos');

  /* Consulta a la base de datos "firebase" de los productos del almacén */
  useEffect(() => {
    setLoading(true);

    // Crear una consulta condicional en función de la categoría.
    const collectionRef = categoria
      ? query(collection(db, 'productos'), where('categoria', '==', categoria))
      : collection(db, 'productos');

    getDocs(collectionRef)
      .then((consulta) => {
        // Mapear los documentos y obtener sus datos.
        const productosFiltrados = consulta.docs.map((doc) => ({
          id: doc.id, ...doc.data(),
        }));
        setProductos(productosFiltrados);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, categoria]); // Agrega 'categoria' como una dependencia.

  return (
    <Container fluid className='mt-4'>
      <Row>
        {productos.map((doc) => (
          <Col key={doc.id} lg={4} className='mb-4'>
            <Card>
              <Card.Img variant='top' src={doc.imagen} />
              <Card.Body>
                <Card.Title>{doc.nombre}</Card.Title>
                <Card.Text>{doc.descripcion}</Card.Text>
                <Card.Text>{doc.categoria}</Card.Text>
                <Link to={`/detalle/${doc.id}`}>Más Detalles</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}