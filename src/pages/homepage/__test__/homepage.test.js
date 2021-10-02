import { screen, render } from '@testing-library/react'
import React from 'react'
import { createStore } from 'redux'
import { HomePage } from '../homepage.component'
import rootReducer from '../../../redux/root.reducer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const posts = [{ id: 1, userId: 1, title: "Post Title1", body: "Post Body1" },
{ id: 2, userId: 1, title: "Post Title2", body: "Post Body2" },
{ id: 3, userId: 1, title: "Post Title3", body: "Post Body3" },
{ id: 4, userId: 1, title: "Post Title4", body: "Post Body4" }]

const INITIAL_STATE = {
    post: {
        searchField: "",
        isDataLoaded: false,
        posts: posts
    }
}

const store = createStore(rootReducer, INITIAL_STATE)

const Wrapper = ({ children }) => (
    <BrowserRouter><Provider store={store}> {children} </Provider></BrowserRouter>
)

describe("Home Page", () => {
    it("Should display title", () => {
        render(<HomePage posts={posts} searchField={""} isDataLoaded={true} />, { wrapper: Wrapper })
        const headElements = screen.getAllByTestId('card')
        expect(headElements.length).toEqual(4)
    })

    it("should filter cards by serachfield", () => {
        render(<HomePage posts={posts} searchField={"post title1"} isDataLoaded={true} />, { wrapper: Wrapper })
        const headElement = screen.getByRole("heading", { name: "Post Title1" })
        expect(headElement).toBeInTheDocument()
    })

    it("should filter cards by serachfield 2", () => {
        render(<HomePage posts={posts} searchField={"post title1"} isDataLoaded={true} />, { wrapper: Wrapper })
        const headElement = screen.queryByRole("heading", { name: "Post Title2" })
        expect(headElement).not.toBeInTheDocument()
    })
})