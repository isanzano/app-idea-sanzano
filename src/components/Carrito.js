import React from 'react'
import {BsCart} from 'react-icons/bs';

const Carrito=()=> {
    return <MiPrimerCarrito texto="" numero="4"/>
}

const MiPrimerCarrito=(props)=>{
    const jsx = (
    <div> 
        <p><BsCart/>{props.numero}</p>
    </div>
    );
    return jsx;
}

export default Carrito;
