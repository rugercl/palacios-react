import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  const objStyle = {backgroundColor: 'Gray'};
  return (
    <div className="App" style={objStyle}>
      <NavBar/>
        <Router>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting="Datos de mi proximo Sitio WEB"/>
              <ItemDetailContainer/>
            </Route>
          </Switch>
        </Router>
    </div>
    
    
  );
}

export default App;
