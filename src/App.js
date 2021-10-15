//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  const objStyle = {backgroundColor: 'Gray'};
  return (
    <div className="App" style={objStyle}>
        <NavBar/>
        <ItemListContainer greeting="Datos de mi proximo Sitio WEB"/>
    </div>
    
    
  );
}

export default App;
