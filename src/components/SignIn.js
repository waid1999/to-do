import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const allUser = JSON.parse(localStorage.getItem('data')) || [];

  const handleSubmit = () => {
    const user = allUser.find(item => item.email === email && item.password === password);
    if (user) {
      localStorage.setItem('userrr', JSON.stringify(user));
      history.push("/");
    } else {
      setError(true);
    }
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error &&
            <div style={{ color: 'red' }}>
              Incorrect email or password
            </div>
          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              {/* <Link href="/signup" variant="body2"> */}
                <Button
                  onClick={() => history.push("/signup")}
                >Don't have an account? Sign Up</Button>
                {/* {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;