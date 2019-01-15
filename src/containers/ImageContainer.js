import React from 'react'
import { connect } from 'react-redux'
import Image from '../components/Image'


const mapStateToProps = (state) => ({
    imgUrl: state.person.img
})

const generateImageUrl = (person) => {
    console.log("Logging person" + person.url);
   
}

const ImageContainer = ({dispatch, state}) => {
    console.log("This is a second attempt at logging" + state);
    return (
        
        <div>
            <Image />
        </div>
    )
}

export default connect(mapStateToProps)(Image)