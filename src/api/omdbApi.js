import axios from 'axios'

export default {
    getFilms: (searchTerm) => {
        return axios.get(`http://www.omdbapi.com/`, {
            params: {
              s: `${searchTerm}`,
              apikey: 'ad4a728f',
              type: 'movie'
            }
    })
}
}