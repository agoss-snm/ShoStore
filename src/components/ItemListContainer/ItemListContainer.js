import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardMedia, Typography, CardActionArea } from "@mui/material";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import Slogan from "../slogan/Slogan";
import "./itemlistcontainer.css";

import sportCategory from '../../media/sportsCategory.jpg';
import streetCategory from '../../media/streetCategory.jpg';
import retroCategory from '../../media/retroCategory.jpg';
import classicsCategory from '../../media/classicsCategory.jpg';
import elegantCategory from '../../media/elegantCategory.jpg';
import casualCategory from '../../media/casualCategory.jpg';

const ItemListContainer = () => {
  const params = useParams();
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(false);
  const categories = ["Sports", "Street-Style", "Retro", "Clasics", "Elegant", "Casual"];

  const categoryImages = {
    Sports: sportCategory,
    'Street-Style': streetCategory,
    Retro: retroCategory,
    Clasics: classicsCategory,
    Elegant: elegantCategory,
    Casual: casualCategory,
  };

  useEffect(() => {
    setLoading(true);

    async function getProd(db) {
      const prodFirestore = await getDocs(collection(db, "productos"));
      const productsFirestore = prodFirestore.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });

      const products = params.categoryId
        ? productsFirestore.filter((item) => item.category === params.categoryId)
        : productsFirestore;

      setProd(products);
      setLoading(false);
    }

    getProd(db);
  }, [params.categoryId]);

  return (
    <div>
      <Slogan />
      <div className="category">
        {categories.map((category) => (
          <Link to={`/category/${category}`} key={category}>
            <Card className="cardCategory" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <div style={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={categoryImages[category]}
                    alt={category}
                  />
                  
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {category}
                  </Typography>
                </div>
                
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </div>

      <ItemList data={prod} loader={loading} />
    </div>
  );
};

export default ItemListContainer;
