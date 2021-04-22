import {Link} from 'react-router-dom';
import '../index.css';
import '../App.css';
import Login from './Login'
import ReactDOM from 'react-dom'

const Navbar = (props) => {

  function addOverlay() {
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

  return (
    <div className='w-screen flex justify-end'>
      <div className='flex justify-around font-semibold w-1/3 text-lg p-4'>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link onClick={addOverlay}>Login</Link>
        <Link>Sign Up</Link>
      </div>
    </div>
    
  );
};
export default Navbar;
