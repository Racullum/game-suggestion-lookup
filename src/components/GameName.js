import React from 'react'
import PropTypes from 'prop-types'

const GameName = ({gameName}) => (
    <div>
        <h1>{gameName}</h1>
    </div>
)

GameName.propTypes = {
    gameName: PropTypes.string.isRequired
}

export default GameName