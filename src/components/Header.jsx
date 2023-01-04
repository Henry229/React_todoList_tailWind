import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../context/DarkModeContext';

const Header = ({ filters, filter, onFilterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header
      className={`${'w-full flex justify-between px-3 py-2 rounded-t-lg'}
        ${!darkMode ? 'bg-indigo-900' : 'bg-gray-300'}`}
    >
      <button
        onClick={toggleDarkMode}
        className={!darkMode ? 'flex items-center' : 'text-black'}
      >
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className='flex'>
        {filters.map((value, index) => (
          <li key={index} className='m-2 text-orange-600 text-bold'>
            <button
              className={
                filter === value ? 'bg-transparent opacity-100' : 'opacity-50'
              }
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
