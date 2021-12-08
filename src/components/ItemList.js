
import Item from '../components/Item';
import React, {useState, useEffect} from 'react';

const ItemList=()=>{
  const [products, setProducts] =useState([]);

  useEffect(()=>{
    setTimeout (()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then ((respuesta) => setProducts(respuesta))
    },2000);
}, );


return(
  
  <div className='CardContainer'>
    {products.map ((product)=>{
      return <Item key={product.id} prop={product}/>;
    })}
    
  </div>
 
  
);
};
  
  export default ItemList;