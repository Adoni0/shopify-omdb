import axios from 'axios'

export default {

  getFilms: (searchTerm) => {
    return axios.get(`http://www.omdbapi.com/`, {
      params: {
        s: `${searchTerm}`,
        apikey: `${process.env.REACT_APP_API_KEY}`,
        type: 'movie'
      }
    })
  }

}
