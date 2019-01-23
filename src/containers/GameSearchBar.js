import React from "react";
import { connect } from "react-redux";
import { fetchGame } from "../actions";

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
        <input ref={node => (input = node)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(GameSearchBar);
