import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./ModalCart.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function ModalCart({ productos, clear }) {
  return (
    <div className={`box-cart active`} id="cartModel">
      {productos.length === 0 ? (
        <>
          <TableRow>
            <TableCell align="center" className='cartcentral'>
              <p className="oops">The Cart Is Empty</p>
            </TableCell>
          </TableRow>
        </>
      ) : (
        <>
          <Table sx={{ minWidth: 100 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Unit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((product) => (
                <TableRow key={product.id}>
                  {product.name && (
                    <TableCell align="center">{product.name}</TableCell>
                  )}
                  {product.price != null && (
                    <TableCell align="center">${product.price}</TableCell>
                  )}
                  {product.quantity != null && (
                    <TableCell align="center">{product.quantity}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TableBody>
            <TableRow>
              <TableCell align="center" colSpan={2}></TableCell>
              <TableCell>
                <Link to="/cart">
                  <Button variant="contained">Buy Now</Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="background"
                  onClick={clear}
                >
                  Clean
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </>
      )}
    </div>
  );
}
