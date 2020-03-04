import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component {
    constructor(props){
        super(props)
    }


    render(){

        const personalGreeting = () => (

            <div className="navbar">


            </div>

        )

        const notLoggedIn = () => (

            <div className="navbar">
                <Link to="/" className="nav-main-link"> 
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/stockholm-sweden-logo-png-transparent.png" className="logo-img" />
                    <p className="logo-text">stockhome</p>
                </Link>
                <ul className="navbar-link">
                    <Link className="nav-login-link" to="/login">Log In</Link>
                    <Link className="nav-signup-link" to="/signup">Sign Up</Link>
                </ul>
            </div>


        )



        return(
            <div>
               <div className="navbar">
                    <Link to="/" className="nav-main-link"> 
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/stockholm-sweden-logo-png-transparent.png" className="logo-img" />
                    <p className="logo-text">stockhome</p>
                    </Link>
                    <ul className="navbar-link">
                    <Link className="nav-login-link" to="/login">Log In</Link>
                    <Link className="nav-signup-link" to="/signup">Sign Up</Link>
                    </ul>
                </div>
            </div>

        )
    }


}

export default Navbar;