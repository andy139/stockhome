import React from "react";
import ReactDOM from "react-dom";
import {login, signup, logout} from '../frontend/actions/session_actions'
// import {signup, logout, login} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, root);


  // TESTING 
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.testUser = {email: "andy@gmail.com", password: "LOLOLOL", fname:"andy", lname: "tran"}
  window.login = login;
  window.signup = signup;
  window.logout = logout;
});