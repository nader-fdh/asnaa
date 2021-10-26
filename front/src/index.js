import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './StateProvider';
import reducerBasket, { initialState } from './reducers/reducerBasket';

ReactDOM.render(
  <Provider store={store}>
    <StateProvider initialState={initialState} reducer={reducerBasket}>
      <App />
    </StateProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
