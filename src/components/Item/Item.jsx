import React from 'react'
import { useState } from 'react'

import "./Item.css";

export const Item = ({nombre,precio,stock,categoria,img}) => {
    

    const [count, setCount] = useState(1)

    const onAdd = () => {
        if (count >= stock) {
            return
        }
        setCount(count + 1)
    }

    const onSubstract = () => {
        if (count <= 1) {
            return
        }
        setCount(count - 1)
    }

    return (
        <>
            <div className="contenedor-item">
                <div className="item">
                    <img src = {img}/>
                    <p className='nombre'>{nombre}</p>
                    <p className='precio'>{precio}</p>
                    <div className="contenedor-count">
                        <button onClick={onAdd}>+</button>
                        <p>{count}</p>
                        <button onClick={onSubstract}>-</button>
                    </div>
                </div>
                <div className="contenedor-addToCart">
                    <button className="addToCart">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}