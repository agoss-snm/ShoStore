import React, {useState } from "react";
//Semantic UI
import { Button } from 'semantic-ui-react';
import './ItemCount.css'
//

export const ItemCount=({stock, onAdd})=>{
    const [itemCount, setItemCount] = useState(0)

    const updateItem = () => {
        if(itemCount < stock) {
            setItemCount(itemCount + 1)
            onAdd(itemCount + 1)
        }
    }

    const removeItem = () => {
        itemCount > 1 && setItemCount(itemCount - 1)
        onAdd(itemCount - 1)
    }

    return(
        <div className="item-count__buttons">
            <ul id='countButton'>
                <p>{itemCount}</p>
                <li id='countButton'><Button onClick={removeItem}><p>-</p></Button><Button onClick={updateItem} ><p>+</p></Button></li>
                <li id='countButton'></li>
            </ul>
        </div>
    )
}

    export default ItemCount; 