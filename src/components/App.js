import React, { Component } from 'react';
import '../css/App.css';
import GameContainer from '../containers/GameContainer'
import GameSearchBar from '../containers/GameSearchBar';
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
          <GameSearchBar />,
          <GameContainer /> 
          ]
        :
          <GameSearchBar />
        }
        
      
      </div>
     )
      }

export default connect(mapStateToProps)(App);
