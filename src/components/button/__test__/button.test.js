import { render, screen } from '@testing-library/react';
import Button from '../button.component';

test('renders button component with valid prop', () => {
  render(<Button name="Click Me" />);
  const buttonElement = screen.getByRole("button", { name: "Click Me" });
  expect(buttonElement).toBeInTheDocument();
});

test('renders button component with inavlid prop', () => {
  render(<Button name="Click Me" />);
  const buttonElement = screen.queryByText(/save/i);
  expect(buttonElement).not.toBeInTheDocument();
});


