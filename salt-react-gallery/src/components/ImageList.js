import React, { useState,useEffect } from 'react';
import FlipBox from './FlipBox';
import axios from 'axios';
import SearchForm from './SearchForm';
import { useLocation } from 'react-router-dom';

// const [apiResponse, setApiResponse] = useState('');

// callAPI() {
//   fetch("http://localhost:9000/testAPI")
//       .then(res => res.text())
//       .then(res => this.setApiResponse(res));
// }

// useEffect(() => callAPI());

const ImageList = props => {
  const location = useLocation();
  const [imageData, setImageData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null); 
  const [page, setPage] = useState(0);

  const getValueFromForm = query => {
    setSearchQuery(query);
  };

  const getFromLocalStorage = () => {
    let data = window.localStorage.getItem('search');
    return data ? JSON.parse(data) : { search: [] };
  }

  useEffect(() => {
    const setLocalStorage = query => {
      const data = getFromLocalStorage();
      data.search = data.search.filter(item => item.toLowerCase() !== query.toLowerCase());
      data.search.push(query);
      window.localStorage.setItem('search', JSON.stringify(data));
    }
    if (location.state) {
      setSearchQuery(location.state.searchQuery);
      setLocalStorage(location.state.searchQuery);
    }
  }, [location]);

  useEffect(() => {
    if (searchQuery) {
      axios.get('http://localhost:9000/testAPI', {
        params: {
          query: searchQuery,
          page,
        }
      }).then(setImageData);
    }
  }, [setImageData, searchQuery, page]);

  return (
    <main>
      <SearchForm getValue={getValueFromForm}/>
      <section className="imagelist">
        {imageData ? imageData.data.map(image => {
          return (<FlipBox imgSrc={image.urls.regular} key={image.id} 
            imgAlt={image.alt_description} description={image.description}
            likes={image.likes}/> )
        })
      :''}
            { searchQuery ? 
      <div>
        <button className="imagelist__button" onClick={ () => setPage(page - 1) }>Prev</button>
        <button className="imagelist__button" onClick={ () => setPage(page + 1) }>Next</button>
      </div>
      : ''}
      </section>
    </main>
  );
};

export default ImageList;
