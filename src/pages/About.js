import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';


// as a group: add transition, different hover color with transition hover:bg-blue-200

const About = (props) => {
  

  return (
    <div className="flex flex-col overflow-x-hidden ">
      <Navbar className='flex' />
      <div className="w-screen flex justify-around items-center my-8 mb-36">
        <div className="flex flex-col justify-center items-start w-1/3 space-y-6">
          <h1 className="font-bold text-7xl">📋 About</h1>
          <h2 className="text-4xl">Penntitions was made by a team of Penn students under Penn Creative Labs</h2>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 space-y-6 text-2xl pt-12">
          <p>Do you feel frustrated about something that Penn won't pay attention to? Do you want to organize your fellow students in a cause you believe in? Use Penntitions, which uses email verification to make sure everyone who signs a petition is a Penn student just as invested as you!</p>
        </div>
        
      </div>
      <div className='flex flex-col bg-blue-900 text-white '>
          <h2 className='font-bold text-4xl self-center p-6 pt-10'>The team!</h2>
        <div className='grid grid-cols-3 gap-6 p-10 justify-center content-center'>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>

        </div>
      </div>

    
    </div>
  );
};
export default About;
