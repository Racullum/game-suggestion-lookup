import {
  SEARCH_FOR_GAME,
  RECEIVE_GAME,
  UPDATE_INPUT_VALUE,
  UPDATE_SEARCHED_GAME,
  UPDATE_ACTIVE_GAME
} from "../actions";

const initialState = {
  activeGameId: 0,
  suggestedGames: [],
  isFetching: false,
  searchedGame: "",
  inputValue: ""
};

const suggestionApp = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FOR_GAME:
      return Object.assign({}, state, {
        isFetching: true
      });
    case UPDATE_INPUT_VALUE:
      return Object.assign({}, state, {
        inputValue: action.inputValue
      });
    case UPDATE_ACTIVE_GAME:
      return Object.assign({}, state, {
        activeGameId: action.activeGameId
      });
    case UPDATE_SEARCHED_GAME:
      return Object.assign({}, state, {
        searchedGame: action.searchedGame
      });
    case RECEIVE_GAME:
      return Object.assign({}, state, {
        isFetching: false,
        suggestedGames: action.json,
        activeGameId: action.json[0].id
      });
    default:
      return state;
  }
};

export default suggestionApp;
