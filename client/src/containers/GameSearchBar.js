import React from "react";
import { connect } from "react-redux";
import { fetchGame } from "../actions";
import "../css/GameSearchBar.css";

const mapStateToProps = state => {
  return {
    suggestions: state.suggestions,
    isFetching: state.isFetching,
    inputValue: state.inputValue
  };
};

const GameSearchBar = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchGame(input.value));
          input.value = "";
        }}
      >
        <div className="Search">
          <input
            type="text"
            ref={node => (input = node)}
            placeholder="Search..."
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(GameSearchBar);
