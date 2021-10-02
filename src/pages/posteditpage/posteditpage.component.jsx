import { useState } from 'react';
import { updatePostTitleAndBody, filterByTitle } from '../../redux/post/post.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './posteditpage.style.css';
import Button from '../../components/button/button.component';
import TextArea from '../../components/textarea/textarea.component';
import PropTypes from 'prop-types';
import Header from '../../components/Header/header.component';

function PostEditPage({ location, updatePostTitleAndBody, filterByTitle, history }) {
    const [state, setState] = useState({ title: location.state.title, body: location.state.body });

    const handleTitleChange = (event) => {
        setState({ ...state, title: event.target.value });
    }

    const handleBodyChange = (event) => {
        setState({ ...state, body: event.target.value });
    }

    const handleSaveClick = (event) => {
        event.preventDefault();
        location.state.title = state.title;
        location.state.body = state.body;
        updatePostTitleAndBody(location.state);
        filterByTitle("");
        history.push('/');
    }

    const handleCancelClick = () => {
        filterByTitle("");
        history.push('/');
    }

    return (
        <div className="formContainer">
            <Header className="formh1" heading="Edit Post" />
            <form onSubmit={handleSaveClick}>
                <TextArea isTitle={true} value={state.title} handlechange={handleTitleChange} required /> <br />
                <TextArea value={state.body} handlechange={handleBodyChange} required /> <br />
                <Button type="submit" name="Save" />
                <Button onClick={handleCancelClick} name="Cancel" />
            </form>
        </div>
    )
}

PostEditPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    updatePostTitleAndBody: PropTypes.func,
    filterByTitle: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    updatePostTitleAndBody: post => dispatch(updatePostTitleAndBody(post)),
    filterByTitle: title => dispatch(filterByTitle(title))
});

export default withRouter(connect(null, mapDispatchToProps)(PostEditPage));