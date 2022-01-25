
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//material ui
import { Button } from "@mui/material";
//components
import "./itemlistcontainer.css";
import ItemList from "../ItemList/ItemList";

//firebase import
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const params = useParams();
  //state of products
  const [prod, setProd] = useState([]);
  //
  const [loading, setLoading] = useState(false);
  const categories = ["Sports", "Street-Style", "Retro", "Clasics"];


  useEffect(() => {
    setLoading(true);

    async function getProd (db){
      const prodFirestore = await getDocs(collection(db, "productos"));
      const productsFirestore = prodFirestore.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;   // contiene toda la info del producto + id  
        
      });

      const products = params.categoryId
        ? productsFirestore.filter(
            (item) => item.category === params.categoryId,
          )
        : productsFirestore;

      setProd(products);
      setLoading(false);
    };
    getProd(db);
  }, [params.categoryId, prod.id]);

  return (
    <div>
      <div className="category">
        

        {categories.map((category) => {
          return (
            <>
              <Link to={`/category/${category}`} key={category}>
                <Button className="buttonE">{category} </Button>
              </Link>
            </>
          );
        })}
      </div>

      <ItemList datos={prod} loader={loading} />
    </div>
  );
};

export default ItemListContainer;