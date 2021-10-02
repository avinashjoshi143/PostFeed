import { PostActionType } from "./post.types";

export const fetchPostData = post => ({
    type: PostActionType.FETCH_POST_DATA,
    payload: post
});

export const filterByTitle = title => ({
    type: PostActionType.FILTER_POST_BY_TITLE,
    payload: title
});

export const updatePostTitleAndBody = post => ({
    type: PostActionType.UPDATE_POST_TITLE_AND_BODY,
    payload: post
});


