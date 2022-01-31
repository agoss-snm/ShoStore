
import { useState, useContext } from "react";
// material 
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//semantic
import { Button } from "semantic-ui-react";
import { Image} from "semantic-ui-react";
//components
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../CartContext/cartContext";
//style
import "./ItemDetail.css";

export default function ItemDetail({ data }) {
  const [quantityItem, setQuantityItem] = useState(0);
  const { addProducts, products } = useContext(CartContext);

  const onAdd = (value) => {
    setQuantityItem(value);
  };

  const sendItem = () => {
    if (quantityItem >0) {
    addProducts({ ...data, quantity: quantityItem });
    console.log("Productos agregados: ", products);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1000 }} id='boxStyle'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <Image  floated='center' height="160"  src={data.image} />
          </Typography>
        </Grid>

      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          {data.name}
          <br/><br/>
          {data.description}
        </Typography>
      </Grid>
      </Grid>


    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
           <u>Stock avaible:  {data.stock} Units</u>
           <br/>
           Price: ${data.price}
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          <ItemCount stock={data.stock} onAdd={onAdd} />
            <Button onClick={sendItem}> Comprar</Button>
        </Typography>
      </Grid>
    </Grid>
  </Box>
);
}