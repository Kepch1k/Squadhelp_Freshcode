/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  data: {},
  isFetching: false,
  error: null,
  loginFailed: false,
  user: null,
  updated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
        loginFailed: false,
        updated: false,
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
    case ACTION.USER_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
        loginFailed: true,
      };
    }
    case ACTION.USER_LOGOUT: {
      return {
        ...state,
        user: action.userToRead,
        loginFailed: false,
      };
    }
    case ACTION.SET_USER: {
      return {
        ...state,
        user: action.user,
        loginFailed: false,
      };
    }
    case ACTION.GET_USER: {
      return {
        ...state,
        user: action.user,
        loginFailed: false,
        updated: true,
      };
    }
    default: {
      return state;
    }
  }
}
