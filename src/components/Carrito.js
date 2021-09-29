import React from 'react'

const Carrito=()=> {
    return <MiPrimerCarrito texto="" numero="4"/>
}
const MiPrimerCarrito=(props)=>{
    const jsx = <div> <img src="./assets/img/148964.svg"></img> {props.numero}</div>
}
export default Carrito
