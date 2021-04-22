import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
