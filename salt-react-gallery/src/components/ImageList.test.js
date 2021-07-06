import FlipBox from './FlipBox';
import ImageList from './ImageList';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from "axios";
import { BrowserRouter } from 'react-router-dom';
import pictureMock from '../__mocks__/pictureMock';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path"
  })
}));

describe('The ImageList component', () => {
  beforeEach(()=>{
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          results: pictureMock
        }
      });
    });
  })
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ImageList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('contains FlipBoxes', () => {
    const imgList = shallow(<ImageList />);
    expect(imgList.contains(<FlipBox />)).toEqual(true);
  });
  test('contains prev buttons', () => {
    const imgList = shallow(<ImageList />);
    const button = imgList.find('button');
    expect(button).toHaveTextContent('Prev');
  });

  test('Fetches data from unsplash', async () => {
    render(<BrowserRouter><ImageList /></BrowserRouter>); 
    const images = await screen.findAllByRole('img');
    expect(images).toHaveLength(10);
  })
});
