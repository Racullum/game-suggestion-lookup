import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Image from '../components/Image'
import '../css/ImageContainer.css'
import { generateImageUrl } from '../actions'


class ImageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          imgUrl: '' // default sort param
        }

        this.generateImageUrlFromCoverId = this.generateImageUrlFromCoverId.bind(this);
      }

      
    generateImageUrlFromCoverId(coverId, size) {
    console.log("Cover id is " + coverId)
    generateImageUrl(coverId)
    .then(json => {
        console.log("returning json " + json[0].image_id)
        this.setState({imgUrl: '//images.igdb.com/igdb/image/upload/t_' + size +'/' + json[0].image_id + '.jpg'})
    })
}

    componentDidMount() {
        console.log("component mounted " + this.props.coverId)
        this.generateImageUrlFromCoverId(this.props.coverId, this.props.size)
      
    }

    componentDidUpdate(prevProps) {
        if(this.props.coverId != prevProps.coverId) {
            this.generateImageUrlFromCoverId(this.props.coverId, this.props.size)
        }
    }

    render() {
   
            return (
          
            <Image imgUrl={this.state.imgUrl} onClick={this.props.onClick}/>
            
            )
        

    }
}




    ImageContainer.propTypes = {
        coverId: PropTypes.string.isRequired
    }
    

export default connect()(ImageContainer)