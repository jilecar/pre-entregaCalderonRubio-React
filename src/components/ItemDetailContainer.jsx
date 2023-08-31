import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProducto = async () => {
            const consulta = await fetch('/data/productos.json')
            const productos = await consulta.json();

            const productoFiltrado = productos.find(producto => producto.id === parseInt(id))

            setDetalle(productoFiltrado)
        }
        getProducto()
    }, [id])
    return (
        <ItemDetail detalle={detalle} />
    )
}