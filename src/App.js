import './App.css';
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import NominationsList from './components/NominationsList'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'

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
          var filmResults = [...response.data.Search];
          var result = filmResults.map(film => {
            var o = Object.assign({}, film);
            o.isActive = true;
            return o;
          });
          console.log(result);
          setSearchResults(result);
        })
        .catch(error => {
          console.log(error)
        })
    };
  }

  const addToNominations = (nominee, id) => {
    let nominationsDuplicate = [...nominations];
    nominationsDuplicate.push(nominee);
    setNominations(nominationsDuplicate);

    disableButton(id);
  }

  const disableButton = id => {
    let results = [...searchResults];
    results.forEach(movie => {
      return movie.imdbID === id ? movie.isActive = false : null
    })
  }

  const activateButton = id => {
    let results = [...searchResults];
    results.forEach(movie => {
      return movie.imdbID === id ? movie.isActive = true : null
    })
  }

  const removeNomination = (nominee, id) => {
    let nominationsDuplicate = [...nominations];
    const newNominationsArray = nominationsDuplicate.filter(nom => {
      return nom.imdbID !== nominee.imdbID
    });
    setNominations(newNominationsArray);

    activateButton(id);
  }

  return (
    <>
      <div style={{ display: 'flex', marginTop: 30, justifyContent: 'center' }}>
        <div style={{ paddingRight: 10, marginTop: 55, marginRight: 40 }}>
          <h1>The Shoppies</h1>
          <SearchBar
            handleChange={handleInputChange}
            searchTerm={searchTerm}
            handleEnterKeyPress={handleEnterKeyPress}
          />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <ResultsList
            searchTerm={searchTerm}
            results={searchResults}
            addNominee={addToNominations}
          />
        </div>

      </div>

      <div style={{ paddingTop: 15 }}>
        <NominationsList
          nominations={nominations}
          removeNominee={removeNomination}
        />
      </div>

    </>
  );
}

export default App;
