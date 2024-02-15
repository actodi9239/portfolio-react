// Navbar.js

import dd from '../assets/DD.jpg';

const Navbar = ({ onSlideChange }) => {
  return (
    <div className="fixed z-50 bg-dark-500 bg-opacity-50 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <img src={dd} className="App-logo w-10 rounded-full" alt="DD" />
        <ul className="hidden md:flex">
          <li className="p-4">
            <button onClick={() => onSlideChange(0)} className="hover:underline">
              About
            </button>
          </li>
          <li className="p-4">
            <button onClick={() => onSlideChange(1)} className="hover:underline">
              Skills
            </button>
          </li>
          <li className="p-4">
            <button onClick={() => onSlideChange(2)} className="hover:underline">
              Work Experience
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
