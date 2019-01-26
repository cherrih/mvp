import React from 'react';

const Search = (props) => {
  return (
    <form id="search-form">
      <input type="text" placeholder="I'm traveling to . . ." id="search-searchbar"/>
      <input type="submit" value="GO" id="search-submit"/>
    </form>
  )
}

export default Search;