import * as actions from '../post.actions';
import { PostActionType } from '../post.types';
import getPostData from "../../../utility/getpostdata";
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

it("should create an action for load post data", async () => {
    const posts = await getPostData();
    const expectedAction = {
        type: PostActionType.FETCH_POST_DATA,
        payload: posts
    }
    expect(actions.fetchPostData(posts)).toEqual(expectedAction)
})

it("Should create an action for user input search filter", () => {
    const title = "Hello";
    const expectedAction = {
        type: PostActionType.FILTER_POST_BY_TITLE,
        payload: title
    }
    expect(actions.filterByTitle(title)).toEqual(expectedAction)
})

it("Should create an action for updating post title and body", () => {
    const post = { id: 1, userId: 1, title: "Changed title of id 1", body: "Changed body of id 1" }
    const expectedAction = {
        type: PostActionType.UPDATE_POST_TITLE_AND_BODY,
        payload: post
    }
    expect(actions.updatePostTitleAndBody(post)).toEqual(expectedAction)
})