import React, {useContext, useState} from 'react'
//Semantic UI
import { Button } from 'semantic-ui-react'
import './CartPage.css'; 
import Grid from '@mui/material/Grid';
//Context
import CartContext from '../../CartContext/cartContext'
//components
import Container from '@mui/material/Container';
import ContactForm from '../../contactForm/contactForm';

export default function CartPage() {
    const { products, totalPrice } = useContext(CartContext)

    return (
        <>

<h2>Please verify that the data is correct before continuing</h2>
        <h3>Total Pay: usd$ {totalPrice}</h3>


            <Container className='container-cart-page'>
                <Grid container xs={8}>
                    <Grid container spacing={2} className="header-cart">
                        <Grid item xs={4} >
                            <h3>Producto</h3>
                        </Grid>
                        <Grid item xs={4} >
                            <h3>Cantidad</h3>
                        </Grid>
                        <Grid item xs={4} >
                            <h3>Precio</h3>
                        </Grid>
                    </Grid>
                    {products.map((product) => {
                        return(
                            <Grid key={product.id} container spacing={2} className="body-cart item-cart-page">
                               
                                <Grid item xs={4} >
                                    <p>{product.name}</p>
                                </Grid>
                                <Grid item xs={4} >
                                    <p>{product.quantity}</p>
                                </Grid>
                                <Grid item xs={4} >
                                    <p>$ {product.price}</p>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container xs={4} className='grid-total-price'>
                    <div>
                        <p>TOTAL</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    
                </Grid>
            </Container>
            <ContactForm 
                products={products} 
                total={totalPrice}
            />
        </>
    )
}