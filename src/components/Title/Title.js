import React from "react";
import PropTypes from 'prop-types';

import "./Title.css";

const Title = ({title, title2}) => (
    <div className="title">
        <h1>{title}</h1>
        <h5>{title2}</h5>
    </div>
);

Title.propTypes = {
    title: PropTypes.string,//.isRequired
    title2: PropTypes.string,
};

Title.defaultProps = {
    title: "ToDo list",
    title2: "for you...",
};

export default Title;