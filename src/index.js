import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots } from './reducers'

//create a redux store
//rootReducer is combination of all reducers we have in our application
//searchRobots is only 1 reducer
const store = createStore(searchRobots)

ReactDOM.render(
  //Provider is used to pass redux store to all react components and containers
  //However, we also have to use redux connect inside the smart component itself to tell which components is actually a smart component that know redux is actually exists and being used
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
