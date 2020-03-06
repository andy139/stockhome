import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute} from '../util/route_util'

import NavbarContainer from './navbar/navbar_container';
import LoginformContainer from './session_form/login_form_container';
import SignupformContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <header>
        <NavbarContainer/>
            
        </header>
      
        <AuthRoute path="/login" component={LoginformContainer}/>
        <AuthRoute path="/signup" component={SignupformContainer}/>
  

    </div>
)


export default App;