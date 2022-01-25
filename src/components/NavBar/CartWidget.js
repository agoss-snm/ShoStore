import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import CartContext from '../CartContext/cartContext';
import ModalCart from '../ModalCart/ModalCart';
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
    

   <Button variant="outlined" onClick={handleClickOpen}>
        CART
      </Button>
      <Dialog open={open} onClose={handleClose}>
      
        {products.length ===0? (
            <>
        <h1>   ---- The Cart Is Empty ----</h1>
        
        </>
        ):(
        <div>
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
        {products.map((product)=>{
            return(
            <div className= 'item-cart-list'>

                <Table sx={{ minWidth: 200 }} aria-label="spanning table">
      
        <TableBody>
            <TableRow>
              <TableCell >{product.name}</TableCell>
              <TableCell align="center">${product.price}</TableCell>
              <TableCell align="center">4</TableCell>
            </TableRow>

            <DialogActions>
          <Button onClick={handleClose}>Home</Button>
          <Button onClick={() => clearCart()}> Clear Cart </Button>
          <Link to='/Cart'><Button onClick={handleClose}>Finish</Button></Link>
        </DialogActions>


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
                
            </div>
        </div>
    )}

      </Dialog>



    </div>
    )
    }
        export default CarWidget;

