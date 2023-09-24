import { createContext, useContext, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";

export const CartContext = createContext({})
const { Provider } = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue)

    //Limpiar carrito
    const limpiarCart = () => {
        setCart([])
    }

    //agregar al carrito
    const addToCart = (detalle, cantidad) => {

        //comprobar si el producto ya esta en el carrito, si esta solo se modifica el
        if (isInCart(detalle.id)) {
            const newCart = [...cart]//copia del carrito
            //recorrer elementos o items de la copia del carrito para identificar el producto
            for (const item of newCart) {
                if (item.detalle.id === detalle.id) {
                    item.cantidad = item.cantidad + cantidad; //modifico el campo "cantidad", sumando al valor anterior con el nuevo
                }
            }
            setCart(newCart);

        } else {
            setCart([...cart,
            {
                detalle: detalle,
                cantidad: cantidad
            }])
        }

    }

    //Si el producto ya esta en el carrito
    const isInCart = (id) => {
        return cart.find((item) => item.detalle.id === id)
    }

    //Quitar del carrito
    const quitarCart = (id) => {
        const newCart = [...cart].filter(item => item.detalle.id !== id)
        setCart(newCart)
    }

    //Obtener la cantidad de elementos a comprar
    const getCantidad = () => {
        let cantidad = 0
        cart.forEach((item) => cantidad = cantidad + item.cantidad)
        return cantidad
    }

    //Obtner el total costo
    const getTotal = () => {
        let total = 0
        cart.forEach((item) => {
            total = total + (item.cantidad * item.detalle.precio)
        })
        return total
    }

    const context = {
        cart,
        limpiarCart,
        addToCart,
        quitarCart,
        getCantidad,
        getTotal
    }
    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}