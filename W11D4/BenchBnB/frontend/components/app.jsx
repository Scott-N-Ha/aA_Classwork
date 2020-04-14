import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from '../util/route_util.jsx';
import GreetingContainer from './greeting/greeting_container.js';
import LoginFormContainer from './session_form_container/login_form_container.js';
import SignupFormContainer from './session_form_container/signup_form_container.js';
// import BenchIndexContainer from './bench/bench_index_container.js';
import SearchContainer from './map/search_container.js';

// testing
import SessionForm from './session_form_container/session_form.jsx';
// testing

const App = (props) => {
  return (<div className="app">
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} />
      </Switch>
    </header>
  </div>)
};

export default App;