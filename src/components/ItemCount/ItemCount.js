import React, {useState } from "react";
//Semantic UI
import { Button } from 'semantic-ui-react';
//

export const ItemCount=({stock, initial, onAdd})=>{
    const [counter, setCounter]= React.useState(initial);
    
    function handleIncrement() {
        if(counter < stock){
            setCounter(counter+1);
        }else{
            alert("no hay mas stock")
        }
    }
    
    function handleDecrement() {
        if(counter == 0){
            alert ("Carrito Vacio")
        }else{
        setCounter (counter -1);
        }
    }

function agregar(){
    onAdd(counter);
 }

    return (
        <div className='ItemCount'>
            <div className='ContadorContainer'>
                <h1>Cantidad: {counter}</h1>
                <Button onClick={handleDecrement}> -</Button>
                <Button onClick={handleIncrement}> +</Button>
                <Button  onClick={ agregar } >Agregar al Carrito</Button>
             </div>
        </div>
        );
    };

    export default ItemCount; 