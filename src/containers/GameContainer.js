import { connect } from "react-redux";
import React from "react";
import "../css/GameContainer.css";
import GameName from "../components/GameName";
import Bio from "../components/Bio";
import ImageContainer from "./ImageContainer";
import "../css/App.css";

function findActiveGame(id, suggestedGames) {
  console.log(" Id is " + id + " suggestions are " + suggestedGames);
  for (let game of suggestedGames) {
    if (game.id == id) {
      return game;
    }
  }
}

const mapStateToProps = state => ({
  activeGame: findActiveGame(
    state.person.activeGameId,
    state.person.suggestedGames
  )
});

const GameContainer = ({ activeGame }) => {
  return (
    <div className="game-container">
      <div className="App-ActiveImageContainer">
        <ImageContainer coverId={activeGame.cover} size="cover_big" />
      </div>

      <div className="text">
        <GameName gameName={activeGame.name} />
        <hr />
        <Bio bio={activeGame.summary} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(GameContainer);
