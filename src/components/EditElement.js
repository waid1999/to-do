import React from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  //DialogContentText,
  DialogTitle,
  Button
} from '@material-ui/core';

const EditElement = ({showEditDialog, setShowDialog}) => {
  console.log("---", showEditDialog);
  const [text, setText] = React.useState(showEditDialog.item);

  return (
    <div>
      <Dialog open={showEditDialog.show} onClose={() => setShowDialog({show: false})} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            value = {text}
            onChange = {(event) => setText(event.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog({show: false})} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setShowDialog({show: false})} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditElement;