/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  data: {},
  isFetching: false,
  error: null,
  loginFailed: false,
  user:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
        loginFailed: false,
      };
    }
    case ACTION.LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: null,
        loginFailed: false,
      };
    }
    case ACTION.LOGIN_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
        loginFailed: true,
      };
    }
    case ACTION.USER_LOGOUT: {
      console.log("here too :",action.user);
      return {
        ...state,
        user:action.userToRead,
        loginFailed: false,
      };
    }
    case ACTION.SET_USER: {
      console.log("here too :",action.user);
      return {
        ...state,
        user:action.user,
        loginFailed: false,
      };
    }
    default: {
      return state;
    }
  }
}
