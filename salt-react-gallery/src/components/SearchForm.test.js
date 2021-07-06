import SearchForm from './SearchForm';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('The SearchForm component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><SearchForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});