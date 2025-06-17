import { useState } from "react";
import dd from "../assets/DD.jpg";

const Navbar = ({ onSlideChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-50 bg-black bg-opacity-80 w-full top-0 left-0 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-36 py-4">
      <div className="flex justify-between items-center text-white max-w-7xl mx-auto">
        <img src={dd} className="w-10 rounded-full" alt="DD" />
        {/* Desktop menu */}
        <ul className="hidden md:flex">
          <li className="p-4"><button onClick={() => onSlideChange?.(0)} className="hover:underline">About</button></li>
          <li className="p-4"><button onClick={() => onSlideChange?.(1)} className="hover:underline">Skills</button></li>
          <li className="p-4"><button onClick={() => onSlideChange?.(2)} className="hover:underline">Work Experience</button></li>
          <li className="p-4"><button onClick={() => onSlideChange?.(3)} className="hover:underline">Certs</button></li>
        </ul>
        {/* Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden absolute left-0 right-0 bg-black bg-opacity-95 transition-all duration-300 ${open ? "block" : "hidden"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="pt-8 pb-4">
            <li className="border-b border-gray-700">
              <button onClick={() => { onSlideChange?.(0); setOpen(false); }} className="block w-full text-left py-4 text-white text-lg hover:bg-gray-800">About</button>
            </li>
            <li className="border-b border-gray-700">
              <button onClick={() => { onSlideChange?.(1); setOpen(false); }} className="block w-full text-left py-4 text-white text-lg hover:bg-gray-800">Skills</button>
            </li>
            <li className="border-b border-gray-700">
              <button onClick={() => { onSlideChange?.(2); setOpen(false); }} className="block w-full text-left py-4 text-white text-lg hover:bg-gray-800">Work Experience</button>
            </li>
            <li>
              <button onClick={() => { onSlideChange?.(3); setOpen(false); }} className="block w-full text-left py-4 text-white text-lg hover:bg-gray-800">Certs</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;