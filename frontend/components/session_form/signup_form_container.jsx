import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup, clearErrors, login} from '../../actions/session_actions';
import { closeModal, openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'



class SigninForm extends React.Component {
    
    constructor(props) {
        super(props);


        
      
        this.state = {
            email:'',
            password: '',
            confirm_password: '',
            lname: '',
            fname: '',
            phone_number: '',
            interests:'',
            referral: '',
            fname_error: '',
            lname_error: '',
            email_error: '',
            password_error: '',
            confirm_password: '',





        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSessionErrors = this.renderSessionErrors.bind(this);
        this.clearErrorsOnClick = this.clearErrorsOnClick.bind(this);
        this.setErrors = this.setErrors.bind(this)

    };

    
    // componentWillReceiveProps(nextProps) {
    //     // Any time props.email changes, update state.
    //     if (nextProps.errors !== this.props.errors) {
    //         this.setState( {fname_error: this.props.errors.includes("Fname can't be blank") ? "First name can't be blank" : null})
    //     }
    //   }

    

    setErrors() {   

    
         this.setState( {fname_error: this.props.errors.includes("Fname can't be blank") ? "First name can't be blank" : null,
         lname_error: this.props.errors.includes("Lname can't be blank") ? "Last name can't be blank" : null,
         email_error: this.props.errors.includes("Email can't be blank") ? "Email name can't be blank" : this.props.errors.includes("Email has already been taken") ? "Email is already in use" : null,
         password_error: this.props.errors.includes("Password is too short (minimum is 6 characters)") ? "Password is too short (minimum is 6 characters)" : null})
    
    }

    


    handleSubmit(e) {
        
    
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .fail(() => this.setErrors());

    };

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });

        
    }

    renderSessionErrors(field, error) {
        
        this.setState({
            [field] : error
        })
        
    }

    clearErrorsOnClick() {  
        this.props.clearErrors()

    }

    clearError(field) {
        
        this.setState({
            [field] : ''
        })

    }



    componentWillUnmount(){
    
        this.props.clearErrors();


    }


    
    
    
    render(){
        
        const signUp = (
            <div>
                <div className="text-center-signup">Welcome to Stockhome</div>
                <div className="topbox-signup-container">

                    <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Tenant-Occupied-100x80%403x-a1953a95522aee8912cfbbaeb020531d.png" className="signup-images" />
                    <div className="box-signup limit">

                        Buy and sell tenant-occupied rental houses outside your local market
                    </div >
                    <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Certified-100x80%403x-664c0c78e3ea43053e4a0a6139f16d31.png" className="signup-images" />
                    <div className="box-signup limit">
                        Properties on our marketplace are certified so you can invest with confidence
                    </div>
                    <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Property-Manager-100x80%403x-fc2efcd67358fdb918c84c54a55728fc.png" className="signup-images" />
                    <div className="box-signup limit">
                        Select a trusted local property manager and own without the hassle
                    </div>
                </div>


                <div id="session-side">

                    <form onSubmit={this.handleSubmit} className="signup-form-container">
                        <br />
                        <div className="name-signup">

                            <div className="input-container" >
                                <FontAwesomeIcon icon={faUser} className="signup-icons" />
                                <input type="text"
                                    value={this.state.fname}
                                    placeholder="First Name"
                                    onChange={this.update('fname')}

                                    onClick={() => this.clearError('fname_error')}
                                    className="signup-input"
                                />
                            </div>

                            <div className="lastname">
                                <input type="text"
                                    value={this.state.lname}
                                    placeholder="Last Name"
                                    onChange={this.update('lname')}
                                    onClick={() => this.clearError('lname_error')}
                                    className="signup-input-lastname"

                                />
                            </div>
                        </div>

                        <div className="error-fn-ln">
                            <div className="session-error-new fname-fix">{this.state.fname_error} </div>
                            <div className="session-error-new lname-fix">{this.state.lname_error} </div>
                        </div>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faEnvelope} className="signup-icons" />
                            <input type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                onClick={() => this.clearError('email_error')}
                                className="signup-input"
                            />
                        </div>
                        <div className="session-error-new">{this.state.email_error} </div>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} className="signup-icons" />
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                onClick={() => this.clearError('password_error')}
                                className="signup-input input-fix"
                            />
                        </div>
                        <div className="session-error-new">{this.state.password_error} </div>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} className="signup-icons" />
                            <input type="password"
                                value={this.state.confirm_password}
                                placeholder="Confirm Password"
                                onChange={this.update('confirm_password')}
                                className="signup-input"
                            />
                        </div>
                        <div className="session-error-new">{(this.state.confirm_password !== this.state.password) && this.state.confirm_password.length > 0 ?
                            "Your confirm password does not match" : null}

                        </div>

                        <select onChange={this.update('interests')} id="signup-interest" >
                            <option>I am interested in:</option>
                            <option value="Buying Properties">Buying Properties</option>
                            <option value="Selling Properties">Selling Properties</option>
                            <option value="Inviting Clients as a Broker or Agent">Inviting Clients as a Broker or Agent </option>
                        </select>

                        <br />


                        <select onChange={this.update('referral')} id="signup-interest" >
                            <option>How did you hear about us?</option>
                            <option value="Friend">Friend</option>
                            <option value="Taylor Swift">Taylor Swift</option>
                            <option value="Google">Google </option>
                            <option value="Someone from App Academy">Someone from App Academy </option>
                            <option value="Erik">Erik</option>
                            <option value="Ryan Mapa">Ryan Mapa</option>
                        </select>


                        <br />

                        <div className="tos">By clicking Sign Up or registering, I agree to  <a href="#"> Stockhomes's Terms & Conditions </a> and I acknowledge that I understand the <a href="#">agency relationship</a>
                        </div>
                        <br />
                        <input className="login-submit" type="submit" value="Sign Up" />
                        <br />
                        <div className="tos">Already a member? <Link to="/login">Sign In</Link> </div>
                    </form>
                    <br />



                    <div className="wrapper limit_two">
                        <div className="line"></div>
                        <div className="wordwrapper">
                            <div className="word">or</div>
                        </div>
                    </div>

                    <div id="session-side-three">
                        <div className="limit_two">

                            <FontAwesomeIcon icon={faHorseHead} className="input-icons-demo" />
                            <input className="signup-demo" type="submit" value="Log in with Demo User" onClick={() => this.props.login({ email: "JohnDoe@gmail.com", password: "password" })} />
                        </div>
                    </div>
                </div>


            </div>
        )


        const signupModal = (
            <div>
                <div className="text-center-signup-modal">Sign up now and start building wealth! </div>
                <div className="topbox-signup-container">

                    <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Tenant-Occupied-100x80%403x-a1953a95522aee8912cfbbaeb020531d.png" className="signup-images" />
                    <div className="box-signup limit">

                        Buy and sell tenant-occupied rental houses outside your local market
                    </div >
                    <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Certified-100x80%403x-664c0c78e3ea43053e4a0a6139f16d31.png" className="signup-images" />
                    <div className="box-signup limit">
                        Properties on our marketplace are certified so you can invest with confidence
                    </div>
                    <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Property-Manager-100x80%403x-fc2efcd67358fdb918c84c54a55728fc.png" className="signup-images" />
                    <div className="box-signup limit">
                        Select a trusted local property manager and own without the hassle
                    </div>
                </div>


                <div id="session-side-modal">

                    <form onSubmit={this.handleSubmit} className="signup-form-container">
                        <br />
                        <div className="name-signup">

                            <div className="input-container" >
                                <FontAwesomeIcon icon={faUser} className="signup-icons" />
                                <input type="text"
                                    value={this.state.fname}
                                    placeholder="First Name"
                                    onChange={this.update('fname')}

                                    onClick={() => this.clearError('fname_error')}
                                    className="signup-input"
                                />
                            </div>

                            <div className="lastname">
                                <input type="text"
                                    value={this.state.lname}
                                    placeholder="Last Name"
                                    onChange={this.update('lname')}
                                    onClick={() => this.clearError('lname_error')}
                                    className="signup-input-lastname"

                                />
                            </div>
                        </div>

                        <div className="error-fn-ln">
                            <div className="session-error-new fname-fix">{this.state.fname_error} </div>
                            <div className="session-error-new lname-fix">{this.state.lname_error} </div>
                        </div>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faEnvelope} className="signup-icons" />
                            <input type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                onClick={() => this.clearError('email_error')}
                                className="signup-input"
                            />
                        </div>
                        <div className="session-error-new">{this.state.email_error} </div>

                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} className="signup-icons" />
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                onClick={() => this.clearError('password_error')}
                                className="signup-input input-fix"
                            />
                        </div>
                        <div className="session-error-new">{this.state.password_error} </div>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} className="signup-icons" />
                            <input type="password"
                                value={this.state.confirm_password}
                                placeholder="Confirm Password"
                                onChange={this.update('confirm_password')}
                                className="signup-input"
                            />
                        </div>
                        <div className="session-error-new">{(this.state.confirm_password !== this.state.password) && this.state.confirm_password.length > 0 ?
                            "Your confirm password does not match" : null}

                        </div>

                        <select onChange={this.update('interests')} id="signup-interest" >
                            <option>I am interested in:</option>
                            <option value="Buying Properties">Buying Properties</option>
                            <option value="Selling Properties">Selling Properties</option>
                            <option value="Inviting Clients as a Broker or Agent">Inviting Clients as a Broker or Agent </option>
                        </select>

                        <br />


                        <select onChange={this.update('referral')} id="signup-interest" >
                            <option>How did you hear about us?</option>
                            <option value="Friend">Friend</option>
                            <option value="Taylor Swift">Taylor Swift</option>
                            <option value="Google">Google </option>
                            <option value="Someone from App Academy">Someone from App Academy </option>
                            <option value="Erik">Erik</option>
                            <option value="Ryan Mapa">Ryan Mapa</option>
                        </select>


                        <br />

                        <div className="tos">By clicking Sign Up or registering, I agree to  <a href="#"> Stockhomes's Terms & Conditions </a> and I acknowledge that I understand the <a href="#">agency relationship</a>
                        </div>
                        <br />
                        <input className="login-submit" type="submit" value="Sign Up" />
                        <br />
                        <div className="tos">Already a member? <span onClick={() => {this.props.openModal("loginModal", null) }}className="signin-modal">Sign In</span> </div>
                    </form>
                    <br />



                    <div className="wrapper limit_two">
                        <div className="line"></div>
                        <div className="wordwrapper">
                            <div className="word">or</div>
                        </div>
                    </div>

                    <div id="session-side-three">
                        <div className="limit_two">

                            <FontAwesomeIcon icon={faHorseHead} className="input-icons-demo" />
                            <input className="signup-demo" type="submit" value="Log in with Demo User" onClick={() => {this.props.login({ email: "JohnDoe@gmail.com", password: "password" })
                        this.props.closeModal()
                        
                        }} />
                        </div>
                    </div>
                </div>


            </div>
        )
      
        return(

            <div>
                {this.props.location.pathname !== "/signup" ? signupModal : signUp}
            </div>
        

        )
    }


}


const mapStateToProps = ({ errors} ) => {

    return{
        errors: errors.session
        

    }


}

const mapDispatchToProps = dispatch => {

    return{
        openModal: (type, data) => dispatch(openModal(type, data)),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user)),
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
    }

}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SigninForm))