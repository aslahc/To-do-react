import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoText, status: false }]);
      setTodoText('');
    }
  };

  const handleToggleStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's a new day 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i className="fas fa-plus" onClick={handleAddTodo}></i>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => handleToggleStatus(todo.id)}
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => handleDeleteTodo(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
