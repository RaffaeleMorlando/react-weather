import '../css/Header.css';
import SearchBar from '../components/SearchBar';

const Header = ({onSearch}) => {
  return (
    <header className="header_container">
      <h1>Weather App</h1>
      <SearchBar onSearch={onSearch}/>
    </header>
  )
}

export default Header;
