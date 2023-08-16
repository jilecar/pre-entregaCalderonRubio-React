import React from 'react';

function ItemListContainer({ greeting = "¡Bienvenido a Almacen"  }) {
  return (
    <div className="item-list-container">
      <h3>{greeting}</h3>
      <p>¡Todo lo que necesita su negocio!</p>
    </div>
  );
}

export default ItemListContainer;