import Login from '../components/Login';
import Navbar from '../components/Navbar';
import '../App.css';


// as a group: add transition, different hover color with transition hover:bg-blue-200

const Landing = (props) => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar className='flex' />
      <div className="w-screen flex justify-around items-center my-8">
        <div className="flex flex-col justify-center items-start w-1/3 space-y-6">
          <h1 className="font-bold text-7xl">Welcome to <span className="text-blue-700">Penntitions!</span></h1>
          <h2 className="text-4xl">A way for Penn students to get their voices heard!</h2>
          <button className="bg-blue-700 text-white font-bold text-2xl rounded-full px-10 py-4 self-center">Sign up now!</button>
        </div>
        <img className="w-1/3"src="data:image/jpeg;base64,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"></img>
      </div>
      <div className="w-screen flex justify-center items-center py-10">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="font-bold text-7xl mt-20 mb-3">What is it?</h1>
            <h2 className="text-4xl text-center mt-3 mb-20">Think of change.org, but for Penn-verifiable students!</h2>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center py-10 ">
        <div className="w-1/2 flex flex-col justify-center items-start space-y-0">
          <h1 className="font-bold text-7xl my-20 self-center py-5">How does it work?</h1>
          <div className="flex border-l-2 py-8">
            <div className="-ml-8 timelineCircleOuter bg-white border-2 border-grey-200 rounded-full flex justify-center items-center">
              <span className="bg-blue-700 timelineCircleInner rounded-full hover:shadow-dot"></span>
            </div>
            <h2 className="text-4xl text-left w-11/12 pl-24">Sign up using your Penn email address</h2>          
          </div>
          <div className="flex border-l-2 py-8">
            <div className="-ml-8 timelineCircleOuter bg-white border-2 border-grey-200 rounded-full flex justify-center items-center">
              <span className="bg-blue-700 timelineCircleInner rounded-full hover:shadow-dot"></span>
            </div>
            <h2 className="text-4xl text-left w-11/12 pl-24">Find or create a petition you care about</h2>          
          </div>
          <div className="flex border-l-2 py-8">
            <div className="-ml-8 timelineCircleOuter bg-white border-2 border-grey-200 rounded-full flex justify-center items-center">
              <span className="bg-blue-700 timelineCircleInner rounded-full hover:shadow-dot"></span>
            </div>
            <h2 className="text-4xl text-left w-11/12 pl-24">Organize with other students to sign and share petitions!</h2>          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
