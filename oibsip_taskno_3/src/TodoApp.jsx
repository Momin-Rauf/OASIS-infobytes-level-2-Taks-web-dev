import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className=" flex flex-col justify-center  items-center bg-gray-600 p-8 w-full rounded-3xl shadow-md text-gray-900 shadow-black">
      <h1 className="text-2xl font-bold mb-4  border-gray-900 rounded-full">Todo App</h1>
      <div className="flex mb-4">
      <button
          className="bg-gray-950 w-20  rounded-full  text-white font-bold py-2 px-4 rounded-r"
          onClick={addTodo}
        >
          Add
        </button>
        <input
          type="text"
          className="w-full rounded-full rounded-l py-2 px-4 bg-gray-300"
          placeholder="Enter a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        
      </div  >
      <ul className='bg-gray-300 rounded-2xl w-96 p-5 border-[2px] border-black' >
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between m-1 text-white px-2 py-3 rounded-xl bg-gray-700"
          >
            <span>{todo}</span>
            <button
              className="text-red-500 hover:text-red-700 rounded-lg bg-gray-300 hover:bg-slate-900 font-bold border-gray-300 border-[1px] p-1"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button> 
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
