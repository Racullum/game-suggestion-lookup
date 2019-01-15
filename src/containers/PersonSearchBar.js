import React from 'react'
import { connect } from 'react-redux'
import { fetchPerson } from '../actions';
import Autosuggest from 'react-autosuggest';


const mapStateToProps = (state, ownProps) => {
    console.log("In personsearch bar" + state);
    return {
      suggestions: state.person.suggestions,
      isFetching: state.person.isFetching,
      inputValue: state.person.inputValue
    }
  }
  
//Destructring dispatch method from the redux store we get access from connect
const PersonSearchBar = ({dispatch}) => {

    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(fetchPerson(input.value))
                input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps)(PersonSearchBar)