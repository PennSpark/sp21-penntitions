import {Link} from 'react-router-dom';
import '../index.css';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UserNavbar = (props) => {
    const { logout } = useAuth();
    let history = useHistory();

    async function handleLogout(e) {
        e.preventDefault();
        await logout().then(()=>{
            console.log("logged out user!");
            history.push('/')
        }).catch((err) =>{
            console.log("error logging out", err)
        });
    }

  return (
    <div className='w-screen flex justify-between bg-blue-900 text-white'>
      <div className='flex  font-semibold w-1/3 text-lg'>
          <h2 className="font-bold text-xl p-4 pr-8">Penntitions</h2>
        <Link to='/home' className='transition p-4 pb-2 px-6 border-b-6 border-blue-900 hover:border-blue-100'>Home</Link>
        <Link className='transition p-4 pb-2 px-6 border-b-6 border-blue-900 hover:border-blue-100'>Browse</Link>
      </div>
      <div className='flex justify-end font-semibold w-1/4 text-lg'>
        <Link to="/myaccount" className='transition p-4 pb-2 px-6 border-b-6 border-blue-900 hover:border-blue-100'>Account</Link>
        <div onClick={handleLogout} className='transition p-4 pb-2 px-6 border-b-6 border-blue-900 hover:border-blue-100 cursor-pointer'>Log out</div>
      </div>
    </div>
    
  );
};
export default UserNavbar;
