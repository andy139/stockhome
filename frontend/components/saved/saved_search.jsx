import React from "react";
import onClickOutside from "react-onclickoutside";


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



class DropdownSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            counties: [],
            showMenu: false,
            disabled: false,
            all: false,
            selected: "All Markets",
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
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.filters != this.props.filters) {
            if (this.props.filters.primary_filter === prevProps.filters.primary_filter) {
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
        this.props.savedSearch(criteria)
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

        
        

        let counties = this.props.saved.map(property => {

            return property.municipality
        })

        let distinctCounties = ["All Markets"].concat(Array.from(counties))

        let unique = [...new Set(distinctCounties)]




        let mappedCriteria = unique.map(counties => {
            return (
                <p className="checkbox-items save-search-width ">
                    <div className={this.state.selected === counties ? "search-label-2-bolded" : "search-label-3"} onClick={() => this.handleApply(counties)}>
                        &nbsp; {counties}
                    </div>
                </p>

            )

        })



        return (
            <div className="hover-2 search-bold">
                <div>
                    <div>
                     
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

export default onClickOutside(DropdownSearch);
