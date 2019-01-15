import React from 'react'
import PropTypes from 'prop-types'

const Bio = ({bio}) => (
        <p>
            {bio}
        </p>
)

Bio.propTypes = {
    bio: PropTypes.string.isRequired
}

export default Bio