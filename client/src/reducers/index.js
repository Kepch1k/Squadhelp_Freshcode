import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import goodsReducers from './goodsReducers';
import userReducers from './userReducers';
import isLoginReducers from './isLoginReducers';
import getAllUsersReducer from './getAllUsersReducer';
import ChangeBanStatus from './ChangeBanStatus';


const appReducer = combineReducers({
  goodsReducers,
  userReducers,
  isLoginReducers,
  getAllUsersReducer,
  ChangeBanStatus,
  form: formReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
