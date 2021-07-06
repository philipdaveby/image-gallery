import FlipBox from './FlipBox';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('The FlipBox component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlipBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('renders correct image', () => {
    render(<FlipBox imgSrc="../logo.svg"/>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '../logo.svg');
  });
  test('renders correct alt text', () => {
    render(<FlipBox imgAlt="An example test image"/>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'An example test image');
  });
});
