import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";


class Navbar extends React.Component {
    constructor(props){
        super(props)
    
    }

    //this.props.logout
    //this.props.currentUser =>has attributes .fname, etc 



    render(){



        const signUpNotBolded = () => (


            <div className="nav-signup-link">
                <Link className="signup-text-blue" to="/signup">Sign Up</Link>
            </div>

        )

        const signUpBolded = () => (


            <div className="nav-signup-link-bolded">
               <Link to="/signup" className="signup-text">Sign Up</Link>
            </div>

        )
        

        const loggedIn = () => (
            <div id="fade-effect">
                <div className = "navbar-fullwidth-loggedin fixed-nav-bar">
                    <div className="navbar-container-loggedin show_logo">

                        <div className="navbar-left" >

                            <div className="navbar-logo .u-text-align-center--palm-wide">
                                <Link to="/" className="nav-main-link"> 
                                    <img src="/assets/logo.png" className="logo-img" />
                                    <p className="logo-text">stockhome</p>
                                </Link>
                            </div>

                            <div className="navbar-buy-own-sell limit_navbar">
                            
                                <div className="left-nav-misc hvr-overline-reveal"><Link to="/investment-property-marketplace" className="remove-decoration">Buy</Link></div>
                                <div className="left-nav-misc hvr-overline-reveal">Own</div>
                                <div className="left-nav-misc hvr-overline-reveal">Sell</div>
                            </div>
                    
                        </div>


                        <div className="navbar-right">
                            <div className="right-nav-misc">
                                <a href="https://www.linkedin.com/in/andy139/" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                                <a href="https://www.github.com/andy139" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-github"></i> Github</a>
                                {/* <a href="https://www.angellist.com/andy139" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-angellist"></i> AngelList</a> */}
                                <input 
                                    type="submit" 
                                    value="Log Out"
                                    onClick={this.props.logout}
                                />

                                <div className="right-nav-misc">Welcome Back, {this.props.currentUser.fname}</div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        )

    

        const notLoggedIn = () => (
           
                <div className = "navbar-fullwidth-loggedout fixed-nav-bar">
                    <div className="navbar-container-loggedout show_logo">

                        <div className="navbar-left" >

                                <div className="navbar-logo">
                                    <Link to="/" className="nav-main-link"> 
                                        <img src="/assets/logo.png" className="logo-img" />
                                        <p className="logo-text">stockhome</p>
                                    </Link>
                                </div>

                                <div className="navbar-buy-own-sell limit_navbar">
                                    <div className="left-nav-misc hvr-overline-reveal"><Link to="/investment-property-marketplace" className="remove-decoration">Buy</Link></div>
                                    <div className="left-nav-misc hvr-overline-reveal">Own</div>
                                    <div className="left-nav-misc hvr-overline-reveal">Sell</div>
                                    
                                </div>
                        </div>    


                  

                            
                        <div className ="navbar-right">

                                <a href="https://www.linkedin.com/in/andy139/" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                                <a href="https://www.github.com/andy139" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-github"></i> Github</a>
                                {/* <a href="https://www.angellist.com/andy139" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-angellist"></i> AngelList</a> */}
                                <Link className="nav-login-link hvr-overline-reveal" to="/login">Log In</Link>
                                <div id="signup-fix">
                                    { this.props.location.pathname === "/login" || this.props.location.pathname === "/signup" ? signUpBolded() : signUpNotBolded()}
                        </div>
                        
                        </div>
                    </div>
                </div>
         

        )


        return this.props.currentUser ? loggedIn() : notLoggedIn()
        
        
    }


}

export default withRouter(Navbar);