import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { TOKENS_KEY } from '../constants/consts';
import { userIsLogin } from '../api/rest/restContoller';

export function* isLoginSaga({user}) {
  //console.log("aga2");
  try {
    const token = localStorage.getItem(TOKENS_KEY);
    //console.log();
    if (!user && token){
      const { data } = yield userIsLogin();
      console.log(data);
      yield put({ type: ACTION.SET_USER, user:data });
      //yield put({ type: ACTION.IS_LOGIN_WAS, userToRead:data });
    }

  } catch (e) {
//console.log("again",e );
    yield put({ type: ACTION.IS_LOGIN_ERROR, error: e });
  }
}

