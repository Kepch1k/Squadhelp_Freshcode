import ACTION from './actiontsTypes';

export const getGoodsAction = () => ({
  type: ACTION.GOODS_ACTION,
});

export const getSingleGoodsAction = id => ({
  type: ACTION.SINGLE_GOODS_ACTION,
  id,
});

export const updateSingleGoodsAction = id => ({
  type: ACTION.SINGLE_GOODS_ACTION,
  id,
});

export const userLogin = (dataToSend) => ({
  type: ACTION.USER_LOGIN,
  dataToSend,

});

export const userSignUp = (dataToSend) => ({
  type: ACTION.USER_SIGN_UP,
  dataToSend,

});

export const userIsLogin = (user) => ({
  type: ACTION.USER_IS_LOGIN,
  user,
});

export const getAllUsers = () =>({
  type: ACTION.GET_ALL_USERS,
});

export const userBaned = (id,banStatus) =>({
  type: ACTION.CHANGE_IS_BANED,
  id,
  banStatus
});

export const logout = () =>({
  type: ACTION.IS_LOGOUT,
});
