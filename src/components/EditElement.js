import React, { useState } from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

const EditElement = ({
  showEditDialog,
  setShowDialog,
  editElement
}) => {
  const [text, setText] = useState(showEditDialog.item);

  const edit = () => {
    editElement(showEditDialog.index, text);
    closeModal();
  };

  const closeModal = () => {
    setShowDialog({
      show: false,
      index: null,
      item: ''
    })
  };

  return (
    <div>
      <Dialog open={showEditDialog.show} onClose={closeModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
        <DialogContent>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Edit Item"
            type="edit"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={edit}
            color="primary"
            disabled={!text}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditElement;
