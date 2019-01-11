import React from 'react'
import { connect } from 'react-redux'
import { searchForPerson } from '../actions';

//Destructring dispatch method from the redux store we get access from connect
const PersonSearchBar = ({ dispatch }) => {

    let input

    return (
        <div>
            <form 
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(searchForPerson(input.value))
                    input.value = ''
                }}
                >
                <input ref={node => (input = node)} />
                <button type="submit">Search For Person</button>    
            </form>
        </div>
    )
}

export default connect()(PersonSearchBar)