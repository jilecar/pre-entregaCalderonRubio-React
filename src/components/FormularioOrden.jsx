/*import { Timestamp, writeBatch } from 'firebase/firestore';
import React, { useContext, useState } from 'react';

function FormularioOrden({onConfirm}) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm=(event)=>{
    event.preventDefault()
    const UserData={
      nombre, telefono,email}
      onConfirm(UserData)
  }

  return (
    <div className="formulario-container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={handleTelefonoChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioOrden;*/