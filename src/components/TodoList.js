import React, { Fragment, useState } from 'react';
import {
  List, 
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Checkbox
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditElement from './EditElement'

const TodoList = ({ todos, deleteTodo, setTodo, editElement }) => {
  const [showEditDialog, setShowDialog] = useState({
    show: false,
    index: null,
    item: ''
  });

  return (
    <Fragment>
      {showEditDialog.show && 
        <EditElement 
        showEditDialog={showEditDialog}
        setShowDialog={setShowDialog}
        editElement={editElement}/>
      }
      
      <List>
        {todos.map((todo, index, array) => (
          <ListItem key={index.toString()} dense button>
            <Checkbox 
              tabIndex={-1} 
              disableRipple 
              checked={todo.done}
              onClick={() => {
                const arr = array;
                arr[index] = {
                  done: !todo.done,
                  text: todo.text
                }
                setTodo([...arr]);
              }}/>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  setShowDialog({
                    show: true,
                    index,
                    item: todo.text
                  })
                }}>
                <EditIcon />
              </IconButton>
              
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  deleteTodo(index);
                }}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Fragment>
  )
  
};

export default TodoList;