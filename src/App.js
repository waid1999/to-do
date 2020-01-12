import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        Navigation:
        <NavLink exact to="/signin">
          Logout
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
