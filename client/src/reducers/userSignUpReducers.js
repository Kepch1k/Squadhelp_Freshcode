/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  data: {},
  error: null,
  loginFailed: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.USER_SIGN_UP_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        loginFailed: false,
      };
    }
    case ACTION.USER_SIGN_UP_ERROR: {
      return {
        ...state,
        error: action.error,
        loginFailed: true,
      };
    }
    default: {
      return state;
    }
  }
}


