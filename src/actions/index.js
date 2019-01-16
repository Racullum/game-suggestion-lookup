// The idea behind actions is that they describe what should happen to the previous tate

import fetch from 'cross-fetch'

console.log("Calling searchForPerson reducers")

export const SEARCH_FOR_PERSON = 'SEARCH_FOR_PERSON'
export const searchForPerson = text => ({
    type: SEARCH_FOR_PERSON,
    text
})

export const RECEIVE_PERSON = 'RECEIVE_PERSON'
export const receivePerson = json => ({
    type: RECEIVE_PERSON,
    person: json
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

// Take an id for a cover image and return the url to the actual image
function generateImageUrl(coverId) {
  console.log("Calling generate image" + coverId.cover);

      return fetch("/covers", {
        mode: "no-cors",
        method: 'post',
        body: ('fields *; where id=' + coverId.cover +';'),
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
     
      const jsonBody = {...coverId, ...{coverImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/'+json[0].image_id+'.jpg'}};
      return jsonBody;
    })
  }


export function fetchPerson(personName) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    console.log(personName)
    return function(dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
  
      dispatch(searchForPerson(personName))
        console.log("Done searching for person")
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
  
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
      console.log("fetching for person: " + personName)
      return fetch("/games", {
        mode: "no-cors",
        method: 'post',
        body: ('fields *; where name ~"'+personName+'";'),
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
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          
          generateImageUrl(json[0]).then(json => {
            dispatch(receivePerson(json));
          })
        }
        )
        
       
    }
  }