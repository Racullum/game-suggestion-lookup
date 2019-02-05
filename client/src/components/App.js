import React from "react";
import { connect } from "react-redux";

// CSS
import "../css/App.css";
// Components
import GameSuggestionApp from "./GameSuggestionApp";
// Containers
import GameSearchBar from "../containers/GameSearchBar";

function mapStateToProps(state) {
  return {
    suggestedGames: state.suggestedGames,
    isFetching: state.isFetching
  };
}

const App = ({ suggestedGames, isFetching }) => {
  return (
    <div className="App">
      {suggestedGames.length > 0 || isFetching
        ? [
              <GameSuggestionApp />
          ]
 
        : [
            <div className="App-LandingPage">
              <h1>What Should I Play?</h1>
              <GameSearchBar />
            </div>
          ]
      }
    </div>
  );
};

export default connect(mapStateToProps)(App);
