import React from "react";
import ReactDOM from "react-dom";
import {login, signup, logout, clearErrors} from '../frontend/actions/session_actions'
// import {signup, logout, login} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {fetchProperties, fetchProperty} from './actions/property_actions'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

 

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);


  if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchProperties = fetchProperties
    window.fetchProperty = fetchProperty
    
    
  }
  

 

});