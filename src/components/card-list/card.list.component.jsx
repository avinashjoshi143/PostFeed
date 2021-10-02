import React from "react";
import Card from "../card/card.component";
import './card.list.style.css';
import PropTypes from 'prop-types';

export const CardList = ({ posts }) => (
    <div className="card-list">
        {
            posts.map(post =>
                <Card key={post.id} post={post} />
            )
        }
    </div>
);

CardList.propTypes = {
    posts: PropTypes.array
}

export default CardList;