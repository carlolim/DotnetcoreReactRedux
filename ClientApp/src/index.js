import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import "./index.css";
import Main from './components/main';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter basename={baseUrl}>
      <Main />
    </BrowserRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
