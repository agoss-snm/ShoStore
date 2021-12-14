
import React, {useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';

const datos = {
id: 1,
description: 'Deleitá tus ojos con los intensos detalles gracias a la pantalla FHD+ Super AMOLED, que alcanza los 800 nits¹ para una máxima claridad incluso a plena la luz del día. Eye Comfort Shield² reduce la luz azul y Real Smooth mantiene la vista fluida, ya sea que estés jugando o desplazándote por la pantalla. Todo en la pantalla de Infinity-U de 6,4”.',
price: '$147',
img: <img src='https://react.semantic-ui.com/images/wireframe/image.png' />

}


const getItems=()=>{
    return new Promise ((trajoDatosOk, error)=>{
        setTimeout(()=>{
            trajoDatosOk(datos)
        },2000)
    })
}


export default function ItemDetailContainer(){
  const [datosDelItem, setDatosDelItem] =useState([]);

  useEffect(()=>{

    getItems()
    .then((datos)=>{
        setDatosDelItem(datos)
    })
},[])


return <div>
    <ItemDetail 
    item={datosDelItem}
/>

</div>
}















