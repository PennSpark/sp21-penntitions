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
import TestPage from './pages/TestPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './contexts/AuthContext';
import Accounts from './pages/Accounts';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/testpage'>
            <TestPage />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/account'>
            <Accounts />
          </Route>
          <Route exact path='/'>
            <Landing />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
