import React from "react";
import './search-box.style.css';
import PropTypes from 'prop-types';

export const SearchBox = ({ handlechange, placeHolder, value }) => {

        return (
                <input
                        type="search"
                        className="search"
                        value={value}
                        placeholder={placeHolder}
                        onChange={handlechange}
                />
        )
};

SearchBox.propTypes = {
        placeHolder: PropTypes.string,
        handlechange: PropTypes.func
}

export default SearchBox;