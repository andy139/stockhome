import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { withRouter } from "react-router";

const mapStateToProps = ({ session, entities: { users }}) => {
    return {
      currentUser: users[session.id]
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
  });


  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
  
