import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Col, Row, Button, Container } from 'react-bootstrap'
import img from '../asset/img/nuevoproducto.png'

export default function ItemListContainer() {
  /*almacenar o cargar productos*/
  const [items, setItems] = useState([])

  const { id } = useParams();
  /*Consulta a la base de datos "json" de los productos del almacen */

  useEffect(() => {
    const getProductos = async () => {
      const consulta = await fetch('/data/productos.json')
      const productos = await consulta.json();

      const productosFiltrados = productos.filter(producto => producto.categoria === id)

      if (productosFiltrados.length > 0) return setItems(productosFiltrados)

      console.log(productosFiltrados)
      setItems(productos)
    }
    getProductos();
  }, [id]);

  return (
    <Container fluid className='mt-4'>
      <Row>
        {items.map(item => (
          <Col key={item.id} lg={4} className='mb-4'>
            <Card>
              <Card.Img variant='top' src={img} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                {/*<Button variant='dark'>Mas Detalles</Button>*/}
                <Link to={`/detalle/${item.id}`}>Mas Detalles</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
