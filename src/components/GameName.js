import React from "react";
import PropTypes from "prop-types";
import "../css/GameContainer.css";

const GameName = ({ gameName }) => <h1>{gameName}</h1>;

GameName.propTypes = {
  gameName: PropTypes.string.isRequired
};

export default GameName;
