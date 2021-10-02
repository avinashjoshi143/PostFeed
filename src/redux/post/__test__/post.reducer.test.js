import { PostActionType } from '../post.types';
import * as reducers from '../post.reducer';


describe("Post Reducer Test", () => {

    const INITIAL_STATE = {
        searchField: "",
        posts: [],
        isDataLoaded: false
    }

    it("Should return initial state", () => {
        expect(reducers.postReducer(undefined, {})).toEqual({ searchField: "", posts: [], isDataLoaded: false })
    })

    it("Should update the data in posts array", () => {
        expect(reducers.postReducer(INITIAL_STATE, {
            type: PostActionType.FETCH_POST_DATA,
            payload: ["item1", "item2"]
        })).toEqual({
            searchField: "",
            isDataLoaded: true,
            posts: ["item1", "item2"]
        })
    })

    it("Should update the searchField Property", () => {
        expect(reducers.postReducer({
            searchField: "",
            isDataLoaded: true,
            posts: ["item1", "item2", "item3"]
        }, {
            type: PostActionType.FILTER_POST_BY_TITLE,
            payload: "item1"
        })).toEqual({
            isDataLoaded: true,
            posts: ["item1", "item2", "item3"],
            searchField: "item1"
        })
    })

    it("Should filter array by searchField provided by the user", () => {
        expect(reducers.postReducer({
            searchField: "",
            isDataLoaded: true,
            posts: [{ id: 1, userId: 1, title: "Post1", body: "Body1" },
            { id: 2, userId: 1, title: "Post2", body: "Body2" }]
        }, {
            type: PostActionType.UPDATE_POST_TITLE_AND_BODY,
            payload: { id: 1, userId: 1, title: "Changed Tile Post", body: "Changed Body Post" }
        })).toEqual({
            isDataLoaded: true,
            posts: [{ id: 1, userId: 1, title: "Changed Tile Post", body: "Changed Body Post" },
            { id: 2, userId: 1, title: "Post2", body: "Body2" }],
            searchField: ""
        })
    })
})