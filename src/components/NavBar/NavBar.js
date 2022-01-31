
import {Link} from 'react-router-dom';
//style
import './Navbar.css';
//components
import CartWidget from './CartWidget';
//material
import { Button } from '@mui/material';
//semantic
import { Image } from 'semantic-ui-react'
//image import
import  zap from'../img/zap.jpg'

  const Navbar=()=>{
    return ( <div className='headerApp'>
        <Image className='banner'  src={zap}  />
        <nav className="NavbarItems">
          <ul >
            <li><Link to='/'><Button className='buttonB'> Home</Button></Link></li>
            <li><Link to= '/Brands'><Button className='buttonB'> Brands</Button></Link></li>
            <li><Link to= '/Contact'><Button className='buttonB'>Contact</Button></Link></li>
            <li> <Button className='buttonB'><CartWidget/></Button></li>
          </ul>
        </nav>
      </div>
    )
  }
export default Navbar;