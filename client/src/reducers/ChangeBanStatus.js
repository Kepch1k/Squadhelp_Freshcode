/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {

  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {

    case ACTION.CHANGE_IS_BANED_SUCCESS : {
      return {
        ...state,
        error: null,
      };
    }
    case ACTION.CHANGE_IS_BANED_ERROR: {
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


