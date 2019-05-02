import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ApiService from './services/api.service';
import './assets/scss/main.scss';

// SOLVED: setup hot loader 
ApiService.init(process.env.REACT_APP_BASE_API_URL);
const rootElement = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
  rootElement);
}

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  })
}

render(); 

// SOLVED: disable react default reload
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
