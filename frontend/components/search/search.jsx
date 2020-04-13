import React from 'react';
import {useState} from 'react';
import SearchDropdown from '../search_drop_downs/search_dropdowns';
import DropdownRent from '../search_drop_downs/dropdown_rent';
import DropdownLocation from "../search_drop_downs/dropdown_location";

const handleClick = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
)


function Search(props){

    const [button, setButton] = useState(null)


    return (
      <div className="search-box">
        <div className="search-1">
          <span className="search-label">
            <div className="search-button">All</div>
          </span>
          <span className="search-label">
            <div className="search-button">Minimal Repairs</div>
          </span>
          <span className="search-label">
            <div className="search-button">Higher Yield</div>
          </span>
          <span className="search-label">
            <div className="search-button">1% Rule</div>
          </span>
          <span className="search-label">
            <div className="search-button">Best Schools</div>
          </span>
          <span className="search-label">
            <div className="search-button">Best Neighborhood</div>
          </span>

          <span className="search-label">
            <div className="search-button">Higher Appreciation</div>
          </span>
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