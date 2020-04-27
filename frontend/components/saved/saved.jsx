import React from 'react';
import { useEffect, useState, useCallback, useRef} from 'react';

import {connect} from 'react-redux';
import { fetchSaves, createSave, deleteSave } from '../../actions/save_actions';
import DropdownSearch from './saved_search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SaveTransition from './save_transition';


const addCommas = (nStr) => {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

const asArray = (properties) => {
    return Object.keys(properties).map(key => properties[key])
}


const mSTP = state => {
    return {
        loading: state.ui.loading,
        saved: asArray(state.ui.saved),

    }

}


const mDTP = dispatch => {

    return {

        deleteSave: (propertyId) => dispatch(deleteSave(propertyId)),
        fetchSaves: () => dispatch(fetchSaves()),
        createSave: (propertyId) => dispatch(createSave(propertyId))


    }

}






function Saved(props) {

     




    const [savedProperties, setProperties] = useState(props.saved);

    const [timeAmount, setTime] = useState(null);

    const [deletedProperty, setDelete] = useState(null);

    const savedSearch = useCallback(

        (searchParams) => {

            let saved = props.saved;

            let searchedSave;


            if (searchParams === "All Markets") {
                searchedSave = saved
            } else {
                searchedSave = saved.filter(property => {
                    return property.municipality === searchParams
                })

            }


            setProperties(searchedSave);


        },
        [savedProperties],



    )

    const mounted = useRef();
    

    useEffect(() => {

  
        

        setProperties(props.saved);

        if (!mounted.current) {
            props.fetchSaves();
            mounted.current = true;
        } else {
             
            setProperties(props.saved)
        }
        
     
    },[props.saved]);


   


   


    const itemHeader = (

        <div className="title-item">

            <div className="saved-pic-header">
                <label>&nbsp;</label>
                <label></label>
                <label>&nbsp;</label>

            </div>

            <div className="save-address">
                <div>Address</div>
                
            </div>

            <div className="save-space">
                <div>Price</div>
            </div>

            <div className="save-space-2">
                <div>
                    Current
                </div>
                <div>
                    Rent
                </div>
            </div>

            <div className="save-space-2">
                <div>
                    Gross
                </div>
                <div>
                    Yield
                </div>
            </div>

            <div className="save-space-2">
                <div>
                    Cap

                </div>
                <div>
                    Rate
                </div>
            </div>

            <div className="save-space-2">
                <div>
                    5Y Total 
                </div>
               <div>
                    Return
               </div>
            </div>

            <div className="save-space-2">
                <div>
                    Annualized 
                </div>
                
                <div>
                    Return
                </div>
            </div>

            <div className="save-space-2">
                <div>
                    Year 
                </div>
                <div>
                    Built
                </div>
           </div>

            <div className="save-space-2">Status</div>

            <div className="save-space-2">&nbsp;</div>

        </div>

    )


    const bidTrans = (

      <div className="saved-transition">

        <i className="fas fa-check checkbigger"></i>

        <div className="transition-flex">
          <div>{deletedProperty ? deletedProperty : null} </div>
          <br />
          <div>Removed from Saved Roofs</div>
        </div>
      </div>

    )

    const itemHeader2 = (

      <div className="save-item-header">
        <div className="saved-pic">
          <label></label>
          <label></label>
          <label>
            <img className="saved-photo" src="/assets/logo.png"></img>
          </label>
          
       
        </div>

        <div className="save-address-2">
            Address
        </div>

        <div className="saved-price-item">
            Price
        </div>

        <label className="save-space-2">Rent</label>

        <label className="save-space-2">
          Gross Yield
          </label>

        <label className="save-space-2">
          Cap Rate
        </label>

        <label className="save-space-3">
          5Y Total Return
        </label>

        <label className="save-space-4">
          Annualized Return
          </label>

        <label className="save-space-2">Year Built</label>

        <label className="save-space-2">Status</label>

        <label
          className="save-space-2"
          id="heart-saved-header"
        
        >
          <i class="fas fa-heart"></i>
        </label>
      </div>
    )

    const loadingScreen = (
        <div className="loading-screen-save">

            <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Pulse-0.7s-244px.gif"></img>

        </div>

    )

    let saved = props.saved;

    const savedList = savedProperties.map((property,i) => {

        return (
          <div className="save-item" key={property.id}>
            <div className="saved-pic">
              <label>{i + 1}</label>
              <label></label>
              <label
                onClick={() => props.history.push(`/property/${property.id}`)}
              >
                <img className="saved-photo" src={property.main_photo_url}></img>
              </label>
            </div>

            <div className="save-address" onClick={() => props.history.push(`/property/${property.id}`)}>
              <div className="address-save-1">{property.address}</div>
              <div className="address-save-2">
                {property.municipality} Sweden,{property.zipcode}
              </div>
          
            </div>

            <div className="saved-price-item">
              <div >$ {addCommas(property.list_price)}</div>
              <div>
                {!property.open_house ? (
                  <div className="cash-bottom">
                    <i class="fas fa-money-bill-wave" id="green-dollar"></i>{" "}
                    Cash Only
                  </div>
                ) : null}
              </div>
            </div>

            <label className="save-space-2">${addCommas(property.rent)}</label>

            <label className="save-space-2">
              {property.gross_yield.toFixed(1)}%
            </label>

            <label className="save-space-2">
              {property.cap_rate.toFixed(1)}%
            </label>

            <label className="save-space-3">
              ${addCommas(property.total_return_5yrs)}
            </label>

            <label className="save-space-4">
              {property.annualized_return.toFixed(1)}%
            </label>

            <label className="save-space-2">{property.year_built}</label>

            <label className="save-space-2">For Sale</label>

            <label
              className="save-space-2"
              id="heart-saved"
              onClick={() => {props.deleteSave(property.id)
                
                setDelete(property.address)

                timeAmount ? clearInterval(timeAmount) : null
               

                let time = setTimeout(() => {
                  setDelete(null)
                }, 4000)

                setTime(time)

                





                
             
              
              }}
            >
              <i class="fas fa-heart"></i>
            </label>
          </div>
        );


    })


   

    const savesScreen = (
      <div className="flex-grows">
      

        {/* <SaveTransition /> */}

        <div className="saved-container">
          <div className="saved-header">
            <div className="header-saved">Saved Roofs</div>
            <div>
              <i class="fas fa-envelope"></i> &nbsp;Subscribed&nbsp;
              <i className="fas fa-info-circle tooltip">
                <span class="tooltiptext">
                  You are subscribed to Stockhome and will receive updates
                  through your email!
                </span>
              </i>
            </div>
          </div>

          <div className="saved-search">
            <DropdownSearch saved={props.saved} savedSearch={savedSearch} />
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={550}
              transitionLeaveTimeout={550}>
                {deletedProperty ? bidTrans : null}

            </ReactCSSTransitionGroup>
          </div>

          <div className="favorites-container">
            {itemHeader2}

            <ReactCSSTransitionGroup
              className="cafe-list"
              transitionName="fade"
              transitionEnterTimeout={550}
              transitionLeaveTimeout={550}
            >
              {savedList}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );




    return (
      <div className="full-saved-page">
        {props.loading.indexLoading ? loadingScreen : savesScreen}

   
      </div>
    );


}


export default connect(mSTP, mDTP)(Saved);