import axios from 'axios';

const apiKey = '3rw7ZVQh2f0SOmOZtb38v0mf2Vulo2jY';
const apiClient = axios.create({
  baseUrl: 'https://api.nytimes.com/svc/mostpopular/v2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default {
  getMostViewedArticles() {
    return apiClient.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
  },
  getArticleById(id) {
    return apiClient.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=_id%3A"nyt%3A%2F%2Farticle%2F${id}%22&api-key=3rw7ZVQh2f0SOmOZtb38v0mf2Vulo2jY`)
  },
  getArticlesByQuery(query, sort) {
    return apiClient.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=${sort}&api-key=3rw7ZVQh2f0SOmOZtb38v0mf2Vulo2jY`)
  },
}

