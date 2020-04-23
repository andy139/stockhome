import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute,ProtectedRoute, ModalProtectedRoute} from '../util/route_util'

import NavbarContainer from './navbar/navbar_container';
import LoginformContainer from './session_form/login_form_container';
import SignupformContainer from './session_form/signup_form_container';
import Splashpage from './splashpage/splashpage';
import PropertyIndexContainer from './property/property_index_container'
import PropertyShowContainer from './property_show/property_show_container'
import Modal  from './modal/modal'
import Saved from './saved/saved';
import SearchFooter from './search/search_footer';
import Footer from './footer/footer';
import Submenu from './submenu/submenu';
import Cart from './cart/cart';


import {withRouter} from 'react-router-dom'
const App = () => (
  <div className="app-height">
    <header>
      <NavbarContainer />

      <Modal></Modal>
    </header>

    <div className="content">
      <Route
        path={[
          "/saved-roofs",
          "/cart",
          "/investment-property-marketplace",
          "/property/:propertyId",
        ]}
        component={Submenu}
      />

      <Switch>
        <AuthRoute path="/login" component={LoginformContainer} />
        <AuthRoute path="/signup" component={SignupformContainer} />
        <Route exact path="/" component={Splashpage} />
        <ProtectedRoute exact path="/saved-roofs" component={Saved} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <Route
          path="/investment-property-marketplace"
          component={PropertyIndexContainer}
        />
        <Route path="/property/:propertyId" component={PropertyShowContainer} />
      </Switch>
    </div>

    <footer className="footer">
      <Route
        path={[
          "/saved-roofs",
          "/investment-property-marketplace",
          "/property/:propertyId",
          "/cart",
        ]}
        component={SearchFooter}
      />

      <Route
        path={[
          "/saved-roofs",
          "/investment-property-marketplace",
          "/property/:propertyId",
          "/cart",
        ]}
        component={Footer}
      />
    </footer>
  </div>
);


export default withRouter(App);