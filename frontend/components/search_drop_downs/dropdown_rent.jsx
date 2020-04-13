import React from "react";
import onClickOutside from "react-onclickoutside";
import DoubleBarSlider from "./doublebar_slider";
import Slider, { Range } from "rc-slider";
import {connect} from "react-redux";

class DropdownRent extends React.Component {
  constructor() {
    super();

    this.state = {
      whichMenu: null,
      showMenu: false,
      rentValues: [0, 30000],
      applyValues: "Monthly Rent",
    };

    this.handleChange = this.handleChange.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {}

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

  handleChange(rentValues) {
    this.setState({ rentValues });
  }

  handleClear() {
    this.setState({ rentValues: [0, 30000] });
    this.setState({ applyValues: "Monthly Rent" });
  }

  handleApply() {
    this.setState({
      applyValues: "$" + `${this.state.rentValues[0]}` + " +",
    });
    this.closeMenu();
  }

  render() {
    const Handle = Slider.Handle;
    const wrapperStyle = { width: 320, margin: 20 };
    const { rentValues } = this.state;
    return (
      <div className="hover-1">
        <div className="dropdown-search" onClick={this.showMenu}>
          <div>{this.state.applyValues}</div>
          <i class="fas fa-chevron-down"></i>
        </div>

        {this.state.showMenu ? (
          <div className="dropdown-click">
            <div style={wrapperStyle}>
              <div className="amount-title">
                <div>Monthly Rent</div>
                <div>
                  ${rentValues[0]} - ${rentValues[1]}
                </div>
              </div>

              <Range
                value={this.state.rentValues}
                min={0}
                max={30000}
                step={100}
                onChange={this.handleChange}
                pushable={true}
                defaultValue={rentValues}
                // tipFormatter={(value) => `${value}K`}
              />

               <div className="apply-clear">
                  <div className="cursorp clear" onClick={this.handleClear}>
                    Clear
                  </div>
                  <div className="cursorp" onClick={this.handleApply}>
                    Apply
                  </div>
              </div>
           
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(DropdownRent);
