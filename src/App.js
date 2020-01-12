import React from 'react';
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';

const App = () => (
  <HashRouter>
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
  </HashRouter>
);

export default App;
