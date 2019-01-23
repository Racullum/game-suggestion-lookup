import React from "react";
import "../css/App.css";
import GameContainer from "../containers/GameContainer";
import GameSearchBar from "../containers/GameSearchBar";
import SuggestionsContainer from "../containers/SuggestionsContainer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    suggestedGames: state.suggestedGames
  };
}

const App = ({ suggestedGames }) => {
  return (
    <div className="App">
      {suggestedGames.length > 0 ? (
        [
          <div className="App-GamesContainer">
            <GameContainer />
            <SuggestionsContainer />
          </div>,
          <div className="App-SideBarSearchContainer">
            <GameSearchBar />
          </div>
        ]
      ) : (
        <GameSearchBar />
      )}
    </div>
  );
};

export default connect(mapStateToProps)(App);
