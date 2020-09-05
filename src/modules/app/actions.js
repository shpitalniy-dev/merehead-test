import actionTypes from '../../constants/actionTypes';

export const addUser = payload => ({ type: actionTypes.ADD_USER, payload });
export const getUsers = () => ({ type: actionTypes.GET_USERS });
export const deleteUser = payload => ({ type: actionTypes.DELETE_USER, payload });
export const updateUser = payload => ({ type: actionTypes.UPDATE_USER, payload });
export const getMoreUsers = () => ({ type: actionTypes.GET_MORE_USERS });