import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const SearchForm = props => {
  const [searchQuery,setSearchQuery] = useState('');

  const getFromLocalStorage = () => {
    let data = window.localStorage.getItem('search');
    return data ? JSON.parse(data) : { search: [] };
  }

  const setLocalStorage = query => {
    const data = getFromLocalStorage();
    data.search = data.search.filter(item => item.toLowerCase() !== query.toLowerCase());
    data.search.push(query);
    window.localStorage.setItem('search', JSON.stringify(data));
  }

  const submit = (event) => {
    event.preventDefault();
    setLocalStorage(searchQuery);
    props.getValue(searchQuery);
    setSearchQuery('');
    }
  
  const pressedDropdown = query => {
    setSearchQuery(query);
  }

  return (
    <section className="dropdown">
      <form onSubmit={ submit } id="main__search-form" >
        <input type="text" className="search__input" placeholder="Search high res photos" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <Link to={{
          pathname: "/search",
          state: {
            searchQuery: searchQuery,
          },
        }}>
        <input type="submit" value="search" className="search__button"/>
        </Link>
        <Dropdown sendDropdownText={ pressedDropdown } getFromLocalStorage={ getFromLocalStorage } query={searchQuery}/>
      </form>
    </section>
  )
}

export default SearchForm;
