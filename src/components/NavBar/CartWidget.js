import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import CartContext from '../CartContext/cartContext';
import ModalCart from '../ModalCart/ModalCart';
import DeleteIcon from '@mui/icons-material/Delete';
//
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
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
import {Link} from 'react-router-dom';


const CarWidget=()=>{
    const [showCart, setShowCart]= useState (false)
    useEffect (()=>{

    })
    const {products, totalPrice, total, clearCart} =useContext (CartContext)


const openCart =()=> {
    setShowCart(!showCart)
}


// ------------------------------------------------------------

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //---------------------------------------------------



    
return (
    <div className= 'cart-container'>
    

   <Button variant="outlined" onClick={handleClickOpen}><ShoppingCartIcon/>CART </Button>
   
      <Dialog open={open} onClose={handleClose}>
      
        {products.length ===0? (
            <>
        <h1>   --Opps! The Cart Is Empty ----</h1>
        
        </>
        ):(
        <div>
            <Table sx={{ minWidth: 200 }} aria-label="spanning table" >
       <TableHead><TableRow> 
            </TableRow>
            </TableHead>
            <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
          </TableHead>
          </Table>
        {products.map((product)=>{
            return(
            <div className= 'item-cart-list'>

                <Table sx={{ minWidth: 200 }} aria-label="spanning table">
      
        <TableBody>
            <TableRow>
              <TableCell >{product.name}</TableCell>
              <TableCell align="left">${product.price}</TableCell>
              <TableCell align="left">4</TableCell>
              <TableCell> <DeleteIcon /></TableCell>
            </TableRow>

           


        </TableBody>

        
      </Table>


            </div>
            )
        })}
        <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>TOTAL</TableCell>
            <TableCell align="right">${totalPrice}</TableCell>
            
          </TableRow>

          
            <div>
            <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => clearCart()}> Clear Cart </Button>
          <Link to='/Cart'><Button onClick={handleClose}>Finish</Button></Link>
        </DialogActions>
            </div>
        </div>
    )}

      </Dialog>



    </div>
    )
    }
        export default CarWidget;

