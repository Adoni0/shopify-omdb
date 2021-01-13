import './App.css';
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import NominationsList from './components/NominationsList'
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

  const addToNominations = (nominee) => {
    let nominationsDuplicate = [...nominations];
    nominationsDuplicate.push(nominee);
    setNominations(nominationsDuplicate);
  }

  const removeNomination = () => {
    
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
          results={searchResults}
          addNominee={addToNominations}
        />
      </Spacer>
      <Spacer>
        <NominationsList 
        nominations={nominations}
        />
      </Spacer>
    </>
  );
}

export default App;
