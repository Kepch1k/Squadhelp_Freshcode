/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  data: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_ALL_USERS_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }
    case ACTION.GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
      };
    }
    case ACTION.GET_ALL_USERS_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTION.GET_ALL_USERS_UPDATE: {
      //console.log("its work ",action.data);
      return {
        ...state,
        data: state.data.map(user => user.id === action.data.id ?
          // transform the one with a matching id
          { ...user, ...action.data } :
          // otherwise return original
          user
        ),
        //data: action.data,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}


