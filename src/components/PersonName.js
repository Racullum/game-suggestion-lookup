import React from 'react'
import PropTypes from 'prop-types'

const PersonName = ({personName}) => (
    <div>
        <h1>{personName}</h1>
    </div>
)

PersonName.propTypes = {
    personName: PropTypes.string.isRequired
}

export default PersonName