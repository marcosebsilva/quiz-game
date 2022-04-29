import axios from 'axios';

const opentdb = axios.create({
  baseURL: 'https://opentdb.com/',
  timeout: 1500,
});

export default opentdb;
