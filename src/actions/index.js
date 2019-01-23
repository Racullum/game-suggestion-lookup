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

export const UPDATE_SEARCHED_GAME = "UPDATE_SEARCHED_GAME";
export const updateSearchedGame = game => {
  return {
    type: UPDATE_SEARCHED_GAME,
    searchedGame: game
  };
};

// Fetch a single game
function getGame(gameName) {
  return fetch("/games", {
    mode: "no-cors",
    method: "post",
    body: 'fields name, similar_games; where name ~"' + gameName + '";',
    headers: {
      "user-key": process.env.REACT_APP_API_KEY
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
      "user-key": process.env.REACT_APP_API_KEY
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
        dispatch(updateSearchedGame(json.name));
        fetchSuggestedGames(json).then(json => {
          dispatch(receiveGame(json));
        });
      }
    });
  };
}
