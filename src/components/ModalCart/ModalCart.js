import React from "react"

export default function ModalCart({products}) {
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
        </div>
            )
        })}
        
        </>
    )}

    
   

</div>

)
}
