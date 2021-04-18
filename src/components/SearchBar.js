import '../css/SearchBar.css';
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

  const [text,setText] = useState('');

  const searchByCity = (e) => {
    
    e.preventDefault();

    onSearch(text);

  }
 
  return (
    <form className="searchbar_form" onSubmit={searchByCity}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter City"/>
      <input type="submit" value="Search"/>
    </form>
  )

}

export default SearchBar;
