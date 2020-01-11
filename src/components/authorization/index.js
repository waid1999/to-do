import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import SignIn from './SignIn';
import SignUp from './SignUp';
import DialogWindow from './DialogWindow';



const Authorization = () => {

  return (
    <div>
        <DialogWindow />
        {/* <SignIn /> */}
        <h1>
          Todo list authorization
        </h1>
        <ButtonGroup color="primary" size="large" aria-label="large outlined primary button group">
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
        </ButtonGroup>
        {/* <SignUp /> */}
    </div>
  )
};

export default Authorization;