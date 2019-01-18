import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Image from '../components/Image'
import { generateImageUrl } from '../actions'


class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          imgUrl: '' // default sort param
        }

        this.generateImageUrl = this.generateImageUrl.bind(this);
      }

      
    generateImageUrl(coverId) {
    console.log("Cover id is " + coverId)
    generateImageUrl(coverId)
    .then(json => {
        console.log("returning json " + json[0].image_id)
        this.setState({imgUrl: '//images.igdb.com/igdb/image/upload/t_cover_big/' + json[0].image_id + '.jpg'})
    })
}

    componentDidMount() {
        console.log("component mounted " + this.props.coverId)
        generateImageUrl(this.props.coverId)
        .then(json => {
            console.log("returning json " + json[0].image_id)
            this.setState({imgUrl: '//images.igdb.com/igdb/image/upload/t_cover_big/' + json[0].image_id + '.jpg'})
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.coverId != prevProps.coverId) {
            generateImageUrl(this.props.coverId)
            .then(json => {
                console.log("returning json " + json[0].image_id)
                this.setState({imgUrl: '//images.igdb.com/igdb/image/upload/t_cover_big/' + json[0].image_id + '.jpg'})
            })
        }
    }

    render() {
   
            return (

            <Image imgUrl={this.state.imgUrl} />
            )
        

    }
}




    ImageContainer.propTypes = {
        coverId: PropTypes.string.isRequired
    }
    

export default connect()(ImageContainer)