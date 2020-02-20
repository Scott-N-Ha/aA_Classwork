import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tab from './tab';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDom.render(
    <div>
      Clock
      <Clock />
      Tab
      <Tab title={['one','two', 'three']} content={['first', 'second', 'third']} />
    </div>
    , root);
});