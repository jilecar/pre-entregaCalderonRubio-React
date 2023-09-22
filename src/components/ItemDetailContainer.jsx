import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

import {db} from "../firebase/cliente";
import {getDoc,doc} from 'firebase/firestore'

export default function ItemDetailContainer() {

    const { id } = useParams();
    const[detalle, setDetalle]=useState([])

    //traer la base de datos de la coleccion de firebase
    const productoRef=doc(db,"productos",id)

    useEffect(()=>{
        
    const getProducto= async() =>{
        try{
            const productoFiltrado = await getDoc(productoRef);
            if(productoFiltrado.exists()){
                const productoData={id: productoFiltrado.id, ...productoFiltrado.data()};
                setDetalle(productoData)
            }else{
                //Si el producto no existe
                console.log("El producto no se encontro en la base de datos")
            }
        }catch(error){
            console.error("error al obtener el producto:",error);
        }
    }

        getProducto()
    },[id]);

    return (
        <ItemDetail detalle={detalle} />
    )
}