import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';



import { searchForActor } from './actions'
import './css/index.css';
import App from './components/App';

import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPerson } from './actions'
import rootReducer from './reducers'


const store = createStore(rootReducer,
        applyMiddleware(
            thunkMiddleware
        )
    )

console.log("Getting state")
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchPerson('reactjs')).then(() => console.log(store.getState()))

render(
    <Provider store={store}>
        <App /> 
    </Provider>, 
    document.getElementById('root')
)
