import React from 'react';
import ReactDOM from 'react-dom';
import Lifecycle from './Lifecycle';
import Hooks from './Hooks';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './redux';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <Hooks />
  </Provider>,
  document.getElementById('root')
);