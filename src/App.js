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

  return (
    <>
      <Spacer>
        <h1>The Shoppies</h1>
      </Spacer>
      <Spacer>
        <SearchBar />
      </Spacer>
    </>
  );
}

export default App;
