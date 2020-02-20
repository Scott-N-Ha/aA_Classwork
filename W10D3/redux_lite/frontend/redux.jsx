import React from 'react';
import ReactDom from 'react-dom';
import Store from '../components/store.jsx';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDom.render(<Store />, root);
});