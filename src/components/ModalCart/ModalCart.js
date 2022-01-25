import React from "react";
import {Link} from 'react-router-dom';
import { useState, useContext } from 'react';
//Semantic UI Imports
import { Button} from 'semantic-ui-react';
// material
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//context
import CartContext from "../CartContext/cartContext";
//css
import './ModalCart.css'




export default function ModalCart({products, total, ClearCart}) {
    const {clearCart} = useContext(CartContext)

return (
 

    <div className={`box-cart active`} id='cartModel'>
        <Table sx={{ minWidth: 200 }} aria-label="spanning table" >
       <TableHead><TableRow> <TableCell align="center" colSpan={3}>
            Shopping list
            </TableCell>
            </TableRow>
            </TableHead>
            <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Unit</TableCell>
          </TableRow>
          </TableHead>
          </Table>
        {products.length ===0? (
            <>
        <h3>Empty cart</h3>
        <Button>Close</Button>
        </>
        ):(
        <div>
        {products.map((product)=>{
            return(
            <div className= 'item-cart-list'>

                <Table sx={{ minWidth: 200 }} aria-label="spanning table">
      
        <TableBody>
            <TableRow>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">${product.price}</TableCell>
              <TableCell align="right">4</TableCell>
            </TableRow>

          
        </TableBody>
      </Table>


            </div>
            )
        })}
        <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>TOTAL</TableCell>
            <TableCell align="right">${total}</TableCell>
          </TableRow>
            <div>
            <Button onClick={() => clearCart()}> Clear Cart </Button>

            <Button>Close</Button>
            <Link to='/Cart'><Button>Finish</Button></Link>
            </div>
        </div>
    )}
</div>
)
}
