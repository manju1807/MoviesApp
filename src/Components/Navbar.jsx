import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    );
  });
  return (
    <div
      className={`${
        isActive ? 'bg-black py-2 shadow-md opacity-90' : 'bg-transparent py-2'
      } fixed w-full z-50 transition-all duration-300 flex justify-center items-center`}
    >
      <div className='container px-6 md:px-4 flex flex-row justify-between items-center align-middle'>
        <Link
          to='/'
          className='text-red-600 text-3xl font-bold font-headingcursive hover:opacity-90'
        >
          <span className='text-white'>Movies</span>App
        </Link>
        <div className='text-gray-200 text-3xl hover:scale-105 hover:opacity-90'>
          <BsPersonCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
