import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'
import { closeModal, openModal } from "../../actions/modal_actions";

class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);

    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleEmail(email) {
        let emailArr = email.split('');
        setInterval(() => {
          if (emailArr.length > 0) {
            this.setState({
              email: this.state.email + emailArr.shift()
            })
          }
        }, 50)
      }

    
      handlePass(pass) {
        let passArr = pass.split('');
        setInterval(() => {
          if (passArr.length > 0) {
            this.setState({
              password: this.state.password + passArr.shift()
            })
          }
        }, 50)
      }


    loginDemoUser(e) {
         
        e.preventDefault();

        this.setState({
            email: "",
            password: ""
        })

        let email = "JohnDoe@gmail.com";
        let password ="password";

        this.handleEmail(email);

        setTimeout(() => {
            this.handlePass(password);
          }, 1000)
        setTimeout(() => {
            this.props.processForm(this.state)
        }, 1500)


    }



    componentWillUnmount(){
        this.props.clearErrors();


    }


    


    render() {

      const modalLogin = ( 
      
        <div className="flex-center-container">
          <div className="login-form-container-modal">
            <h1 className="text-center">Login</h1>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <br />
            <FontAwesomeIcon icon={faHorseHead} className="input-icons-demo" />
            <input
              className="signup-demo"
              type="submit"
              value="Log in with Demo User"
              onClick={this.loginDemoUser}
            />
            <hr />

            <form onSubmit={this.handleSubmit} className="login-form-box">

              <br />
              <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icons" />
                <input type="text"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.update('email')}
                  className="signup-input"
                />
              </div>

              <br />
              <div className="input-container">
                <FontAwesomeIcon icon={faLock} className="input-icons" />
                <input type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.update('password')}
                  className="signup-input"
                />
              </div>

              <div className="session-error">{this.props.errors[0]}</div>
              <input className="login-submit" type="submit" value="Login" />
            </form>
            <div id="login-padding"><Link to="/">Forgot password?</Link></div>

            <br />
            <span>Don't have an account?</span> <span className="signup-modal-click" onClick={() => this.props.openModal("signupModal", null)}>Sign Up</span>
          </div>
        </div>
      )

      const login = (<div className="flex-center-container">
        <div className="login-form-container">
          <div className="text-center">Login</div>
          
          <br />
          <FontAwesomeIcon icon={faHorseHead} className="input-icons-demo" />
          <input
            className="signup-demo"
            type="submit"
            value="Login with Demo User"
            onClick={this.loginDemoUser}
          />
          <hr />

          <form onSubmit={this.handleSubmit} className="login-form-box">

            <br />
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="input-icons" />
              <input type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')}
                className="signup-input"
              />
            </div>

            <br />
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icons" />
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="signup-input"
              />
            </div>

            <div className="session-error">{this.props.errors[0]}</div>
            <input className="login-submit" type="submit" value="Login" />
          </form>
          <div id="login-padding"><Link to="/">Forgot password?</Link></div>

          <br />
          <span>Don't have an account?</span> <Link to="/signup">Sign Up</Link>
        </div>
      </div>)

        return(
          <div> 
            
     
            {this.props.location.pathname !== "/login" ? modalLogin : login }
          
          
          </div>

    

        )
    }
    
}


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',

  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (type, data) => dispatch(openModal(type, data)),
    closeModal: () => dispatch(closeModal()),
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loginform));



