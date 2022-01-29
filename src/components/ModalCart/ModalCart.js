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


export default function ModalCart({products, totalPrice, clear}) {

  return(
      <div className={`box-cart active`}>
              {products.length === 0 ? (
                  <h2>No hay productos agregados</h2>
                  ) : (
                  <>
                  {products.map((product) => {
                      return(
                          <div className='item-cart-list' key={product.id}>
                              <div className='item-cart-img'>
                                  <img  src={product.image} />
                              </div>
                              <p>{product.name}</p>
                              <p>{product.price}</p>
                              <span>Cant: {product.quantity}</span>
                          </div>
                      )
                  })}
                  <div className='container-finish-buy'>
                      <p>Total $ {totalPrice}</p>
                      <Link to='/cart'>
                          <Button>Buy Now</Button>
                      </Link>
                      <Button variant="contained" color="background" onClick={clear}>
                                  Clean
                              </Button>
                  </div>
                  </>
              ) }
             
          </div>
  )    
}