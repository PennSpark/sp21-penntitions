import { useHistory } from 'react-router-dom';

import PetitionDisplayCard from './PetitionDisplayCard'

const PetitionStatusBar = (props) => {
    let history = useHistory();
    function handleCreate(e) {
        e.preventDefault();
        history.push('/createpetition')
    }

    return <div className='w-1/3 flex flex-col shadow-right'>
        <h3 className='font-bold text-2xl shadow-below px-4 py-2 w-100 text-center mb-4'>Status</h3>
        <div className='flex justify-between px-4 py-2 mb-4'>
            <h3 className='font-bold text-2xl  w-100'>My petitions</h3>
            <h6 className='self-end'>supporters</h6>
        </div>
       <PetitionDisplayCard/>
       <PetitionDisplayCard />
       <PetitionDisplayCard />
       <button onClick={handleCreate}className='rounded-full bg-blue-200 text-blue-700  font-bold py-1 w-1/2 text-center mx-4 focus:outline-none transition hover:bg-blue-100 mt-4'>+ CREATE NEW</button>
       <hr className='w-5/6 self-center border-.5 my-4'/>
        <div className='flex justify-between px-4 py-2 mb-4'>
            <h3 className='font-bold text-2xl  w-100'>Signed petitions</h3>
        </div>
        <PetitionDisplayCard/>
       <PetitionDisplayCard />
       <PetitionDisplayCard />
    </div>;
  };
  export default PetitionStatusBar;