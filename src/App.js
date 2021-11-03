import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import  Cart  from './components/Cart/Cart';

function App() {
  const objStyle = {backgroundColor: 'Gray'};
  return (
    <div className="App" style={objStyle}>      
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/'>
            <ItemListContainer greeting="Datos de mi proximo Sitio WEB"/>
            </Route>
            <Route path='/categoria/:id' exact component={ItemListContainer} />                    
            <Route exact path='/item/:id' component={ItemDetailContainer} /> 
            <Route exact path='/cart' component={Cart} />             
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
