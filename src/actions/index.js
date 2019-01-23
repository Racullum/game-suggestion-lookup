import fetch from "cross-fetch";

export const SEARCH_FOR_GAME = "SEARCH_FOR_GAME";
export const searchForGame = text => ({
  type: SEARCH_FOR_GAME,
  text
});

export const RECEIVE_GAME = "RECEIVE_GAME";
export const receiveGame = json => ({
  type: RECEIVE_GAME,
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

// Fetch a single game
function getGame(gameName) {
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

// Returns array of games that are similar to input game
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

// Calls the functions responsible for providing our state its info
export function fetchGame(gameName) {
  return function(dispatch) {
    dispatch(searchForGame(gameName));
    getGame(gameName).then(json => {
      if (undefined === json) {
        alert("Could not find " + "'" + gameName + "'");
      } else {
        fetchSuggestedGames(json).then(json => {
          dispatch(receiveGame(json));
        });
      }
    });
  };
}
