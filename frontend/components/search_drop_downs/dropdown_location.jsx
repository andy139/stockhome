import React from "react";
import onClickOutside from "react-onclickoutside";
import Checkbox from "rc-checkbox";
import "!style-loader!css-loader!rc-checkbox/assets/index.css"; 
import $ from "jquery";



class DropdownLocation extends React.Component {
  constructor() {
    super();

    this.state = {
      counties: [],
      showMenu: false,
      disabled: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  toggle() {
    this.setState((state) => ({
      disabled: !state.disabled,
    }));
  }

  handleClear() {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));

    this.setState({ checked: false });

    debugger
    this.setState({
     counties: [],
    });
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

  onChange(e, county) {
    console.log("Checkbox checked", (e.target.checked));

    e.stopPropagation();
    

    if (!this.state.counties.includes(county)){
        let counties = [...this.state.counties];
        let joinedCounties = counties.concat(county);
        this.setState({ counties: joinedCounties });
        console.log(joinedCounties);
    } else {
        //delete county
        let counties = [...this.state.counties];
        let joinedCounties = counties.filter(
        (ele) =>  ele !== county
        );
        this.setState({ counties: joinedCounties });
        console.log(joinedCounties);

    }

  }

  render() {
   

    let counties = this.state.counties
    debugger;
    return (
      <div className="hover-1">
        <div className="dropdown-search" onClick={this.showMenu}>
          <div>Location</div>
          <i class="fas fa-chevron-down"></i>
        </div>

        {this.state.showMenu ? (
          <div className="dropdown-click-loc">
            <div className="checkbox-container">
              <p>
                <label>
                  <Checkbox
                    name="my-checkbox"
                    checked={counties.includes("Danderyd") ? 1 : 0}
                    onClick={(e) => {
                      this.onChange(e, "Danderyd");
                    }}
                  />
                  &nbsp; Danderyd
                </label>
              </p>
              <p>
                <label className="checkbox-item">
                  <Checkbox
                    name="my-checkbox"
                    checked={counties.includes("Botkyrka") ? 1 : 0}
                    onChange={(e) => {
                      this.onChange(e, "Botkyrka");
                    }}
                  />
                  &nbsp; Botkyrka
                </label>
                &nbsp;&nbsp;
              </p>
            </div>

            <div className="apply-clear">
              <div className="cursorp" onClick={this.handleClear}>
                Clear
              </div>
              <div className="cursorp" onClick={this.handleApply}>
                Apply
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(DropdownLocation);
