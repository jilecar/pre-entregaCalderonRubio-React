import { useState } from "react"

const ItemListContainer = (props) => {
        const { productos } = props;

        return (
                <div>
                        <h2>Listas de Productos</h2>
                        <Item productos={productos} />
                </div>
        )
}

export default ItemListContainer