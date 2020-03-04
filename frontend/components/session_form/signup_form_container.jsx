import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/session_actions';
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
            phone: '',
            interest:'',
            misc: '',




        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    renderSessionErrors() {
        return(
            <div>
                {this.props.errors[0]}
            </div>
        )
    }
    
    
    render(){

        return(
            <div> 
                <div className="text-center-signup">Welcome to Stockhome</div>
                
                <div className="topbox-signup-container">
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/illus/Tenant-Occupied-100x80@3x-a1953a95522aee8912cfbbaeb020531d.png" className="signup-images" />
                    <div className="box-signup">
    
                        Buy and sell tenant-occupied rental houses outside your local market
                    </div >
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/illus/Certified-100x80@3x-664c0c78e3ea43053e4a0a6139f16d31.png" className="signup-images" />
                    <div className="box-signup">
                        Properties on our marketplace are certified so you can invest with confidence
                    </div>
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/illus/Property-Manager-100x80@3x-fc2efcd67358fdb918c84c54a55728fc.png" className="signup-images" />
                    <div className="box-signup">
                        Select a trusted local property manager and own without the hassle
                    </div>          
                </div>


                <div id="session-side">
                    <div className="signup-form-container">
                        <form onSubmit={this.handleSubmit}>
                            <br/>
                            <div className="name-signup">

                                <div className="input-container" >    
                                    <FontAwesomeIcon icon={faUser}  className="signup-icons"/>
                                    <input type="text"
                                            value={this.state.fname}
                                            placeholder="First Name"
                                            onChange={this.update('fname')}
                                            className="signup-input"
                                    />
                                </div>
                             
                                <div className="lastname">
                                    <input type="text"
                                            value={this.state.lname}
                                            placeholder="Last Name"
                                            onChange={this.update('lname')}
                                            className="signup-input-lastname"
                                    />
                                </div>
                            </div>

                            <br/>

                            <div className="input-container">
                                <FontAwesomeIcon icon={faEnvelope}  className="signup-icons"/>
                                <input type="text"
                                    value={this.state.email}
                                    placeholder = "Email"
                                    onChange={this.update('email')}
                                    className="signup-input"
                                />
                            </div>
                
                            <br/>   
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock}  className="signup-icons"/>
                                <input type="password"
                                    value={this.state.password}
                                    placeholder = "Password"
                                    onChange={this.update('password')}
                                    className="signup-input"
                                />
                            </div>
                            <br/>   
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock}  className="signup-icons"/>
                                <input type="password"
                                    value={this.state.confirm_password}
                                    placeholder = "Confirm Password"
                                    onChange={this.update('confirm_password')}
                                    className="signup-input"
                                />
                            </div>
                            <br/>
                            <div>
                                <select onChange={this.update('interest')} id="signup-interest" >
                                    <option>I am interested in:</option>
                                    <option value="Buying Properties">Buying Properties</option>
                                    <option value="Selling Properties">Selling Properties</option>
                                    <option value="Inviting Clients as a Broker or Agent">Inviting Clients as a Broker or Agent </option>
                                </select>
                            </div>
                            <br/>

                            <div>
                                <select onChange={this.update('misc')} id="signup-interest" >
                                    <option>How did you hear about us?</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Taylor Swift">Taylor Swift</option>
                                    <option value="Google">Google </option>
                                    <option value="Someone from App Academy">Someone from App Academy </option>
                                    <option value="Erik">Erik</option>
                                    <option value="Ryan Mapa">Ryan Mapa</option>
                                </select>
                            </div>

                            <br/>
                            
                            <div className = "tos">By clicking Sign Up or registering, I agree to  <a href="#"> Stockhomes's Terms & Conditions </a> and I acknowledge that I understand the <a href="#">agency relationship</a>
                            </div>
                            <br/>
                            <input className="login-submit" type="submit" value="Sign Up" />  
                            <br/>
        
                        </form>
                        <br/>
                        <span>Already a member? <Link to="/login">Sign In</Link> </span> 
                    </div>

                    <div className="wrapper">
                        <div className="line"></div>
                        <div className="wordwrapper">
                            <div className="word">or</div>                                        
                        </div>
                    </div>
                    
                    <div id="session-side-three">
                        <div>

                            <FontAwesomeIcon icon={faHorseHead}  className="input-icons-demo"/>
                            <input className="signup-demo" type="submit" value="Log in with Demo User" />
                        </div>
                    </div>
                </div>
                

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
        processForm: (user) => dispatch(signup(user))
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(SigninForm)