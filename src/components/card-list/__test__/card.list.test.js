import { render, screen } from '@testing-library/react';
import getPostData from '../../../utility/getpostdata';
import { CardList } from '../card.list.component';
import { BrowserRouter } from 'react-router-dom';

const MockCardList = posts => (
    <BrowserRouter>
        <CardList posts={[posts]} />
    </BrowserRouter>
)

it("Rednder Card component with posts list", async () => {
    const posts = await getPostData();
    render(<MockCardList posts={[posts]} />);
    const cardComponent = screen.getAllByTestId('card')
    expect(cardComponent.length).toBe(1)
})
