import { put, call } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { getUserLogin, signUpLogin } from '../api/rest/restContoller';
import { TOKENS_KEY } from '../constants/consts';
import history from '../boot/browserHistory';

export function* getLoginSaga({ dataToSend }) {

  try {
    const RES = yield getUserLogin(dataToSend);
    if (RES.data){
      const USER = RES.data.user;
      const TOKENS = RES.data.tokenPair;
      yield put({ type: ACTION.SET_USER, user: USER });
      const TOKENS_JSON = JSON.stringify(TOKENS);
      localStorage.setItem(TOKENS_KEY, TOKENS_JSON);
      yield call(history.push('/'));
    }else if (RES.response.data ==="User is baned"){
      yield put({ type: ACTION.LOGIN_BANNED});
    }else if (RES.response.data ==="User not founds"){
      yield put({ type: ACTION.USER_ERROR, error: RES.response });
    }
  } catch (e) {
  }
}

export function* signUpSaga({ dataToSend }) {
  try {
    const { data } = yield signUpLogin(dataToSend);
    const USER = data.user;
    const TOKENS = data.tokenPair;
    const TOKENS_JSON = JSON.stringify(TOKENS);
    localStorage.setItem(TOKENS_KEY, TOKENS_JSON);
    yield put({ type: ACTION.SET_USER, user: USER });
    yield call(history.push('/'));
  } catch (e) {
    yield put({ type: ACTION.USER_ERROR, error: e });
  }
}

