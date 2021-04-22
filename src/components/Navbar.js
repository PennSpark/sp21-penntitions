import '../index.css';
import '../App.css';

const Navbar = (props) => {
  return (
    <div className='w-screen flex justify-end'>
      <div className='flex justify-around font-semibold w-1/3 text-lg p-4'>
        <a>About</a>
        <a>Contact</a>
        <a>Login</a>
        <a>Sign Up</a>
      </div>
    </div>
    
  );
};
export default Navbar;
