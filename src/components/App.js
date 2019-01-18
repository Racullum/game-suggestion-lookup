import React, { Component } from 'react';
import '../css/App.css';
import PersonContainer from '../containers/PersonContainer'
import PersonSearchBar from '../containers/PersonSearchBar';
import ImageContainer from '../containers/ImageContainer';
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    suggestedGames: state.person.suggestedGames
  }
}

const App = ({suggestedGames}) => {
    console.log(suggestedGames)
    console.log(suggestedGames > 0)
     return( <div>
        { (suggestedGames.length > 0) ?
          [
          <PersonSearchBar />,
          <PersonContainer /> 
          ]
        :
          <PersonSearchBar />
        }
        
      
      </div>
     )
      }

export default connect(mapStateToProps)(App);
