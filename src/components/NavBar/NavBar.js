import { Link } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="headerApp">
      <nav className="NavbarItems">
        <ul>
          <li className='listStyleNav'>
            <Link to="/" className="buttonB">
              {"Home".toUpperCase()}
            </Link>
          </li>
          <li className='listStyleNav'>
            <Link to="/Brands" className="buttonB">
              {"Brands".toUpperCase()}
            </Link>
          </li>
          <li className='listStyleNav'>
            <Link to="/Contact" className="buttonB">
              {"Contact".toUpperCase()}
            </Link>
          </li>
          <li className='listStyleNav'>
            {" "}
            <Button className="buttonB">
              <CartWidget />
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
