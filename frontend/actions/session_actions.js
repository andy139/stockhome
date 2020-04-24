import * as APIUtil from '../util/session_api_util';
import {fetchSaves} from './save_actions';
import { fetchCart } from "./save_actions";



export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CLEAR_ERRORS = 'RECEIVE_CLEAR_ERRORS';
export const RECEIVE_CLEAR = "RECEIVE_CLEAR";


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const clearErrors = () => ({
  type: RECEIVE_CLEAR_ERRORS,

});

export const clear = () => ({
  type: RECEIVE_CLEAR,
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => {
    dispatch(receiveCurrentUser(user))
    
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
    .then(() => dispatch(fetchSaves()))
    .then(() => dispatch(fetchCart()))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  )).then(dispatch(clear()))
);
