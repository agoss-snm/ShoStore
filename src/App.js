
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <h1>ShooStore</h1>
        <Navbar/>
        <ItemListContainer greetings='Bienvenid@s'/>
    </div>
  );

}

export default App;
