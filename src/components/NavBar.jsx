import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components'; //Importar libreria de Styled-components 
import BotonPaginas from './botonPagina';
import CartWidget from '../components/CartWidget';

//import cartwidget from './CartWidget';

function Navbar() {
    const [clicked, setClicked] = useState(false) //Manipular estados
    const handleClick = () => {//Funcion para cuando hacemos clic al boton del munÃº cambie el estado
        setClicked(!clicked) //cuando esta true lo pasa a false y viceversa
    }
    return (
        <>
            <NavbarContenedor>
                <h1>Almacen <span>Productos</span></h1>
                <div className={`links ${clicked ? 'active' : ''} `}>
                    <Link to='categoria/Hogar'>Hogar</Link>
                    <Link to='categoria/Tecnología'>Tecnología</Link>
                    <Link to='categoria/Oficina'>Oficina</Link>
                    <Link to='categoria/Maquinaria'>Maquinaria</Link>
                </div>
                <div className='btncarrito'>
                    <CartWidget />
                    <span className='etqnumero'>0</span>
                </div>
                <div className='btnhamburgesa'>
                    <BotonPaginas clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv> {/*background circular para la animacion*/}
            </NavbarContenedor>
        </>
    )
}
export default Navbar

//Estilos tipo scss
const NavbarContenedor = styled.nav`
h1{ //estilos titulo
    color: white;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
padding: 4 ram;
background-color: black;
display: flex;
align-items: center;
justify-content: space-between;

//estilos de item o secciones
a{
    color:white;
    text-decoration: none;
    margin-right: 1rem;
}

//media query para mostrar/ocultar los links de las paginas
.links{
    //animacion de ingreso
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: white;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 760px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
        }
        display: block;
    }
}

//cuando damos clic sobre el boton hamburgesa
.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
    }
}

.btncarrito{
    position: center;
    color: white;
    width: 4rem;
}

.etqnumero{
    font-size: blod;
    left: 10px;
    margin-left: 5px;
}

//media query para mostrar/ocultar el boton del menu hambuerguesa
.btnhamburgesa{
@media(min-width: 760px){
    display: none; }
}
`
const BgDiv = styled.div`
background-color: black;
position: absolute;
top: -700px;
left: -1000px;
width: 100%;
height: 100%;
z-index: -1;
transition: all .6s ease;
&.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;    
}
`