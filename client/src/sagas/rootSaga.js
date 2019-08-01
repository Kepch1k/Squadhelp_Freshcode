import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import { getLoginSaga, signUpSaga } from './usersSaga';
import { isLoginSaga } from './isLoginSaga';
import { getAllUsersSaga } from './getAllUsersSaga';
import { changeBanStatusSaga } from './changeBanStatusSaga';
import { logoutSaga } from './logoutSaga';
import { dashboardChange } from './manageToElements';

function* rootSaga() {
  //yield takeLatest(ACTION.LOGIN_BANNED, ()=>console.log("AGA"));
  yield takeLatest(ACTION.GET_ALL_USERS, getAllUsersSaga);
  yield takeLatest(ACTION.USER_SIGN_UP, signUpSaga);
  yield takeLatest(ACTION.USER_LOGIN, getLoginSaga);
  yield takeLatest(ACTION.USER_IS_LOGIN, isLoginSaga);
  yield takeLatest(ACTION.CHANGE_IS_BANED, changeBanStatusSaga);
  yield takeLatest(ACTION.IS_LOGOUT, logoutSaga);
  yield takeLatest(ACTION.DASHBOARD, dashboardChange);
}

export default rootSaga;
