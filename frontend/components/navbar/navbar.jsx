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

                            <div className="left-nav-misc" onClick={() => this.props.push.history("/investment-property-marketplace")}>
                                <Link to="/investment-property-marketplace" className="remove-decoration left-nav-misc hvr-overline-reveal">Buy</Link>
                                {/* <div className="left-nav-misc hvr-overline-reveal">Own</div>
                                <div className="left-nav-misc hvr-overline-reveal">Sell</div> */}
                            </div>
                    
                        </div>


                        <div className="navbar-right">
                            <div className="right-nav-misc">
                                <a href="https://www.linkedin.com/in/andy139/" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                                <a href="https://www.github.com/andy139" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-github"></i> Github</a>
                                {/* <a href="https://www.angellist.com/andy139" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-angellist"></i> AngelList</a> */}
                          
                                
                                <div className="dropdown">
                                    <button className="dropbtn">Welcome Back, {this.props.currentUser.fname} <i className="fas fa-angle-down"></i></button>
                                        
                                   
                                    <div className="dropdown-content" onClick={this.props.logout}>
                                        <i class="fas fa-sign-out-alt"></i> Log out
                                    </div>
                                
                                </div>
                                

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

                                <div className="left-nav-misc" onClick={() => this.props.push.history("/investment-property-marketplace")}>
                                    <Link to="/investment-property-marketplace" className="remove-decoration left-nav-misc hvr-overline-reveal">Buy</Link>
                                    {/* <div className="left-nav-misc hvr-overline-reveal">Own</div>
                                    <div className="left-nav-misc hvr-overline-reveal">Sell</div> */}
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


        
        const loggedInBuy = () => (
            <div id="fade-effect">
                <div className="navbar-fullwidth-loggedin-buy fixed-nav-bar">
                    <div className="navbar-container-loggedin show_logo">

                        <div className="navbar-left" >

                            <div className="navbar-logo .u-text-align-center--palm-wide">
                                <Link to="/" className="nav-main-link">
                                    <img src="/assets/logo.png" className="logo-img" />
                                    <p className="logo-text">stockhome</p>
                                </Link>


                            </div>

                            <div className="navbar-buy-own-sell limit_navbar">

                                <div className="left-nav-misc hvr-overline-reveal-buy"><Link to="/investment-property-marketplace" className="remove-decoration-buy">Buy</Link></div>
                                {/* <div className="left-nav-misc hvr-overline-reveal-buy">Own</div>
                                <div className="left-nav-misc hvr-overline-reveal-buy">Sell</div> */}
                            </div>

                        </div>


                        <div className="navbar-right">
                            <div className="right-nav-misc">
                                <a href="https://www.linkedin.com/in/andy139/" className="right-nav-misc-buy limit_navbar hvr-overline-reveal-buy"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                                <a href="https://www.github.com/andy139" className="right-nav-misc-buy limit_navbar hvr-overline-reveal-buy"><i className="fab fa-github"></i> Github</a>
                                {/* <a href="https://www.angellist.com/andy139" className="right-nav-misc limit_navbar hvr-overline-reveal"><i className="fab fa-angellist"></i> AngelList</a> */}

                                <div className="dropdown dark-mode">
                                    <button className="dropbtn-blacked">Welcome Back, {this.props.currentUser.fname} <i className="fas fa-angle-down"></i></button>


                                    <div className="dropdown-content" onClick={this.props.logout}>
                                        <i class="fas fa-sign-out-alt"></i> Log out
                                    </div>

                                </div>

{/* 
                                <div className="dropdown-blacked">
                                    <button className="dropbtn-blacked">Welcome Back, {this.props.currentUser.fname} <i className="fas fa-angle-down"></i></button>

                                    <div class="dropdown-content blacked">
                                        <input
                                            className="dropdown-content"
                                            type="submit"
                                            value="Log Out"
                                            onClick={this.props.logout}
                                        />
                                    </div>

                                </div> */}


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )

        

        if (( this.props.location.pathname.includes("roofs") || (this.props.location.pathname.includes("property"))) && this.props.currentUser ) {
            return loggedInBuy()
        } else if (this.props.currentUser) {
                return loggedIn();
        } else {
            notLoggedIn();
        }


        return this.props.currentUser ? loggedIn() : notLoggedIn()
        
        
    }


}

export default withRouter(Navbar);