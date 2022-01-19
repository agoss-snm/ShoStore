
import React, {useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
//firebase
import { doc, getDoc } from 'firebase/firestore'                // estoy tratando de agregar el detalle del item cuando los selecciones
import db from '../../firebase'                                 





export default function ItemDetailContainer () {
        const [product, setProduct] = useState([])
        const { id } = useParams()

        async function getProduct(db) {   
            console.log(id)                       //traigo los productos de firestore, la coleccion se llama 'productos'
            const docRef = doc( db, 'productos', id); 
            console.log(id)         // aca me da un error //Unhandled Rejection (TypeError): Cannot read properties of undefined (reading 'indexOf')
            const docSnap = await getDoc(docRef);               // linea 14 y 26 
            
            
            
            if (docSnap.exists()) {                             // me da un error y entiendo q es q no me devuelve el producto filtrado por id
                let producto = docSnap.data();
                producto.id = docSnap.id
                setProduct(producto)

            } else {
                console.log("No such document!");
            }
        }

        useEffect(() => {
            getProduct(db)
        }, [id])
    
        return (
            <div>
                    <ItemDetail item= {product} />
            </div>
        )
    }