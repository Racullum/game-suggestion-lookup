// The idea behind actions is that they describe what should happen to the previous tate

import fetch from 'cross-fetch'
import reducers from '../reducers';

console.log("Calling searchForPerson reducers")

export const SEARCH_FOR_PERSON = 'SEARCH_FOR_PERSON'
export const searchForPerson = text => ({
    type: SEARCH_FOR_PERSON,
    text
})

export const RECEIVE_PERSON = 'RECEIVE_PERSON'
export const receivePerson = json => ({
    type: RECEIVE_PERSON,
    json
})

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE'
export const updateInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,
    inputValue: value
  }
}

export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS'
export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS,
    suggestions: []
  }
}

export function generateImageUrl(coverIds) {

      //const coverIds = games.map((game) => game.cover);

      return fetch("/covers", {
        mode: "no-cors",
        method: 'post',
        body: ('fields image_id; where id=(' + coverIds +');'),
        headers: {
          "user-key": "a1d21661c77bb5ba89f0797f186f968e",
        }
    })
    .then(
      response => response.json(),
      // Do not use catch, because that will also catch
      // any errors in the dispatch and resulting render,
      // causing a loop of 'Unexpected batch number' errors.
      // https://github.com/facebook/react/issues/6895
      error => console.log('An error occurred.', error)
    )
    .then(json => {
      console.log(json)

      return json;
    })
  }


function fetchGame(gameName) {
  return fetch("/games", {
    mode: "no-cors",
    method: 'post',
    body: ('fields similar_games; where name ~"'+gameName+'";'),
    headers: {
      "user-key": "a1d21661c77bb5ba89f0797f186f968e",
    }
  })
  .then(
    response => response.json(),
    // Do not use catch, because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895
    error => console.log('An error occurred.', error)
  )
  .then(json => {
    return json[0];
  })
}

function fetchSuggestedGames(game) {

  return fetch("/games", {
    mode: "no-cors",
    method: 'post',
    body: ('fields name, summary, cover; where id=('+game.similar_games.join(", ")+');'),
    headers: {
      "user-key": "a1d21661c77bb5ba89f0797f186f968e",
    }
  })
  .then(
  response => response.json(),
  // Do not use catch, because that will also catch
  // any errors in the dispatch and resulting render,
  // causing a loop of 'Unexpected batch number' errors.
  // https://github.com/facebook/react/issues/6895
  error => console.log('An error occurred.', error)
  )
  .then(json => {
    return json;
  })
}


export function fetchPerson(gameName) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
  
    return function(dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
  
      dispatch(searchForPerson(gameName))
        console.log("Done searching for person")
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
  
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
      fetchGame(gameName)
      .then(json => {  
        fetchSuggestedGames(json)
        .then(json => {
            dispatch(receivePerson(json))
          })         
        })

    }
  }
  