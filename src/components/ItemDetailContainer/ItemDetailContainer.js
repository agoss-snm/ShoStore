
import React, {useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
//firebase
import { doc, getDoc } from 'firebase/firestore'               
import db from '../../firebase'                                 





export default function ItemDetailContainer () {
        const [product, setProduct] = useState([])
        const { id } = useParams()

        async function getProduct(db) {   
            console.log(id)                       
            const docRef = doc( db, 'productos', id); 
            console.log(id)        
            const docSnap = await getDoc(docRef);               
            
            
            
            if (docSnap.exists()) {                           
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