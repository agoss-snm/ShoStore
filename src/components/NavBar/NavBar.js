
import './Navbar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';

          const Navbar=()=>{
    return (
      
          <nav className="NavbarItems">
    <ul>
      <li><Link to='/'><Button>Home</Button></Link></li>
      <li><Link to= '/AboutUs'><Button>About Uss</Button></Link></li>
      <li><Link to= '/Contact'><Button>Contact</Button></Link></li>
      <li> <Button><CartWidget/></Button></li>
    </ul>
    </nav>

    )
  }

export default Navbar;