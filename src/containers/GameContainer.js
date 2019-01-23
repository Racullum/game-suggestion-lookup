import { connect } from "react-redux";
import React from "react";
import "../css/GameContainer.css";
import GameName from "../components/GameName";
import Summary from "../components/Summary";
import ImageContainer from "./ImageContainer";

const mapStateToProps = state => ({
  activeGame: findActiveGame(state.activeGameId, state.suggestedGames)
});

// Compare the list of suggested game id values to our activeGameId
function findActiveGame(id, suggestedGames) {
  for (let game of suggestedGames) {
    if (game.id == id) {
      return game;
    }
  }
}

const GameContainer = ({ activeGame }) => {
  return (
    <div className="game-container">
      <div className="GameContainer-ActiveImageContainer">
        <ImageContainer coverId={activeGame.cover} size="cover_big" />
      </div>

      <div className="text">
        <GameName gameName={activeGame.name} />
        <hr />
        <Summary summary={activeGame.summary} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(GameContainer);
