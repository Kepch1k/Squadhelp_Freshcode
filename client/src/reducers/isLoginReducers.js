/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  error: null,
  user:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.IS_LOGIN_WAS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        user:action.userToRead

      };
    }
    case ACTION.IS_LOGIN_NO: {
      return {
        ...state,
        user:action.userToRead,
        error: null,

      };
    }
    case ACTION.IS_LOGIN_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}


