import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

import lib from '@test/lib';

const message = 'Welcome to project';

const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <h2>{lib()}</h2>
  </div>
);

export default hot(module)(App);
