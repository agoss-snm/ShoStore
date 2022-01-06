import React from "react";
import { Button, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function ModalCart({products, total}) {
return (
<div className={`box-cart active`}>
    {products.length ===0? (
        <h3>Empty cart</h3>
    ):(
        <>
        {products.map((product)=>{
            return(
        <div className= 'item-cart-list'>
        <p>{product.title}</p>
        <span>{product.price} </span>
        <span>Cant:{} </span>
        </div>
            )
        })}
        <div>
            <><p>total: <spam>${total}</spam></p>
            </>
            <Link to='/Cart'><Button>Finish</Button></Link>
        </div>
        </>
    )}

    
   

</div>

)
}
