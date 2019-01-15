import React, { Component } from 'react';
import '../css/App.css';
import PersonContainer from '../containers/PersonContainer'
import PersonSearchBar from '../containers/PersonSearchBar';
import ImageContainer from '../containers/ImageContainer';

const App = state => (
      <div>
        <PersonSearchBar />
        <ImageContainer />
        <PersonContainer />
      </div>
)

export default App;
