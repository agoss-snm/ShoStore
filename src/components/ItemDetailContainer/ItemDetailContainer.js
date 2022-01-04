
import React, {useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const datos = {
    title: 'Remera T23',
id: 1,
description: '¿Eres de llevar zapatillas llamativas? ¿O más bien discretas? No importa: con el servicio de cocreación de Nike, podrás personalizarlas a tu gusto.',
price: '$147',
image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/1c5a0e5d-f06c-4853-b75f-4e74f17e8aec/zapatillas-personalizables-nike-by-you.jpg"

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















