import { render, screen } from '@testing-library/react';
import Card from '../card.component';
import { BrowserRouter } from 'react-router-dom'

const CardTest = ({ post }) => (
  <BrowserRouter>
    <Card post={post} />
  </BrowserRouter>
);

test('renders heading element with valid prop', () => {
  render(<CardTest post={{ title: "Post Title" }} />);
  const headingElement = screen.getByRole("heading", { name: "Post Title" });
  expect(headingElement).toBeInTheDocument();
});

test('renders heading element with inavlid prop', () => {
  render(<CardTest post={{ title: "Post Title" }} />);
  const headingElement = screen.queryByRole("heading", { name: "Good Morning" });
  expect(headingElement).not.toBeInTheDocument();
});

test('renders paragraph element with valid prop', () => {
  render(<CardTest post={{ body: "Post body" }} />);
  const headingElement = screen.getByText(/post body/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders paragraph element with inavlid prop', () => {
  render(<CardTest post={{ body: "Post body" }} />);
  const headingElement = screen.queryByText(/not equal/i);
  expect(headingElement).not.toBeInTheDocument();
});

test('renders link element with valid prop', () => {
  render(<CardTest post={{}} />);
  const linkElement = screen.getByText(/edit/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders link element with invalid prop', () => {
  render(<CardTest post={{}} />);
  const linkElement = screen.queryByText(/go/i);
  expect(linkElement).not.toBeInTheDocument();
});