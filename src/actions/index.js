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

export function fetchPerson(subreddit) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
  
    return function(dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
  
      dispatch(searchForPerson(subreddit))
        console.log("Done searching for person")
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
  
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
      console.log("fetching for person")
      return fetch("/games/1942?fields=*", {
        mode: "no-cors",
       
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
        .then(json =>
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
            
          dispatch(receivePerson(json[0]))
          
        )
       
    }
  }