import React from "react";
import { connect } from "react-redux";
// CSS
import "../css/App.css";
// Components
import Loading from './Loading';
// Containers
import GameContainer from "../containers/GameContainer";
import GameSearchBar from "../containers/GameSearchBar";
import SuggestionsContainer from "../containers/SuggestionsContainer";

function mapStateToProps(state) {
  return {
    searchedGame: state.searchedGame,
    isFetching: state.isFetching
  };
}

const GameSuggestionApp = ({ searchedGame, isFetching }) => {
  if(!isFetching) {
    return (
      [
        <div className="App-LogoContainer">
        <h1>What Should I Play?</h1>
        </div>,
        <div className="App-GamesContainer">
          <GameContainer />
          <h3>More Games Like {searchedGame} </h3>
          <SuggestionsContainer />
        </div>,
        <div className="App-SideBarSearchContainer">
          <GameSearchBar />
        </div>
      ]
    )
  }
  else {
    return (
      <Loading />
    )
  }       



}

export default connect(mapStateToProps)(GameSuggestionApp);