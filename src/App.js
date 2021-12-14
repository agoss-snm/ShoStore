
import './App.css';
import Navbar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <h1>ShooStore</h1>
        <Navbar/>
        <ItemList/>
        <div className= 'appFondo' >
        <ItemDetailContainer/>
        </div>
    </div>
  );

}

export default App;
