import React from 'react';

//Provider is a component we wrap our top level component in so that state can "trickle" down to the other components
import { Provider } from 'react-redux'

import { render } from 'react-dom';
import './css/index.css';
import App from './components/App';

//Thunk middleware so we can create async action creators
import thunkMiddleware from 'redux-thunk'

//Create store so we can capture state, applyMiddleware to implement thunk
import { createStore, applyMiddleware } from 'redux'

//Importing actions for our dispatch
import { fetchPerson } from './actions'

//Exporting the reducer created by combining reducers in index.js
import rootReducer from './reducers'


const store = createStore(rootReducer,
        applyMiddleware(
            thunkMiddleware
        )
    )

console.log("Getting state")
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

//store.dispatch(fetchPerson('zelda')).then(() => console.log(store.getState()))

render(
    <Provider store={store}>
        <App /> 
    </Provider>, 
    document.getElementById('root')
)
