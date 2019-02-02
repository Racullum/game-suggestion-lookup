import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Image from "../components/Image";
import "../css/ImageContainer.css";
import { generateImageUrl } from "../utils/images";

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "" // default sort param
    };

    this.generateImageUrlFromCoverId = this.generateImageUrlFromCoverId.bind(
      this
    );
  }

  // Generates a single url from a cover id of a single game
  generateImageUrlFromCoverId(coverId, size) {
    generateImageUrl(coverId).then(json => {
      this.setState({
        imgUrl:
          "//images.igdb.com/igdb/image/upload/t_" +
          size +
          "/" +
          json[0].image_id +
          ".jpg"
      });
    });
  }

  componentDidMount() {
    this.generateImageUrlFromCoverId(this.props.coverId, this.props.size);
  }

  componentDidUpdate(prevProps) {
    if (this.props.coverId != prevProps.coverId) {
      this.generateImageUrlFromCoverId(this.props.coverId, this.props.size);
    }
  }

  render() {
    return <Image imgUrl={this.state.imgUrl} onClick={this.props.onClick} />;
  }
}

ImageContainer.propTypes = {
  coverId: PropTypes.number.isRequired
};

export default connect()(ImageContainer);
