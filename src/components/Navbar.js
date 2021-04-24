import {Link} from 'react-router-dom';
import '../index.css';
import '../App.css';
import Login from '../pages/Login'
import SignUp from './Signup'
import ReactDOM from 'react-dom'

const Navbar = (props) => {

  function addLoginOverlay() {
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'tempOverlay');
    overlay.setAttribute(
      'class',
      'z-50 inset-0 fixed bg-black bg-opacity-50 w-full h-full flex items-center justify-center'
    );
    const element = (
      <Login
      />
    );
    ReactDOM.render(element, overlay);
    document.getElementById('root').appendChild(overlay);
  }

  function addSignupOverlay() {
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'tempOverlay');
    overlay.setAttribute(
      'class',
      'z-50 inset-0 fixed bg-black bg-opacity-50 w-full h-full flex items-center justify-center'
    );
    const element = (
      <SignUp
      />
    );
    ReactDOM.render(element, overlay);
    document.getElementById('root').appendChild(overlay);
  }

  return (
    <div className='w-screen flex justify-end'>
      <div className='flex justify-around font-semibold w-1/3 text-lg p-4'>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
    
  );
};
export default Navbar;
