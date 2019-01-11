import React, { Component } from 'react';
import '../css/App.css';
import PersonContainer from '../containers/PersonContainer'
import PersonSearchBar from '../containers/PersonSearchBar';

const App = state => (
      <div>
        <PersonSearchBar />
        <PersonContainer />
      </div>
)

export default App;
