import { render, screen } from '@testing-library/react';
import SearchBox from '../search-box.component';

test('renders input element with the valid placeholder', () => {
  render(<SearchBox placeHolder="Enter input" />);
  const inputElement = screen.getByPlaceholderText(/enter input/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders input element with the invalid placeholder', () => {
  render(<SearchBox placeHolder="Enter input" />);
  const inputElement = screen.queryByPlaceholderText(/without/i);
  expect(inputElement).not.toBeInTheDocument();
});
