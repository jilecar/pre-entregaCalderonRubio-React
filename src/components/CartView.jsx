import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router
import { CartContext } from "./CartContext";


const CartView = () => {
    const { cart, quitarCart, getTotal } = useContext(CartContext);

    return (
        <div style={containerStyle}>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div className="cart-item-container" key={item.detalle.id} style={itemContainerStyle}>
                            <span>{item.detalle.nombre}</span>
                            <span>{item.detalle.precio}</span>
                            <img src={item.detalle.imagen} alt="imagen producto" style={imageStyle} />
                            <span>Cantidad: {item.cantidad}</span>
                            <button onClick={() => quitarCart(item.detalle.id)}>
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <div>
                        <h2>Precio Total: {getTotal()}</h2>
                        <Link to="/formulario"> {/* Utiliza Link para crear un enlace */}
                            <button className="button">Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="cart-container">
                    <h1>No Hay Elementos En El Carrito</h1>
                    <Link to="/"> {/* Link para mostrar todos los productos*/}
                        <button className="button">Seguir Comprando</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartView;

//Algunos estilos - No es la mejor forma, pero son para visualizar mientras organizamos el proyecto
const containerStyle = {
    padding: "20px",
};

const itemContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
};

const imageStyle = {
    width: "100px",
    height: "100px",
    marginRight: "20px",
};