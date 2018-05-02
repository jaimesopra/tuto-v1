import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {names,persons}from './reducers/reducers'
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store=createStore(rootReducer,compose(reduxDevTools) );

ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

