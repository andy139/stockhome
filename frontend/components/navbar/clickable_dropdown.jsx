import React from "react";
import onClickOutside from "react-onclickoutside";


class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            disabled: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }


        showMenu(event) {
            event.preventDefault();

            if (!this.state.showMenu) this.setState({ showMenu: true });
            if (this.state.showMenu) this.closeMenu();
        }

        closeMenu() {
            this.setState({ showMenu: false });
        }

        handleClickOutside() {
            this.closeMenu();
        }

   
        render(){

            let dropdownContent = (
                <div
                    className="dropdown-content2"
                    onClick={this.props.logout}
                >
                    <i class="fas fa-sign-out-alt"></i> Log out
                </div>
            )



            return(
                <div className="dropdown">
                    <span className="dropbtn"
                        onClick={this.showMenu}>
                        Welcome Back, {this.props.currentUser.fname}{" "}
                        <i className="fas fa-angle-down"></i>
                        
                    </span>
                    {this.state.showMenu ? dropdownContent : null}
                  
                </div>
            )

        }
        

}


export default onClickOutside(Dropdown);