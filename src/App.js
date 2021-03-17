import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import FizzBuzz from './components/FizzBuzz'
import ObjFromString from './components/ObjFromString';
import Multiply from './components/Multiply';
import Hello from './components/Hello';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/fizzbuzz'>FizzBuzz</Link>
            </li>
            <li>
              <Link to='/objfromstring'>ObjFromString</Link>
            </li>
            <li>
              <Link to='/multiply'>Multiply</Link>
            </li>
            <li>
              <Link to='/hello'>Hello</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/fizzbuzz'><FizzBuzz /></Route>
          <Route path='/objfromstring'><ObjFromString /></Route>
          <Route path='/multiply'><Multiply /></Route>
          <Route path='/hello'><Hello /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
