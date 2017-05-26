import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

//binding App to root id in html
render(
  <App />,
  document.getElementById('root')
);
