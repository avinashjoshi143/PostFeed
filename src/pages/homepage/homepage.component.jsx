
import React, { useEffect } from 'react';
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

    let suggestions = posts.map(post => post.title)

    useEffect(() => {
        if (!posts.length)
            getPostData().then(data => fetchPostData(data));
    }, [posts.length, fetchPostData])

    const handleChange = event => {
        let title = event.target.value;
        filterByTitle(title);
    }

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchField.trim().toLowerCase()))
    return (
        <div className="App">
            <Header className="apph1" heading="Post Feed" />
            <SearchBox
                placeHolder='search posts'
                handlechange={handleChange}
            />
            {
                isDataLoaded ? (<CardList posts={filteredPosts} />) : <Spinner data-testid="spinner" />
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
