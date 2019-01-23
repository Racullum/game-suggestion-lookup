import React from "react";
import { connect } from "react-redux";
import "../css/SuggestionsContainer.css";
import SuggestionGameContainer from "../containers/SuggestionGameContainer";
import "../css/App.css";

const mapStateToProps = state => ({
  suggestedGames: state.person.suggestedGames,
  activeGameId: state.person.activeGameId
});

const SuggestionsContainer = ({ suggestedGames, activeGameId }) => {
  return (
    <ul>
      {suggestedGames.map(game =>
        activeGameId == game.id ? (
          <li>
            <div className="App-ActiveSuggestionImageContainer">
              <SuggestionGameContainer suggestedGame={game} />
            </div>
          </li>
        ) : (
          <li>
            <div className="App-SuggestionImageContainer">
              <SuggestionGameContainer suggestedGame={game} />
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default connect(mapStateToProps)(SuggestionsContainer);
