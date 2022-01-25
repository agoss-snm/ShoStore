import React from "react";
import {Link} from 'react-router-dom';
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

                <Table sx={{ minWidth: 300 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
            Shopping list
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">${product.price}</TableCell>
              <TableCell align="right">4</TableCell>
            </TableRow>

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>TOTAL</TableCell>
            <TableCell align="right">${total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>


            </div>
            )
        })}
            <div>
            <Button  onClick={cleanCart}>Clean Cart</Button>
            <Link to='/Cart'><Button>Finish</Button></Link>
            </div>
        </div>
    )}
</div>
)
}
