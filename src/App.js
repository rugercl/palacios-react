import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer';
import  Cart  from './components/Cart/Cart';
import CartContextProvider from './components/CartContext';


const App = () => {
  const objStyle = {backgroundColor: 'Gray'};
  return (
    <div className="App" style={objStyle}>   
    <CartContextProvider>  
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
        </CartContextProvider>
    </div>
  );
}

export default App;
