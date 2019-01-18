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
      }

    componentDidMount() {
        console.log("component mounted " + this.props.coverId)
        generateImageUrl(this.props.coverId)
        .then(json => {
            console.log("returning json " + json[0].url)
            this.setState({imgUrl: json[0].url})
        })
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