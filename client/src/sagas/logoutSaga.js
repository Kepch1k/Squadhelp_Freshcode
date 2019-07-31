import { put, call } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import history from '../boot/browserHistory';
import { logout } from '../api/rest/restContoller';
import { TOKENS_KEY } from '../constants/consts';

export function* logoutSaga() {

  try {

    const token = JSON.parse(localStorage.getItem(TOKENS_KEY));
    const data = { token: token.refresh };
    yield logout(data);
    localStorage.clear();
    const userToRead = null;
    yield put({ type: ACTION.DASHBOARD_CHANGED });
    yield put({ type: ACTION.USER_LOGOUT, userToRead });
    yield call(history.push('/'));
  } catch (e) {
  }
}

