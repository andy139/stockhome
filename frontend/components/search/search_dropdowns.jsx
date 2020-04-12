import React from 'react';


class SearchDropdown extends React.Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {

        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });

    }

    render() {
        return (
            <div className="dropdrown-container">
                <span>
                    <div className="dropdown-search" onClick={this.showMenu}>
                        <div>List Price</div><i class="fas fa-chevron-down"></i>
                    </div>

                    {
                        this.state.showMenu
                            ? (
                                <div
                                    className="dropdown-click"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                   
                                </div>
                            )
                            : (
                                null
                            )
                    }

                </span>
                <span>
                    <div className="dropdown-search" onClick={this.showMenu}>
                        <div>Monthly Rent</div><i class="fas fa-chevron-down"></i>
                    </div>

                    {
                        this.state.showMenu
                            ? (
                                <div
                                    className="dropdown-click"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >

                                </div>
                            )
                            : (
                                null
                            )
                    }

                </span>
                <span>
                    <div className="dropdown-search" onClick={this.showMenu}>
                        <div>Location</div><i class="fas fa-chevron-down"></i>
                    </div>

                    {
                        this.state.showMenu
                            ? (
                                <div
                                    className="dropdown-click"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >

                                </div>
                            )
                            : (
                                null
                            )
                    }

                </span>


            </div>
        );
    }

}


export default SearchDropdown;

