import React from "react";
import PropTypes from 'prop-types';
import './textarea.style.css';

export const TextArea = ({ value, handlechange, isTitle, ...otherInputProps }) => (
    <>
        <label
            For={isTitle ? 'title' : 'body'}
            className="form-label" >{isTitle ? "Post Title:" : "Post Body:"}
        </label>

        <textarea
            className={isTitle ? 'title' : ''}
            data-testid={isTitle ? 'titletextarea' : 'bodytextarea'}
            cols="30"
            rows="5"
            name="title"
            value={value}
            onChange={handlechange}
            {...otherInputProps} />
    </>
);

TextArea.propTypes = {
    title: PropTypes.string,
    handlechange: PropTypes.func
}

export default TextArea;