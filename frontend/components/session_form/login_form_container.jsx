import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'
class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);

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


    renderSessionErrors() {
        return(
            <div>
                {this.props.errors[0]}
            </div>
        )
    }


    render() {
        return(

            <div className="login-form-container">
                <div className="text-center">Log In</div>
                <br/>
                <FontAwesomeIcon icon={faHorseHead}  className="input-icons-demo"/>
                <input className="login-demo" type="submit" value="Log in with Demo User" />
                <hr/> 
                
                <form onSubmit={this.handleSubmit} className="login-form-box">
             
                    <br/>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faUser}  className="input-icons"/>
                            <input type="text"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.update('email')}
                                    className="login-input"
                            />
                        </div>
                    {this.renderSessionErrors()}
                    <br/>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faLock}  className="input-icons"/>
                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                            className="login-input"
                        /> 
                    </div>

                    <br/>

                    <input className="login-submit" type="submit" value="Log In" /> 
                </form>
                <div id= "login-padding"><Link to="/">Forgot password?</Link></div>
               
                <br/>
                <span>Dont have an account?</span> <Link to="/signup">Sign Up</Link>
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
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginform);



