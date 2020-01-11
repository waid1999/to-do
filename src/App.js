import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Authorization from './components/authorization';

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todoList')) || []);
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  const saveTodo = (todoText) => {
    const trimmedObj = {
      done: false,
      text: todoText.trim()
    };
    if (trimmedObj.text.length > 0) {
      setTodos([...todos, trimmedObj]);
    }
  }

  // const editElement = (todoIndex) => {
    
  // }

  return (
    <div>
      {/* <Authorization /> */}
      <TodoForm
        saveTodo={saveTodo}
      />
      <TodoList
        todos={todos}
        deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);
          setTodos(newTodos);
        }}
        setTodo={setTodos}
      />
    </div>
  );
};
export default App;