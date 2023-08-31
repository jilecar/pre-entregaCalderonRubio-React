
import PropTypes from 'prop-types';

export default function ItemDetail({ detalle }) {
    return (
        <div>
            <h1>{detalle.nombre}</h1>
            <p>{detalle.descripcion}</p>
            <h2>{detalle.precio}</h2>
        </div>
    )
}