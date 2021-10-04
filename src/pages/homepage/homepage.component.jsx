
import React, { useEffect, useState } from 'react';
import getPostData from '../../utility/getpostdata';
import CardList from '../../components/card-list/card.list.component';
import SearchBox from '../../components/search-box/search-box.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPostData, selectIsDataLoaded, selectSearchField } from '../../redux/post/post.selector';
import { fetchPostData, filterByTitle } from '../../redux/post/post.actions';
import './homepage.style.css';
import Spinner from '../../components/spinner/spinner.component';
import PropTypes from 'prop-types';
import Header from '../../components/Header/header.component';

export const HomePage = ({ fetchPostData, posts, isDataLoaded, searchField, filterByTitle }) => {

    const [state, setState] = useState({ isNotClicked: true, suggestions: [] });

    useEffect(() => {
        if (!posts.length)
            getPostData().then(data => fetchPostData(data));
    }, [posts.length, fetchPostData])

    const handleChange = event => {
        let title = event.target.value;
        let matches = [];
        if (title.length > 0) {
            matches = posts.filter(post => {
                const regex = new RegExp(`${title}`, "gi");
                return post.title.match(regex)
            })
        }
        console.log(matches.length);
        if (matches.length && searchField !== '') {
            setState({ ...state, isNotClicked: false });
        }
        else {
            setState({ suggestions: [], isNotClicked: true });
        }
        setState({ ...state, suggestions: matches });
        filterByTitle(title);
    }

    const handleClick = title => {
        filterByTitle(title);
        setState({ isNotClicked: false, suggestions: [] });
    }

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchField.trim().toLowerCase()))
    return (
        <div className={`App ${state.suggestions.length && searchField !== '' ? 'blurbackground' : 'adjust-width'}`}>
            <Header className="apph1" heading="Post Feed" />
            <SearchBox
                placeHolder='search posts'
                handlechange={handleChange}
                value={searchField}
            />
            <div className="postionabsolute" >
                {
                    state.suggestions.length ?
                        state.suggestions.map(suggestion =>
                            <h2
                                key={suggestion.id}
                                onClick={() => handleClick(suggestion.title)}
                                className="suggestion"
                            >
                                {suggestion.title}
                            </h2>)
                        : searchField !== '' && state.isNotClicked ? <h2 className="suggestion">
                            No suggestions Available
                        </h2>
                            : ''
                }
            </div>
            {
                isDataLoaded ? (<CardList className="fixedposition" posts={filteredPosts} />) : <Spinner data-testid="spinner" />
            }
        </div>
    );
}

HomePage.propTypes = {
    fetchPostData: PropTypes.func,
    post: PropTypes.array,
    isDataLoaded: PropTypes.bool,
    searchField: PropTypes.string,
    filterByTitle: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    posts: selectPostData,
    isDataLoaded: selectIsDataLoaded,
    searchField: selectSearchField,
})

const mapDispatchToProps = dispatch => ({
    fetchPostData: userposts => dispatch(fetchPostData(userposts)),
    filterByTitle: title => dispatch(filterByTitle(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
