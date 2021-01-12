import axios from 'axios'

export default (movieTitle) => {
    return axios.create({
        baseURL: `http://www.omdbapi.com/?s=${movieTitle}&apikey=ad4a728f`
    })
}