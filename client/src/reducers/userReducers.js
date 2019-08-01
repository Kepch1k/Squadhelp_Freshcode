/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  data: {},
  isFetching: false,
  error: null,
  loginFailed: false,
  user: null,
  updated: false,
  banned:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
        banned:false,
        loginFailed: false,
        updated: false,
      };
    }
    case ACTION.LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.data,
        isFetching: false,
        banned:false,
        error: null,
        loginFailed: false,
      };
    }
   case ACTION.LOGIN_BANNED: {
      return {
        ...state,
        banned:true,
        isFetching: false,
        loginFailed: false,
      };
    }
    case ACTION.USER_ERROR: {
      return {
        ...state,
        banned:false,
        error: action.error,
        isFetching: false,
        loginFailed: true,
      };
    }
    case ACTION.USER_LOGOUT: {
      return {
        ...state,
        banned:false,
        user: action.userToRead,
        loginFailed: false,
      };
    }
    case ACTION.SET_USER: {
      return {
        ...state,
        banned:false,
        user: action.user,
        loginFailed: false,
      };
    }
    case ACTION.GET_USER: {
      return {
        ...state,
        banned:false,
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
