// The idea behind actions is that they describe what should happen to the previous state

import fetch from "cross-fetch";

export const SEARCH_FOR_PERSON = "SEARCH_FOR_PERSON";
export const searchForPerson = text => ({
  type: SEARCH_FOR_PERSON,
  text
});

export const RECEIVE_PERSON = "RECEIVE_PERSON";
export const receivePerson = json => ({
  type: RECEIVE_PERSON,
  json
});

export const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE";
export const updateInputValue = value => {
  return {
    type: UPDATE_INPUT_VALUE,
    inputValue: value
  };
};

export const UPDATE_ACTIVE_GAME = "UPDATE_ACTIVE_GAME";
export const updateActiveGame = id => {
  return {
    type: UPDATE_ACTIVE_GAME,
    activeGameId: id
  };
};

export const CLEAR_SUGGESTIONS = "CLEAR_SUGGESTIONS";
export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS,
    suggestions: []
  };
};

function fetchGame(gameName) {
  return fetch("/games", {
    mode: "no-cors",
    method: "post",
    body: 'fields similar_games; where name ~"' + gameName + '";',
    headers: {
      "user-key": "a1d21661c77bb5ba89f0797f186f968e"
    }
  })
    .then(
      response => response.json(),

      error => console.log("An error occurred.", error)
    )
    .then(json => {
      return json[0];
    });
}

function fetchSuggestedGames(game) {
  return fetch("/games", {
    mode: "no-cors",
    method: "post",
    body:
      "fields name, summary, cover; where id=(" +
      game.similar_games.join(", ") +
      ");",
    headers: {
      "user-key": "a1d21661c77bb5ba89f0797f186f968e"
    }
  })
    .then(
      response => response.json(),

      error => console.log("An error occurred.", error)
    )
    .then(json => {
      return json;
    });
}

export function fetchPerson(gameName) {
  return function(dispatch) {
    dispatch(searchForPerson(gameName));
    fetchGame(gameName).then(json => {
      if (undefined === json) {
        alert("Could not find " + "'" + gameName + "'");
      } else {
        fetchSuggestedGames(json).then(json => {
          dispatch(receivePerson(json));
        });
      }
    });
  };
}
