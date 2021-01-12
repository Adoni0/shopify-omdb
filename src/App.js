import './App.css';
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import Nominations from './components/Nominations'
import ButtonOption from './components/ButtonOption'
import Spacer from './components/Spacer'
import axios from 'axios'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

  }

  const handleEnterKeyPress = e => {

    if (e.keyCode === 13) {
      axios.get(`http://www.omdbapi.com/`, {
        params: {
          s: `${searchTerm}`,
          apikey: 'ad4a728f',
          type: 'movie'
        }
      })
        .then(response => {
          console.log(response.data.Search)
          setSearchResults(response.data.Search)
        })
        .catch(error => {
          console.log(error)
        })
    };
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
          handleEnterKeyPress={handleEnterKeyPress}
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
