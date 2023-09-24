import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import carticon from "../asset/carticon.png"; // Importa la imagen del carrito

//Deseo que siempre este visible, aplicando los cambios a medida que el usuario va agregando los productos

export const Cartwidget = () => {
    const { getTotal } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <Link to="/cart">
                <img src={carticon} alt="Carrito" className="icon" />
                <span className="cantidad">${getTotal()}</span>
            </Link>
        </div>
    )
};

export default Cartwidget;
