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
import Splashpage from './splashpage/splashpage';
import PropertyIndexContainer from './property/property_index_container'
import PropertyShowContainer from './property_show/property_show_container'
import Saved from './saved/saved';
const App = () => (


 
    <div>

        <header>
            <NavbarContainer/>
        </header>
       
        <Switch>

            <AuthRoute path="/login" component={LoginformContainer}/>
            <AuthRoute path="/signup" component={SignupformContainer}/>
            <Route exact path="/" component={Splashpage}/>
            <Route exact path="/saved-roofs" component={Saved} />
            <Route path="/investment-property-marketplace" component={PropertyIndexContainer} />
            <Route path="/property/:propertyId" component={PropertyShowContainer} />
        </Switch>
        
  

    </div>
)


export default App;