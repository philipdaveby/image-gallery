import Home from './Home';
import SearchForm from './SearchForm';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });

describe('The Home component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Should has h1 tag', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    expect(screen.getByRole('heading', {level:1})).toHaveTextContent('Welcome to salted PAJ\'s Gallery!');
  });
  test('Should have the search form', () => {
    const home = shallow(<Home />);
    expect(home.contains(<SearchForm />)).toEqual(true);
  });
});
