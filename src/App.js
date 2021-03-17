import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import FizzBuzz from './components/FizzBuzz'
import ObjFromString from './components/ObjFromString';
import Multiply from './components/Multiply';
import Hello from './components/Hello';
import FunctionalHello from './components/FunctionalHello'

const App = () => {

  const helloTranslations = ['Hello', 'Bonjour', 'Konnichiwa', 'God dag', 'Namaste']
  const endpoint = 'https://hello/translations'
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
            <li>
              <Link to='/hellofunctional'>Hello Functional</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/fizzbuzz'><FizzBuzz /></Route>
          <Route path='/objfromstring'><ObjFromString /></Route>
          <Route path='/multiply'><Multiply /></Route>
          <Route path='/hello'><Hello helloTranslations={ helloTranslations } /></Route>
          <Route path='/hellofunctional'><FunctionalHello helloTranslations={ helloTranslations } /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
