import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



import NavbarContainer from './navbar/navbar_container';
import LoginformContainer from './session_form/login_form_container';
import SignupformContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <header>
        <NavbarContainer/>
            
        </header>
        <Switch>
            <Route path="/login" component={LoginformContainer}/>
            <Route path="/signup" component={SignupformContainer}/>
        </Switch>

    </div>
)


export default App;