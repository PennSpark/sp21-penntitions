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
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CreatePetition from './pages/CreatePetition';
import AuthProvider from './contexts/AuthContext';
import EditAccount from './pages/EditAccount';
import MyAccount from './pages/MyAccount';
import PetitionPage from './pages/PetitonPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/createpetition'>
            <CreatePetition />
          </Route>
          <Route path='/testpage'>
            <TestPage />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/editaccount'>
            <EditAccount />
          </Route>
          <Route path='/myaccount'>
            <MyAccount />
          </Route>
          <Route path='/petition/:petitionId'>
            <PetitionPage />
          </Route>
          <Route exact path='/'>
            <Landing />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
