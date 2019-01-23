import React from "react";
import "../css/Image.css";

const Image = ({ imgUrl, onClick }) => (
  <img src={imgUrl} onClick={onClick} alt={imgUrl} />
);

export default Image;
