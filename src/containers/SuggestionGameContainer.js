import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateActiveGame } from '../actions'
import ImageContainer from './ImageContainer';

const SuggestionGameContainer = ({dispatch, suggestedGame}) => {
    
    return (
        <ImageContainer coverId={suggestedGame.cover} style={{"border": "1px solid red"}} onClick={(e) => dispatch(updateActiveGame(suggestedGame.id))} size='cover_small' />
    )
}

export default connect()(SuggestionGameContainer)