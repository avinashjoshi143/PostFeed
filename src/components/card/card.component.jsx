import React from "react";
import './card.style.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Card = ({ post }) => {
    const { title, body } = post;
    return (
        <div className="card-container">
            <Link className="link" to={{ pathname: '/formeditpage', state: post }}> Edit </Link>
            <h3 data-testid='card'> {title} </h3>
            <p> {body} </p>
        </div>
    )
};

Card.propTypes = {
    post: PropTypes.object,
    title: PropTypes.string,
    body: PropTypes.string
}

export default Card;