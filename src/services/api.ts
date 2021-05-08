import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3333' || process.env.REACT_APP_HOST,
});
