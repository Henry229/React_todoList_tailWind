import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

import AddTodo from './AddTodo';
import Todo from './Todo';

const TodoList = ({ filter }) => {
  const [toDos, setToDos] = useState([
    { id: 1, text: 'Buy milk', status: 'active' },
    { id: 2, text: 'Studying', status: 'active' },
    { id: 3, text: 'Workout', status: 'active' },
  ]);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleAdd = (toDo) => setToDos([...toDos, toDo]);
  const handleUpdate = (updated) => {
    console.log(updated);
    setToDos(toDos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted) => {
    setToDos(toDos.filter((t) => t.id !== deleted.id));
  };

  const filtered = getFilteredItem(toDos, filter);

  return (
    <section>
      <ul
        className={
          !darkMode
            ? 'bg-blue-900 p-5 text-gray-50'
            : 'bg-gray-100 p-5 text-black'
        }
      >
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

function getFilteredItem(toDos, filter) {
  console.log('---', toDos, '/', filter);
  if (filter === 'all') {
    return toDos;
  }
  return toDos.filter((todo) => todo.status === filter);
}

export default TodoList;
