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
}