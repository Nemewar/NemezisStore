import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOrderById } from "../../services/firestoreOrdenes";

import "./order.css"

export const Order = () => {

    const [orden, setOrden] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        getOrderById(id)
            .then(orden => {
                setOrden(orden)
            })
            .catch(err => console.log(err))
    }, [])

    const obtenerFecha = (date) => {
        //el date que esta en firebase en un timestamp
        //para convertirlo a date usar el metodo toDate()
        const newDate = date.toDate();
        //const dateString = newDate.toDateString();
        const dia = newDate.getDate();
        const año = newDate.getFullYear();
        const mes = newDate.getMonth();
        const fecha = `${dia}/${mes}/${año}`
        return fecha;
    }


    return (
        <>
            {
                (orden) &&
                <div className="o2">
                    <div className="contenedor-order">
                        <h2>Código de orden {orden.id}</h2>
                        <p>{obtenerFecha(orden.date)}</p>
                        <p>Precio Total: {orden.precioTotal}</p>
                        <table className="table-orden">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (orden.dataProducts.map( item => {
                                        return(
                                            <tr key={item.id}>
                                                <td className="producto">
                                                    <img src={`${item.img}`}></img>
                                                    <p>{item.nombre}</p>
                                                </td>
                                                <td>{item.cantidad}</td>
                                                <td>{item.precio}</td>
                                                <td>${item.cantidad * parseInt(item.precio.split("$")[1])}</td>
                                            </tr>
                                        )
                                    }))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </>
    )
}
