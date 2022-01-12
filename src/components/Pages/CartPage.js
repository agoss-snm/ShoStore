import React, {useContext} from 'react'
//Semantic UI
import { Container } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
//Context
import CartContext from '../CartContext/cartContext'


export default function CartPage() {
    const {products, totalPrice} =useContext(CartContext)
    console.log ('desde cartpage', products, totalPrice)
    return (
       <div>
        <h1>Total: {totalPrice}</h1>
        <Button>Pay</Button>
        {products.map ((product) => {
        return(
            <div> 
            <Container key= {product.id}>
                <p>Nombre: {product.title}</p>
                <p>Price: {product.price}</p>
            </Container>
            </div>
        )
       })}
       </div>
    )
}