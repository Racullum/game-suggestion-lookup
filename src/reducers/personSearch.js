import {
  SEARCH_FOR_PERSON,
  RECEIVE_PERSON,
  UPDATE_INPUT_VALUE,
  UPDATE_ACTIVE_GAME
} from "../actions";

const initialState = {
  activeGameId: 0,
  suggestedGames: [],
  isFetching: false,
  inputValue: ""
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FOR_PERSON:
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
    case RECEIVE_PERSON:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        suggestedGames: action.json,
        activeGameId: action.json[0].id
      });
    default:
      return state;
  }
};

export default person;
