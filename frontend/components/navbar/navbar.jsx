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


            <div>
                <Link className="nav-signup-link" to="/signup">Sign Up</Link>
            </div>

        )

        const signUpBolded = () => (


            <div>
               <Link className="nav-signup-link-bolded" to="/signup">Sign Up</Link>
            </div>

        )
        

        const loggedIn = () => (
            <div id="fade-effect">
                <div className = "navbar-fullwidth-loggedin">
                    <div className="navbar-container-loggedin">

                        <div className="navbar-left" >

                            <div className="navbar-logo">
                                <Link to="/" className="nav-main-link"> 
                                    <img src="https://cdn.freebiesupply.com/logos/large/2x/stockholm-sweden-logo-png-transparent.png" className="logo-img" />
                                    <p className="logo-text">stockhome</p>
                                </Link>
                            </div>

                            <div className="navbar-buy-own-sell">
                                <div className="left-nav-misc">Buy</div>
                                <div className="left-nav-misc">Own</div>
                                <div className="left-nav-misc">Sell</div>
                            </div>
                    
                        </div>


                        <div className="navbar-right">
                            <div className="right-nav-misc">Learn Drop Down</div>
                            <div className="right-nav-misc">Welcome Back, King</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    

        const notLoggedIn = () => (
           
                <div className = "navbar-fullwidth-loggedout">
                    <div className="navbar-container-loggedout">

                        <div className="navbar-left" >

                            <div className="navbar-logo">
                                <Link to="/" className="nav-main-link"> 
                                    <img src="https://cdn.freebiesupply.com/logos/large/2x/stockholm-sweden-logo-png-transparent.png" className="logo-img" />
                                    <p className="logo-text">stockhome</p>
                                </Link>
                            </div>

                            <div className="navbar-buy-own-sell">
                                <div className="left-nav-misc">Buy</div>
                                <div className="left-nav-misc">Own</div>
                                <div className="left-nav-misc">Sell</div>
                            </div>
                    
                        </div>


                        <div className="navbar-right">
                            <div className="right-nav-misc">Learn Drop Down</div>
                            <div className="right-nav-misc">About Us</div>
                            <Link className="nav-login-link" to="/login">Log In</Link>
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