import React, {useContext, useState} from 'react'
//Semantic UI
import './CartPage.css'; 
import Grid from '@mui/material/Grid';
//Context
import CartContext from '../../CartContext/cartContext'
//components
import ContactForm from '../../contactForm/contactForm';
//material
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function CartPage() {
    const {products, totalPrice} = useContext(CartContext)

    return (
      <>
      <p className='ttMensagge'>Please verify that the data is correct before continuing</p>
      <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell><h4 className='subt'>Product</h4></TableCell>
            <TableCell align="right"><h4 className='subt'>Quantity</h4></TableCell>
            <TableCell align="right"><h4 className='subt'> Price </h4> </TableCell>
            <TableCell align="right"><h4 className='subt'>Sub- Total</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='subtdown'> {product.name}</TableCell>
              <TableCell align="right" className='subtdown'> X {product.quantity}</TableCell>
              <TableCell align="right" className='subtdown'> ${product.price}</TableCell>
              <TableCell align="right" className='subtdown'>{product.price * product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            <Container className='container-cart-page'>
                <Grid container xs={12}>
                </Grid>
                <Grid containerspacing={1}  xs={12} className='grid-total-price'>
                 <h2 className='ttpay'>Total Pay: usd$ {totalPrice}</h2>
                </Grid>
            </Container>
            <ContactForm 
                products={products} 
                total={totalPrice}
            />
        </>
    )
}