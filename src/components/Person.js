import React from 'react'
import PropTypes from 'prop-types'

import '../css/Person.css'

import PersonName from './PersonName'
import Image from './Image'
import Bio from './Bio'

const Person = ({person}) => (
    <div className="card">
        <PersonName personName={person.personName}/>
        <Bio bio={person.bio}/>
    </div>
    
)

Person.propTypes = {
    person: PropTypes.shape({
        personName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired
    }).isRequired
}

export default Person