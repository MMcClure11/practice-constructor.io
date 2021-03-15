import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import FizzBuzz from './components/FizzBuzz'

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/fizzbuzz'>FizzBuzz</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/fizzbuzz'><FizzBuzz /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
