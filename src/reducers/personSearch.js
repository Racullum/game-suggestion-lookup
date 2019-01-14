import {
    SEARCH_FOR_PERSON,
    RECEIVE_PERSON,
    UPDATE_INPUT_VALUE
} from '../actions'

const initialState = {
    suggestions: [],
    isFetching: false,
    inputValue: ''
}

const person = (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_FOR_PERSON: 
            return Object.assign({}, state, {
                    isFetching: true
            })
        case UPDATE_INPUT_VALUE:
            return Object.assign({}, state, {
                inputValue: action.inputValue
            })
        case RECEIVE_PERSON:
                console.log(action)
            return Object.assign({}, state, {
                isFetching: false,
                suggestions: action.person
                })

        default:
            return state
    }
}

export default person