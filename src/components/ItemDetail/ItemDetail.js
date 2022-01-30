
import { Grid, Image } from "semantic-ui-react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Button } from "semantic-ui-react";
import CartContext from "../CartContext/cartContext";
import { useState, useContext } from "react";
import Container from "@mui/material/Container";

export default function ItemDetail({ data }) {
  const [quantityItem, setQuantityItem] = useState(0);
  const { addProducts, products } = useContext(CartContext);

  const onAdd = (value) => {
    setQuantityItem(value);
  };

  const sendItem = () => {
    addProducts({ ...data, quantity: quantityItem });
    console.log("Productos agregados: ", products);
  };

  return (
    <>
      <Container className="product-item-container">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={8} className="container-img-detalle">
              <img src={data.image} />
            </Grid>
            <Grid item xs={4}>
              <h2>{data.name} </h2>
              <p>$ {data.price}</p>
              <ItemCount stock={data.stock} onAdd={onAdd} />
              <Button variant="contained" color="background" onClick={sendItem}>
                Comprar
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}