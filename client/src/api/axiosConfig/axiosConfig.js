import axios from 'axios';
import {TOKENS_KEY} from '../../constants/consts';
import ACTION from '../../actions/actiontsTypes';
import { restURL } from '../baseURL';
import Store from '../../boot/store';
import history from '../../boot/browserHistory';

//console.log("here",(JSON.parse(localStorage.getItem(TOKENS_KEY))).access);
axios.interceptors.request.use( config => {
  //console.log('interceptors:',(JSON.parse(localStorage.getItem(TOKENS_KEY))).access);

  //console.log('type:',config.headers);
//(JSON.parse(localStorage.getItem(TOKENS_KEY))).access

  //const dich = (JSON.parse(localStorage.getItem(TOKENS_KEY))).access;
  if (localStorage.getItem(TOKENS_KEY)){
    config.headers.common['Authorization'] = "Bearer " + (JSON.parse(localStorage.getItem(TOKENS_KEY))).access
  }

  return config;
}, error => {
  return Promise.reject(error);
});

/*axios.interceptors.response.use(
  response => response,
  async (error) => {
    try {

      switch (error.response.status) {
        case 401:
          console.log(401);
          localStorage.clear();
          history.push('/login');
          break;
        case 419:
          console.log(419,{refresh: localStorage.getItem(TOKENS_KEY)});
          const {data: {tokenPair: tokens, user}} = await axios.post(`${restURL}/refresh`, {refresh: localStorage.getItem(TOKENS_KEY)});
          Store.dispatch({type: ACTION.TOKENS_ACTION_WITH_LOCAL, tokens});
          Store.dispatch({type: ACTION.USERS_RESPONSE, user});
          break;
      }

    } catch (err) {
      //Store.dispatch({type: ACTION.TOKEN_ERROR, err});
    }

    return error;
  });
*/


//axios/config

export default axios;

