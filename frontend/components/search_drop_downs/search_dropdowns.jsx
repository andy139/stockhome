import React from "react";
import onClickOutside from "react-onclickoutside";
import Checkbox from "rc-checkbox";
import "!style-loader!css-loader!rc-checkbox/assets/index.css";
import $ from "jquery";


const allCriteria = [
  "Default",
  "Price",
  "Rent",
  "Gross Yield",
  "Cap Rate",
  "5Y Total Return",
  "Annualized Return",
  "Year Built"
  
];



class DropdownLocation extends React.Component {
  constructor() {
    super();

    this.state = {
      counties: [],
      showMenu: false,
      disabled: false,
      all: false,
      selected: "Default",
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
        if (this.props.filters.primary_filter === prevProps.filters.primary_filter){
        } else {
          this.setState({
            selected: "Default",
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

  handleApply(criteria) {
    this.setState({ selected: criteria })
    this.props.updateSortFilter("sort", criteria); // need new dispatch function, sort filter
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


    if (county === "All") {
      this.setState({ disabled: true });
      this.setState({ all: true })
      this.handleClear();

    } else {
      this.setState({ disabled: false });
      this.setState({ all: false });
    }



  }

  render() {


    let mappedCriteria = allCriteria.map(criteria => {
      return (
        <p className="checkbox-items">
          <div className= {this.state.selected === criteria ? "search-label-2-bolded" : "search-label-2"} onClick={() => this.handleApply(criteria)}>
                &nbsp; {criteria}
          </div>
        </p>

      )

    })
    


    return (
      <div className="hover-2">
        <div>
          <div>
            Sort By
          </div>
          <div className="grid-box-1" onClick={this.showMenu}>
            <div>{
              this.state.selected}</div>  &nbsp; &nbsp;
              {this.state.showMenu ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
          </div>
        </div>

        {this.state.showMenu ? (
          <div className="dropdown-click-search">
            <div className="checkbox-container2">

              {mappedCriteria}
            </div>


          </div>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(DropdownLocation);
