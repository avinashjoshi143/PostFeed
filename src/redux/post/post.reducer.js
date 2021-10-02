import { PostActionType } from "./post.types";
import { getUpdatedTitleAndBody } from "../../utility/getupdatedtitleandbody";

export const INITIAL_STATE = {
    searchField: "",
    posts: [],
    isDataLoaded: false
}

export const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionType.FETCH_POST_DATA:
            return {
                ...state,
                isDataLoaded: true,
                posts: action.payload,
            }

        case PostActionType.FILTER_POST_BY_TITLE:
            return {
                ...state,
                searchField: action.payload
            }
        case PostActionType.UPDATE_POST_TITLE_AND_BODY:
            return {
                posts: getUpdatedTitleAndBody(state, action.payload),
                ...state,
            }
        default: return state;
    }
}

export default postReducer;