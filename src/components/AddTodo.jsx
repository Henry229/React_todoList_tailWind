import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDarkMode } from '../context/DarkModeContext';

const AddTodo = ({ onAdd }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${'bg-w-full p-4 flex justify-center'} ${
        !darkMode ? 'bg-indigo-900' : 'bg-gray-100'
      }`}
    >
      <input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='Add Todo..'
        className='w-4/5 py-2 px-4 rounded-l-lg'
      />
      <button className='w-1/5 bg-orange-400 rounded-r-lg'>Add</button>
    </form>
  );
};

export default AddTodo;
