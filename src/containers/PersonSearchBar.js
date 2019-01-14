import React from 'react'
import { connect } from 'react-redux'
import { fetchPerson, clearSuggestions, searchForPerson, updateInputValue } from '../actions';
import Autosuggest from 'react-autosuggest';


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
      suggestions: state.person.suggestions,
      isFetching: state.person.isFetching,
      inputValue: state.person.inputValue
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        onChange(event, { newValue }){
            dispatch(updateInputValue(newValue));
        },

        onSuggestionsFetchRequested({value, reason}) {
            dispatch(searchForPerson);
            dispatch(fetchPerson(value));
        },

        onSuggestionsClearRequested(dispatch) {
            dispatch(clearSuggestions);
        }
    }
}




//Destructring dispatch method from the redux store we get access from connect
const PersonSearchBar = ({dispatch, suggestions, inputValue, onChange, onSuggestionsClearRequested, onSuggestionsFetchRequested}) => {
    console.log(onSuggestionsFetchRequested);
    const renderSuggestion = (suggestion) => {
        return (
        <div>
            {suggestion.name}
        </div>
        )
    }

    const getSuggestionValue = suggestion => suggestion.name;

    
    const inputProps = {
        placeholder: 'Type a programming language',
        value: inputValue,
        onChange: onChange
      };

    return (
        <div>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                alwaysRenderSuggestions={true}
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonSearchBar)