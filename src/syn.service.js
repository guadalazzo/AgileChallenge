const URL = 'https://api.datamuse.com/words?ml=';
const axios = require('axios');
const limit = '10';

export default function getSynonym(word) {
  return axios.get(`${URL}${word}&max=${limit}`);
}
