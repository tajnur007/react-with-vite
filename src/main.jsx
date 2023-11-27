import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import ThemeProvider from './ThemeProvider.jsx';
import { router } from './routes.jsx';

import './global.css';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';


const reducer = (state, action) => {
  if (action.type === 'increment') {
    state = state + 1;
  } else if (action.type === 'decrement') {
    state = state - 1;
  } else if (action.type === 'reset') {
    state = 0;
  } else {
    throw new Error('Unknown action');
  }

  // switch(action.type) {
  //   case 'increment':
  //     state = state + 1;
  //     break;
  //   case 'decrement':
  //     state = state - 1;
  //     break;
  //   case 'reset':
  //     state = 0;
  //     break;
  //   default:
  //     throw new Error('Unknown action');
  // }

  return state;
};

const store = createStore(reducer, 0, undefined);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
