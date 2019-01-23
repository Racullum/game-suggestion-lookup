import React from "react";

const Image = ({ imgUrl, onClick }) => (
  <img src={imgUrl} onClick={onClick} style={{ width: "100%" }} alt={imgUrl} />
);

export default Image;
