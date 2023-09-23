import React from "react";

export const Cartwidget = () => {
    const itemCount = 0;//Se deja en 1 para que aparezca junto al carrito 
    return (
        <div className="cart-widget">
            <i className="bi bi-cart-plus-fill"></i>
            {itemCount > 1 && (
                <span className="badge bg-danger notification-badge">{itemCount}</span>
            )}
        </div>
    );
}
export default Cartwidget;