import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import {openModal, closeModal} from '../actions/modal_actions'

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);


const ModalProtected = ({ component: Component, path, loggedIn, exact, openModal }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
      )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

const mapDispatchToProps = dispatch => {

    return {
        openModal: (type, data) => dispatch(openModal(type,data))
    }
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const ModalProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalProtected));
