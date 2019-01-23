import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/SuggestionsContainer.css'
import SuggestionGameContainer from '../containers/SuggestionGameContainer'
import '../css/App.css'

const mapStateToProps = state => ({
    suggestedGames: state.person.suggestedGames,
    activeGameId: state.person.activeGameId

})

const SuggestionsContainer = ({suggestedGames, activeGameId}) => {
    console.log(suggestedGames[0])
    let imageContainer;
    return (
        <ul>
        {suggestedGames.map(game => (
            (activeGameId == game.id) ? 
            <li>
                <div className="App-ActiveSuggestionImageContainer">
                    <SuggestionGameContainer suggestedGame={game} />
                </div>
            </li> 
            : 
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