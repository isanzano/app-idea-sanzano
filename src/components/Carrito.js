import React from 'react'
import BiCartAlt from 'react-icons/fa';

const Carrito=()=> {
    return <MiPrimerCarrito texto="" numero="4"/>
}
const MiPrimerCarrito=(props)=>{
    const jsx = (
    <div class="container-fluid"> 
        <p><BiCartAlt/>{props.numero}</p>
    </div>
    );
    return jsx;
}
export default Carrito
