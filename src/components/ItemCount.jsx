import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ItemCount({ onAdd }) {
    // almacenar la cantidad seleccionada
    const [cantidad, setCantidad] = useState(1);

    // Agegar cantidad
    const agregarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    // Eliminar cantidad
    const eliminarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="mt-3">
            <button onClick={eliminarCantidad} className="btn btn-secondary">-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={agregarCantidad} className="btn btn-primary">+</button>
            <div>
                <Button onClick={() => onAdd(cantidad)} variant='dark'>Agregar al Carrito</Button>
            </div>
        </div>

    );
}

export default ItemCount;