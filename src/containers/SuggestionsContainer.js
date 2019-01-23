import React from "react";
import { connect } from "react-redux";
import "../css/SuggestionsContainer.css";
import SuggestionGameContainer from "../containers/SuggestionGameContainer";

const mapStateToProps = state => ({
  suggestedGames: state.suggestedGames,
  activeGameId: state.activeGameId
});

const SuggestionsContainer = ({ suggestedGames, activeGameId }) => {
  const activeSuggestion =
    "SuggestionsContainer-ActiveSuggestionImageContainer";
  const nonactiveSuggestion = "SuggestionsContainer-SuggestionImageContainer";

  return (
    <ul>
      {suggestedGames.map(game => (
        <li key={game.id}>
          <div
            className={
              activeGameId == game.id ? activeSuggestion : nonactiveSuggestion
            }
          >
            <SuggestionGameContainer suggestedGame={game} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps)(SuggestionsContainer);
