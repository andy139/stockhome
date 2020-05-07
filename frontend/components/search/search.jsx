import React from 'react';
import {useState} from 'react';
import SearchDropdown from '../search_drop_downs/search_dropdowns';
import DropdownRent from '../search_drop_downs/dropdown_rent';
import DropdownLocation from "../search_drop_downs/dropdown_location";
import DropdownPrice from "../search_drop_downs/dropdown_price";
import SearchMap from '../search/search_map';


// #004b87 swedish blue

// #ffcd00 tangerine yellow


const handleClick = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
)

const filters = ["All", "Minimal Repairs", "Higher Yield", "1% Rule", "Best Schools", "Best Neighborhood", "Higher Appreciation"]

const descriptions = { "All": null ,
  "Minimal Repairs": "Minimal Repairs filter shows homes with less than $1,000,000 in immediate estimated repairs.",
  "Higher Yield": "Higher Yield filter shows properties with gross yield of 11 % or higher.",
  "1% Rule": "1 % Rule filter shows properties where monthly rent is at least 1 % of the list price.",
  "Best Schools": "Best Schools filter shows homes where the assigned schools all have a score of 4 or higher.",
   "Best Neighborhood": "Best Neighborhood filter shows homes where neighborhoods all have a score of 4 or higher",
  "Higher Appreciation": "Higher Appreciation filter shows properties where the annual appreciation is projected to be 3% or higher."}








function Search(props){

    const [button, setButton] = useState(null);
    const [stateFilter, setFilter] = useState(null);
    const [toggle, setToggle] = useState(false);

    const [mapToggle, setMapToggle] = useState(false);



    const handleSearch = (filter) => {
      switch (filter) {
        case "All":
          props.primaryFilter("all")
          break;
        case "Minimal Repairs":
          props.primaryFilter("minimal_repairs")
          break;
        case "Higher Yield":
          props.primaryFilter("higher_yield")
          break;
        case "1% Rule":
          props.primaryFilter("1_rule")
          break;
        case "Best Schools":
          props.primaryFilter("best_schools")
          break;
        case "Best Neighborhood":
          props.primaryFilter("best_neighborhood")
          break;
        case "Higher Appreciation":
          props.primaryFilter("higher_appreciation")
          break;
        default:
          props.primaryFilter("all")
          break;
      }

    }

    const clearPrimary = () => {
      setFilter(null)


    }


    const handleClick = (filter) => {

      // setFilter to state
      setFilter(filter)

      // do search
      handleSearch(filter)
      setToggle(true)
    }



    debugger

    
     
 
    return (
      <div className="search-box">
        <div className="search-1">
          {filters.map((filter) => {
            return (
              <span className="search-label">
                <div
                  className={
                    stateFilter === filter
                      ? "search-button-bolded"
                      : "search-button"
                  }
                  onClick={() => handleClick(filter)}
                >
                  {filter}
                </div>
              </span>
            );
          })}
        </div>

        <div className="search-2">
          <DropdownPrice
            updateFilter={props.updateFilter}
            clearPrimary={clearPrimary}
            stateFilter={stateFilter}
            toggle={toggle}
            setToggle={setToggle}
            filters={props.filters}
          />
          <DropdownRent
            updateFilter={props.updateFilter}
            clearPrimary={clearPrimary}
            stateFilter={stateFilter}
            toggle={toggle}
            setToggle={setToggle}
            filters={props.filters}
          />
          <DropdownLocation
            updateFilter={props.updateFilter}
            clearPrimary={clearPrimary}
            stateFilter={stateFilter}
            toggle={toggle}
            setToggle={setToggle}
            filters={props.filters}
          />
        </div>

        <div className="searchbar-3">
          <div>
            <div>
              Showing {props.filters.page_filter ? (20 * props.filters.page_filter - 19) : 1} - {props.filters.page_filter ? ((props.filters.page_filter * 20 - 20) + props.properties.length) : props.properties.length < 20 ? props.properties.length : 20} of {props.propertyAmount} properties
             
            </div>
            <div className="desc-padding">
              {descriptions[stateFilter] ? descriptions[stateFilter] : null}
            </div>
          </div>

          <div className="multi-grid-item">
            <SearchDropdown
              updateSortFilter={props.updateSortFilter}
              clearPrimary={clearPrimary}
              stateFilter={stateFilter}
              toggle={toggle}
              setToggle={setToggle}
              filters={props.filters}
            />

            <div className="fourboxes">
              {props.gridSelection ? (
                <div
                  className="gridboxes"
                  onClick={() => {
                    props.switch("default");

                    console.log("click");
                  }}
                >
                  <i class="fas fa-th-large"></i>
                </div>
              ) : (
                <div
                  className="gridboxes-bolded"
                  onClick={() => {
                    props.switch("default");

                    console.log("click");
                  }}
                >
                  <i class="fas fa-th-large"></i>
                </div>
              )}

              {props.gridSelection ? (
                <div
                  className="barboxes-bolded"
                  onClick={() => props.switch("grid")}
                >
                  <i class="fas fa-bars"></i>
                </div>
              ) : (
                <div className="barboxes" onClick={() => props.switch("grid")}>
                  <i class="fas fa-bars"></i>
                </div>
              )}
            </div>

            {mapToggle ? (
              <div
                className="map-button shadow"
                onClick={() => setMapToggle(!mapToggle)}
              >
                Map
              </div>
            ) : (
              <div
                className="map-button"
                onClick={() => setMapToggle(!mapToggle)}
              >
                Map
              </div>
            )}
          </div>
        </div>

        {mapToggle ? (
          <div className="searchmap-container">
            <SearchMap/>
          </div>
        ) : null}
      </div>
    );




}

export default Search;