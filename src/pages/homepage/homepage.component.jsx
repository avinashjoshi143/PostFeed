
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

    const [text, SetText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    let [isNotClicked, setIsNotClicked] = useState(true);

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
        if(matches.length && text !== ''){
            setIsNotClicked(false);
        }
        else {
            setIsNotClicked(true);
        }
        setSuggestions(matches);
        filterByTitle(title);
        SetText(title);
    }

    const handleClick = title => {
        filterByTitle(title);
        SetText(title)
        setSuggestions([]);
        setIsNotClicked(false);
    }

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchField.trim().toLowerCase()))
    return (
        <div className={`App ${suggestions.length && text !=='' ? 'blurbackground' : 'adjust-width'}`}>
            <Header className="apph1" heading="Post Feed" />
            <SearchBox
                placeHolder='search posts'
                handlechange={handleChange}
                value={text}
            />
            <div className="postionabsolute">
                {
                    suggestions.length ?
                        suggestions.map(suggestion =>
                            <h2
                                key={suggestion.id}
                                onClick={() => handleClick(suggestion.title)}
                                className="suggestion"
                            >
                                {suggestion.title}
                            </h2>)
                        : text !== '' && isNotClicked ?  <h2 className="suggestion">
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
