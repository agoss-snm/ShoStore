
import './App.css';
import Navbar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <Router>   
         <header>  
         <Navbar/>
         </header>   
         <Switch>
        <Route exact path='/'><ItemList/></Route>
        <Route path='/category/:categoryId' > <ItemList/> </Route>
        <div className= 'appFondo' >
        <Route path='/item/:itemId'><ItemDetailContainer/></Route>
        </div>
        </Switch>
        </Router>
    </div>
  );

}

export default App;
