import * as selectors from '../post.selector';

describe("Testing all Post Selectors", () => {
    let state = {
        post: {
            posts: [],
            searchField: "",
            isDataLoaded: false
        }
    }
    it("Should select the post object inside of an postreducer state", () => {

        expect(selectors.selectPost(state)).toEqual({
            posts: [],
            searchField: "",
            isDataLoaded: false
        })
    })

    it("Should select the posts array inside of an post object", () => {
        expect(selectors.selectPostData(state)).toEqual([])
    })

    it("Should select the isDataLoaded boolean property from post object", () => {
        expect(selectors.selectIsDataLoaded(state)).toEqual(false)
    })

    it("Should select the searchField propery from post object", () => {
        expect(selectors.selectSearchField(state)).toEqual("")
    })
})