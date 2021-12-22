import Navbar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './appRouter.css';



export default function AppRouter() {
  return (
       <Router>   
         <header>  
         <Navbar/>
         </header>   
         <Switch>
        <Route exact path='/'><ItemListContainer/></Route>
        <Route path='/category/:categoryId' > <ItemListContainer/> </Route>
        <div className= 'appFondo' >
        <Route path='/item/:itemId'><ItemDetailContainer/></Route>
        <Route path='/AboutUs'><AboutUs/></Route>
        <Route path='/Contact'><Contact/></Route>
        </div>
        </Switch>
        </Router>
  );

}
