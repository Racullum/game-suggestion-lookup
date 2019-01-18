import { connect } from 'react-redux'
import React from 'react'

import { searchForPerson } from '../actions'
import Person from '../components/Person'
import Bio from '../components/Bio'
import ImageContainer from './ImageContainer';
      

const mapStateToProps = state => ({
    person: state.person
})

const PersonContainer = ({person}) => {
           console.log("IN person container with " + person.suggestedGames)
       
                return (
                        <div>
                            <ul>
                                {person.suggestedGames.map((game) => (
                                <li>
                                    <Person gameName={game.name} summary={game.summary} coverId={game.cover}/>
                                </li>
                                ))}
                            </ul>                      
                        </div>
                    )
}

export default connect(mapStateToProps)(PersonContainer)