import React from "react";
import "../css/App.css";
import GameContainer from "../containers/GameContainer";
import GameSearchBar from "../containers/GameSearchBar";
import SuggestionsContainer from "../containers/SuggestionsContainer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    searchedGame: state.searchedGame,
    suggestedGames: state.suggestedGames
  };
}

const App = ({ suggestedGames, searchedGame }) => {
  return (
    <div className="App">
      {suggestedGames.length > 0
        ? [
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
        : [
            <div className="App-LandingPage">
              <h1>What Should I Play?</h1>

              <GameSearchBar />
            </div>
          ]}
    </div>
  );
};

export default connect(mapStateToProps)(App);
