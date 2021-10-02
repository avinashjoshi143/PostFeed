import { cleanup, render, screen } from '@testing-library/react';
import PostEditPage from '../posteditpage.component';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../../redux/root.reducer';

const INITIAL_STATE = {
    post: {
        searchField: "",
        posts: [],
        isDataLoaded: false
    }
}

const store = createStore(rootReducer, INITIAL_STATE)

afterEach(cleanup);

const MockPostEditPage = ({ children }) => {
    return (
        <MemoryRouter initialEntries={[{ pathname: "/formeditpage", state: { title: "Post Title1", body: "Post Body1" } }]}>
            <Provider store={store}>
                <PostEditPage> {children} </PostEditPage>
            </Provider>
        </MemoryRouter>
    )
}

test('renders heading element with valid prop', () => {
    render(<MockPostEditPage />);
    const headingElement = screen.getByText(/edit post/i);
    expect(headingElement).toBeInTheDocument();
});

test('render button element', () => {
    render(<MockPostEditPage />);
    const buttonElement = screen.getByRole("button", { name: "Save" });
    expect(buttonElement).toBeInTheDocument();
});

test('navigate to home onclick of cancel', () => {
    render(<MockPostEditPage />);
    const buttonElement = screen.getByRole("button", { name: "Cancel" });
    expect(buttonElement).toBeInTheDocument();
})
