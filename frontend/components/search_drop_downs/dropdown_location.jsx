import React from "react";
import onClickOutside from "react-onclickoutside";
import Checkbox from "rc-checkbox";
import "!style-loader!css-loader!rc-checkbox/assets/index.css"; 



const allCounties = [
  "Botkyrka", 
    "Danderyd", 
    "Ekerö", 
    "Haninge", 
    "Huddinge", 
    "Järfälla", 
    "Lidingö", 
    "Nacka", 
    "Norrtälje", 
    "Nykvarn", 
    "Nynäshamn", 
    "Salem", 
    "Sigtuna", 
    "Sollentuna", 
    "Solna", 
    "Stockholm", 
    "Sundbyberg", 
    "Södertälje", 
    "Tyresö", 
    "Täby", 
    "Upplands-Bro", 
    "Upplands", 
    "Väsby", 
    "Vallentuna", 
    "Vaxholm", 
    "Värmdö", 
    "Österåker",
];



class DropdownLocation extends React.Component {
  constructor() {
    super();

    this.state = {
      counties: [],
      showMenu: false,
      disabled: false,
      all: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }


  handleClear() {
 
    this.setState({
     counties: [],
    });

    this.props.updateFilter("locations", [])
  }


  componentDidUpdate(prevProps, prevState) {

    if (prevProps.filters != this.props.filters) {
      if (this.props.toggle) {
        this.setState({
          counties: [],
        });

      }
    }

  }

  showMenu(event) {
    event.preventDefault();

    if (!this.state.showMenu) this.setState({ showMenu: true });
    if (this.state.showMenu) this.closeMenu();
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  handleApply(){
    this.props.updateFilter("locations", this.state.counties);
    this.props.clearPrimary();
    this.props.setToggle(false);
    this.closeMenu();

  }

  handleClickOutside() {
    this.closeMenu();
  }

  onChange(e, county) {

    e.stopPropagation();

    if (!this.state.counties.includes(county)) {
      let counties = [...this.state.counties];
      let joinedCounties = counties.concat(county);
      this.setState({ counties: joinedCounties });
    } else {
      //delete county
      let counties = [...this.state.counties];
      let joinedCounties = counties.filter((ele) => ele !== county);
      this.setState({ counties: joinedCounties });
    }


    if(county === "All"){
        this.setState({disabled: true});
        this.setState({all: true})
        this.handleClear();

    } else {
        this.setState({disabled: false});
        this.setState({ all: false });
    }
    


  }

  render() {
   

    let counties = this.state.counties

    let mappedCheckboxes = allCounties.map(county => {
      return(
        <p className="checkbox-items">
          <label>
            <Checkbox
              name="my-checkbox"
              checked={counties.includes(county) ? 1 : 0}
              onChange={(e) => {
                this.onChange(e, county);
              }}
            />
                &nbsp; {county}
              </label>
        </p>
        
      )

    })


    return (
      <div className="hover-1">
        <div className="dropdown-search" onClick={this.showMenu}>
          <div>{ this.state.counties.length > 1 ? this.state.counties.length :
          this.state.counties.length === 1 ? this.state.counties[0] : 
          "Location"}</div>
          <i class="fas fa-chevron-down"></i>
        </div>

        {this.state.showMenu ? (
          <div className="dropdown-click-loc">
            <div className="checkbox-container">
              <p className="checkbox-items">
                <label>
                  <Checkbox
                    name="my-checkbox"
                    disabled={this.state.disabled}
                    checked={this.state.all}
                    onChange={(e) => {
                      this.onChange(e, "All");
                    }}
                  />
                  &nbsp; All Markets
                </label>
              </p>

              {mappedCheckboxes}

              
            </div>

            <div className="apply-clear-loc">
              <div className="cursorp clear" onClick={this.handleClear}>
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
