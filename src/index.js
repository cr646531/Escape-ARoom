import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';
import store from './store';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
