const URL = 'https://api.datamuse.com/words?ml=';
const axios = require('axios');

export default function getSynonym(word) {
  return axios.get(URL+word);
}
