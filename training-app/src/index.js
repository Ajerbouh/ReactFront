import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './components/Chat';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import RootReducer from './reducers'
import thunk from "redux-thunk";
import Index from "./components/Index";
import ws from "./service/websocket";

const customMiddleware = store => next => action => {
    console.log(action);
    return next(action);
};

export const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(thunk, customMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

/*ReactDOM.render(
    <Provider store={store}>
        <Chat/>
    </Provider>
    , document.getElementById('root'));*/
ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
