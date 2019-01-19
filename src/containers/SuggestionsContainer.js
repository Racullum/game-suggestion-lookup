import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/SuggestionsContainer.css'
import SuggestionGameContainer from '../containers/SuggestionGameContainer'
import '../css/App.css'

const mapStateToProps = state => ({
    suggestedGames: state.person.suggestedGames,

})

const SuggestionsContainer = ({suggestedGames}) => {
    console.log(suggestedGames[0])
    return (
        <ul>
        {suggestedGames.map(game => (
            <li>
                <div className="App-SuggestionImageContainer">
                    <SuggestionGameContainer suggestedGame={game} />
                </div>
            </li>
        ))}
        </ul>
    )
}

export default connect(mapStateToProps)(SuggestionsContainer)