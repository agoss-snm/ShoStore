
import './Navbar.css';
import CartWidget from './CartWidget';

          const Navbar=()=>{
    return (
      
          <nav className="NavbarItems">
    <ul>
      <li><a>Home</a></li>
      <li><a>Men's</a></li>
      <li><a>Woman's</a></li>
      <li><a>Kid's</a></li>
     
    </ul>
    <CartWidget/>
</nav>
    )
  }

export default Navbar;