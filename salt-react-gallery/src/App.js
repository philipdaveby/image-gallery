import './App.css';
import ImageList from './components/ImageList';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import {Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className='root-div'>
      <Nav />
      <Switch>
        <Route path='/search'>
          <ImageList />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
