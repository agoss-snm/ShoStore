import React from "react";
import {Link} from 'react-router-dom';
import { useState, useContext } from 'react';
//Semantic UI Imports
import { Button} from 'semantic-ui-react';
//css
import './ModalCart.css'


export default function ModalCart({productos, totalPrice, clear}) {

    
  return(
      <div className={`box-cart active`}>
              {productos.length === 0 ? (
                  <h2>No hay productos agregados</h2>
                  ) : (
                  <>
                  {productos.map ((product) => {
                      return(
                          <div className='item-cart-list' key={product.id}>
                              <div className='item-cart-img'>
                                 
                              </div>
                              <p>{product.name}</p>
                              <p>{product.price}</p>
                              <span>Cant: {product.quantity}</span>
                          </div>
                      )
                  })}
                  <div className='container-finish-buy'>
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