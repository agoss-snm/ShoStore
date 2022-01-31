import React from "react";
import {Link} from 'react-router-dom';
//Semantic UI Imports
import { Button} from 'semantic-ui-react';
//css
import './ModalCart.css'
// material
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ModalCart({productos, clear}) {
    return (
        <div className={`box-cart active`} id='cartModel'>
            <Table sx={{ minWidth: 100 }} aria-label="spanning table" > 
            <TableHead>
              <TableRow>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Unit</TableCell>
              </TableRow>
            </TableHead>
            </Table>

            {productos.length ===0? (
                <>
                <TableHead>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                      <TableCell align="right"><h3 className='oops'> Opps! The Cart Is Empty</h3></TableCell>
                  </TableRow>
                </TableHead>
                </>
            ):(
            <div>
            {productos.map((product)=>{
              return(
                <div className= 'item-cart-list'>
                  <Table sx={{ minWidth: 100 }} aria-label="spanning table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="right">{product.name}</TableCell>
                      <TableCell align="right">${product.price}</TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                    </TableRow>
                  </TableBody>
                   </Table>
                </div>
                )
            })}
            <div>
              <TableBody>
                <TableRow> 
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                 <TableCell>   <Link to='/cart'> <Button>Buy Now</Button></Link></TableCell>
                 <TableCell>   <Button variant="contained" color="background" onClick={clear}>Clean</Button></TableCell>
                </TableRow>
              </TableBody>
            </div>
            </div>
          )}
      </div>
    )
    }