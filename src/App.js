import './App.css';
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import Nominations from './components/Nominations'
import ButtonOption from './components/ButtonOption'
import Spacer from './components/Spacer'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  }

  return (
    <>
      <Spacer>
        <h1>The Shoppies</h1>
      </Spacer>
      <Spacer>
        <SearchBar
          handleChange={handleInputChange}
          searchTerm={searchTerm}
        />
      </Spacer>
      <Spacer>
        <ResultsList 
        searchTerm={searchTerm}
        />
      </Spacer>
    </>
  );
}

export default App;
