import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import 'styles/todoForm.css'; 


const TodoForm = ({
  saveTodo
}) => {
  const [value, setValue] = useState('');

  const addTask = (event) => {
    event.preventDefault();
    saveTodo(value);
    setValue('');
  }

  return (
    <form
      onSubmit = {addTask}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Button 
        variant="contained"
        color="primary"
        onClick={addTask}
        style={{ marginTop: "25px" }}
        >
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
