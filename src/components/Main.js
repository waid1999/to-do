import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const user = JSON.parse(localStorage.getItem('userrr')) || {};
  const [todos, setTodos] = useState(user.data || []);

  useEffect(() => {
    const allUser =  JSON.parse(localStorage.getItem('data'));
    if(allUser) {
      localStorage.setItem('userrr', JSON.stringify({ ...user, data: todos }));
      localStorage.setItem('data', JSON.stringify(allUser.map(item => item.id === user.id ? { ...user, data: todos } : item)));
    }
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

  const editElement = (todoIndex, value) => {
    todos[todoIndex] = { ...todos[todoIndex], text: value};
    setTodos([...todos]);
  }

  return (
    <div>
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
        editElement={editElement}
      />
    </div>
  );
};
export default App;