import React from 'react'
import PropTypes from 'prop-types'

import '../css/Person.css'

import PersonName from './PersonName'
import Image from './Image'
import Bio from './Bio'
import ImageContainer from '../containers/ImageContainer';

const Person = ({gameName, coverId, summary}) => (
    <div className="card">
        <PersonName personName={gameName}/>
        <ImageContainer coverId={coverId} />
        <Bio bio={summary}/>
    </div>
    
)

Person.propTypes = {
    person: PropTypes.shape({
        gameName: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired
    }).isRequired
}

export default Person