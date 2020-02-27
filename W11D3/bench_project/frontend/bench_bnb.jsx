import React from 'react';
import ReactDOM from 'react-dom';

//testing
import * as API from "./utils/session_api_util.js";

document.addEventListener('DOMContentLoaded', () => {
  window.signin = API.signin;
  window.signout = API.signout;
  window.signup = API.signup;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>React is working</h1>, root);
});