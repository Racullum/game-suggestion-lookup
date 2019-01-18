import React, { Component } from 'react';
import '../css/App.css';
import PersonContainer from '../containers/PersonContainer'
import PersonSearchBar from '../containers/PersonSearchBar';
import ImageContainer from '../containers/ImageContainer';
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    isFetching: state.person.isFetching,
    suggestedGames: state.person.suggestedGames
  }
}

const App = ({isFetching, suggestedGames}) => {
 
    
     return( <div>
        { ( (!isFetching) && (suggestedGames.length > 0) ) ?
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
