import { put, call } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { getUserLogin,signUpLogin } from '../api/rest/restContoller';
import {USER_KEY, TOKENS_KEY} from '../constants/consts';
import history from "../boot/browserHistory";

export function* getLoginSaga({ dataToSend }) {
  console.log("ssskkkaaa",dataToSend);
  yield put({ type: ACTION.LOGIN_REQUEST });
  try {
    console.log("pre",dataToSend);
    const { data } = yield getUserLogin(dataToSend);
    console.log("ssskkkaa2a",data);
    const USER = data.user;
    const TOKENS = data.tokenPair;
      console.log("ssskkkaaa");
    yield put({ type: ACTION.SET_USER, user:USER });
    console.log("ssskkkaaa");
    //const USER_JSON = JSON.stringify(USER) ;
    const TOKENS_JSON = JSON.stringify(TOKENS) ;
    //localStorage.setItem( USER_KEY, USER_JSON);
    localStorage.setItem( TOKENS_KEY, TOKENS_JSON);
    yield put({ type: ACTION.LOGIN_SUCCESS, data });
    yield call(history.push('/') );
  } catch (e) {
    yield put({ type: ACTION.LOGIN_ERROR, error: e });
  }
}

export function* signUpSaga({ dataToSend }) {
  try {
    console.log("sss",dataToSend);
    const { data } = yield signUpLogin(dataToSend);

    const USER = data.user;
    const TOKENS = data.tokenPair;
    const USER_JSON = JSON.stringify(USER) ;
    const TOKENS_JSON = JSON.stringify(TOKENS) ;
    localStorage.setItem( USER_KEY, USER_JSON);
    localStorage.setItem( TOKENS_KEY, TOKENS_JSON);
    yield put({ type: ACTION.USER_SIGN_UP_SUCCESS, data });
    yield call(history.push('/') );
  } catch (e) {
    yield put({ type: ACTION.USER_SIGN_UP_ERROR, error: e });
  }
}

