import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
//firebase
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";

export default function ContainerItemDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct(db) {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let producto = docSnap.data();
        producto.id = docSnap.id;
        setProduct(producto);
      } else {
        console.log("No such document!");
      }
    }

    getProduct(db);
  }, [id]);

  return (
    <div>
      <ItemDetail data={product} />
    </div>
  );
}