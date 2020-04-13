import React from 'react';
import {useState} from 'react';
import SearchDropdown from '../search_drop_downs/search_dropdowns';
import DropdownRent from '../search_drop_downs/dropdown_rent';
import DropdownLocation from "../search_drop_downs/dropdown_location";




const handleClick = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
)

const filters = ["All", "Minimal Repairs", "Higher Yield", "1% Rule", "Best Schools", "Best Neighborhood", "Higher Appreciation"]


function Search(props){

    const [button, setButton] = useState(null)
    const [stateFilter, setFilter] = useState(null)



    const handleSearch = (filter) => {
      switch (filter) {
        case "All":
          props.updateFilter("all")
          break;
        case "Minimal Repairs":
          props.updateFilter("minimal_repairs")
          break;
        case "Higher Yield":
          props.updateFilter("higher_yield")
          break;
        case "1% Rule":
          props.updateFilter("1_rule")
          break;
        case "Best Schools":
          props.updateFilter("best_schools")
          break;
        case "Best Neighborhood":
          props.updateFilter("best_neighborhood")
          break;
        case "Higher Appreciation":
          props.updateFilter("higher_appreciation")
          break;
        default:
          props.updateFilter("all")
          break;
      }

    }


    const handleClick = (filter) => {

      // setFilter to state
      setFilter(filter)

      // do search

      handleSearch(filter)

    

    }



    return (
      <div className="search-box">
        <div className="search-1">


          {filters.map(filter => {
            return (

              <span className="search-label">
                <div className={stateFilter  === filter ? "search-button-bolded" : "search-button"} onClick={() => handleClick(filter)}>{filter}</div>
              </span>

            )

          })}
      
         
        </div>

        <div className="search-2">
            
          <SearchDropdown />
          <DropdownRent/>
          <DropdownLocation/>

        </div>


      </div>
    );




}

export default Search;