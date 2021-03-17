import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import FizzBuzz from './components/FizzBuzz'
import ObjFromString from './components/ObjFromString';
import Multiply from './components/Multiply';
import Hello from './components/Hello';
import FunctionalHello from './components/FunctionalHello'
import NavBar from './containers/NavBar';
import GifsContainer from './containers/GifsContainer';

const App = () => {

  const helloTranslations = ['Hello', 'Bonjour', 'Konnichiwa', 'God dag', 'Namaste']
  // const endpoint = 'https://hello/translations'
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/fizzbuzz'><FizzBuzz /></Route>
          <Route path='/objfromstring'><ObjFromString /></Route>
          <Route path='/multiply'><Multiply /></Route>
          <Route path='/hello'><Hello helloTranslations={ helloTranslations } /></Route>
          <Route path='/hellofunctional'><FunctionalHello helloTranslations={ helloTranslations } /></Route>
          <Route path='/gifs'><GifsContainer /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
