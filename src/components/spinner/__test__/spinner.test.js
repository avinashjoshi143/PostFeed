import { render, screen } from '@testing-library/react'
import Spinner from '../spinner.component';

test("render spinner gif", () => {
    render(<Spinner />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
})