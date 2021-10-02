import { createSelector } from "reselect";

export const selectPost = state => state.post;

export const selectPostData = createSelector(
    [selectPost],
    post => post.posts
);

export const selectIsDataLoaded = createSelector(
    [selectPost],
    post => post.isDataLoaded
);

export const selectSearchField = createSelector(
    [selectPost],
    post => post.searchField
);
