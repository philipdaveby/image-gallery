import Image from './image';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('The image component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has an img tag', () => {
    render(<Image />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  test('has an img with the correct source', () => {
    render(<Image src="../logo.svg"/>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '../logo.svg');
  });

  test('has correct alt text', () => {
    render(<Image alt="This is cool"/>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'This is cool');
  });
});
