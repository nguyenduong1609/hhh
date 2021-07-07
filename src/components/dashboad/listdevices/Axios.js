import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://60dac40a801dcb0017290b41.mockapi.io/',
});

export default Axios;