import React, { Component } from 'react';
import '../css/App.css';
import GameContainer from '../containers/GameContainer'
import GameSearchBar from '../containers/GameSearchBar';
import SuggestionsContainer from '../containers/SuggestionsContainer'
import ImageContainer from '../containers/ImageContainer';
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    isFetching: state.person.isFetching,
    suggestedGames: state.person.suggestedGames
  }
}

const App = ({isFetching, suggestedGames}) => {
 
    
     return( 
      <div className="App">
        { ( (!isFetching) && (suggestedGames.length > 0) ) ?
            [
            
            <div className="App-GamesContainer">
              <GameContainer />
              <SuggestionsContainer /> 
            </div>,
            <div className="App-SideBarSearchContainer">
              <GameSearchBar />
            </div>
            ]
          :
            <GameSearchBar />
          }
      
      </div>


     
     )
      }

export default connect(mapStateToProps)(App);
