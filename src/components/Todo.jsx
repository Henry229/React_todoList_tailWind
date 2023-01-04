import React from 'react';
import { BsTrashFill } from 'react-icons/bs';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'complete' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className='flex justify-between'>
      <div>
        <input
          type='checkbox'
          id='checkbox'
          onChange={handleChange}
          className='mr-3'
        />
        <label htmlFor='checkbox'>{text}</label>
      </div>
      <div className='bg-gray-500 p-0.5 rounded-full'>
        <button onClick={handleDelete}>
          <BsTrashFill />
        </button>
      </div>
    </li>
  );
};

export default Todo;
