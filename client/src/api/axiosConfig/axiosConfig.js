import axios from 'axios';
import {TOKENS_KEY} from '../../constants/consts';
//import ACTION from '../../actions/actiontsTypes';
import { restURL } from '../baseURL';
// import Store from '../../boot/store';
import history from '../../boot/browserHistory';


axios.interceptors.request.use( config => {

  if (localStorage.getItem(TOKENS_KEY)){
    config.headers.common['Authorization'] = "Bearer " + (JSON.parse(localStorage.getItem(TOKENS_KEY))).access
  }

  return config;
}, error => {
  return Promise.reject(error);
});


axios.interceptors.response.use(
  response => response,
  async (error) => {

    try {
      switch (error.response.status) {
        case 401:
          console.log(401);
          localStorage.clear();
          history.push('/login');
          break;
        case 403:
          const {data: {tokenPair: tokens}} = await axios.post(`${restURL}/refresh`, {refresh: (JSON.parse(localStorage.getItem(TOKENS_KEY))).refresh});
          const TOKENS_JSON = JSON.stringify(tokens) ;
          localStorage.setItem( TOKENS_KEY, TOKENS_JSON);
          axios.defaults.headers.common['Authorization'] = "Bearer " + (JSON.parse(localStorage.getItem(TOKENS_KEY))).access;
          error.config.headers['Authorization'] = "Bearer " + (JSON.parse(localStorage.getItem(TOKENS_KEY))).access;

          break;
        default:break
      }
    } catch (err) {
    }

    if (localStorage.getItem(TOKENS_KEY)){
      return axios.request(error.config);
    }else{
    return error;}
  });

export default axios;

