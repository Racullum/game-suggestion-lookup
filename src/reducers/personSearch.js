import {
    SEARCH_FOR_PERSON,
    RECEIVE_PERSON
} from '../actions'

const person = (state = {personName: '', url: '', bio: ''}, action) => {

    switch (action.type) {
        case SEARCH_FOR_PERSON: 
            return Object.assign({}, state, {
                    isFetching: true
                }
            )
        case RECEIVE_PERSON:
                console.log(action)
            return Object.assign({}, state, {
                isFetching: false,
                personName: action.person.name,
                url: action.person.url,
                bio: action.person.slug 
                })

        default:
            return state
    }
}

export default person