import React from "react";
import {Link} from 'react-router-dom';
//Semantic UI Imports
import { Button} from 'semantic-ui-react';



export default function ModalCart({products, total, cleanCart}) {
return (
    <div className={`box-cart active`}>
        {products.length ===0? (
        <h3>Empty cart</h3>
        ):(
        <div>
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
                <>
                <p>total: <spam>${total}</spam></p>
                </>
            <Button  onClick={cleanCart}>Clean Cart</Button>
            <Link to='/Cart'><Button>Finish</Button></Link>
            </div>
        </div>
    )}
</div>
)
}
