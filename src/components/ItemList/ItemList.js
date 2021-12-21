
import Item from '../Item/Item';
import React, {useState, useEffect} from 'react';
import { Grid} from 'semantic-ui-react';
import {useParams} from 'react-router-dom';
import {Card, Icon, Image} from 'semantic-ui-react';
import './ItemList.css';


const ItemList=()=>{
  const [products, setProducts] =useState([]);
  const{categoryId}=useParams()

  useEffect(()=>{
    setTimeout (()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then ((respuesta) => setProducts(respuesta))
    },2000);
},[categoryId]);


return(
  <>
    
    
  <Grid container columns={3}>
    {products.map ((product)=>{
      return  <div className='container'>
      
      <Item key={product.id} prop={product}/>
      </div>
    })}
     </Grid>

      
    </>
  
 
  
);
};
  
  export default ItemList;