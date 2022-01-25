import React, {useContext} from 'react'
//Semantic UI
import { Container } from 'semantic-ui-react'
import { Button, Card, Image } from 'semantic-ui-react'
import './CartPage.css'; 
//Context
import CartContext from '../../CartContext/cartContext'
//components
import ContactForm from '../../contactForm/contactForm';


export default function CartPage() {
    const {products, totalPrice} =useContext(CartContext)
    console.log ('desde cartpage', products, totalPrice)
    return (
       <div>
         <h2>Please verify that the data is correct before continuing</h2>
        <h3>Total Pay: usd$ {totalPrice}</h3>
        
        {products.map ((product) => {
        return(
            <div> 
                 <Card.Group key= {product.id} className='col-4'>

                <Card >
      <Card.Content>
      <Image  src= {product.image}/> 
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>usd ${product.price}</Card.Meta>
        <Card.Description>
          Quantity: <strong>  x  cantidad</strong>
        </Card.Description>
      </Card.Content>
    </Card>
  
            </Card.Group>
            </div>
        )
       })}
    
<ContactForm products={products} total={totalPrice}/>
       </div>

    )
}