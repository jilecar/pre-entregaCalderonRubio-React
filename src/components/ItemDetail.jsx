import PropTypes from 'prop-types';
import ItemCount from './ItemCount';
import {db} from "../firebase/cliente";
import {getDocs, collection, query, where, limit, getDoc,doc} from 'firebase/firestore'

export default function ItemDetail({detalle}) {

    return (
        <div className="d-flex justify-content-center adjust-item-center my-5">
            <div className="card mb-3 custom-card">
                <div className="row g-0">
                    {<div className="col-md-4 ">
                        <img src={detalle.imagen} className="card-img-top fotodetail" alt={`foto_${detalle.nombre}`} />
                    </div>}
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title text-center">{detalle.nombre}</h3>
                            <div className="text-center align-content-center">
                                <div>
                                    <p className="price bg-warning">Precio: $ {detalle.precio} COL</p>
                                </div>
                                <div>
                                    <h5>DESCRIPCION</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="fa fa-paw fa-lg">
                                                {detalle.descripcion}
                                            </i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center">
                                <ItemCount/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}