import React from "react";
import PropTypes from "prop-types";

const Summary = ({ summary }) => <p>{summary}</p>;

Summary.propTypes = {
  summary: PropTypes.string.isRequired
};

export default Summary;
