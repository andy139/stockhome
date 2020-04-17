import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";

class PropertyItem2 extends React.Component {
  constructor(props) {
    super(props);

    // let saved = this.props.saved;
    // let propertyId = this.props.property.id;
    // let isFavorited = Object.keys(saved).includes(propertyId);

    this.state = {
      isFavorited: this.props.isFavorited,
    };
    this.handleClick = this.handleClick.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }



  addCommas(nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  }

  handleClick(event) {
    event.stopPropagation();
    const propertyId = this.props.property.id;
    this.props.history.push(`/property/${propertyId}`);
  }

  handleSave(event) {
    event.stopPropagation();
    let propertyId = this.props.property.id;
    if (this.props.isFavorited) {
      this.props.deleteSave(propertyId);
    } else {
      this.props.addSave(propertyId);
    }
  }

  render() {



    
    //destrcture
    const {
        id,
      rent,
      cap_rate,
      city,
      municipality,
      zipcode,
      annualized_return,
      sqft,
      year_built,
      gross_yield,
      neighborhood_rating,
      address,
      list_price,
      bedrooms,
      bathrooms,
      open_house,
      total_return_5yrs,
      main_photo_url,
      photo_urls,
    } = this.props.property;



    return (
      <div className="save-item">
        <div className="saved-pic">
          <label>{this.props.i + 1}</label>
          <label
            className="details-index effect6"
            onClick={() => this.props.history.push(`/property/${id}`)}
          >
            See Details
          </label>
          <label onClick={() => this.props.history.push(`/property/${id}`)}>
            <img className="saved-photo" src={photo_urls[0]}></img>
          </label>
        </div>

        <div className="save-address">
          <div>{address}</div>
          <div>
            {municipality}, {zipcode}
          </div>
          <div>Sweden</div>
        </div>

        <div className="saved-price-item">
          <div>$ {this.addCommas(list_price)}</div>
          <div>
            {!open_house ? (
              <div>
                <i class="fas fa-money-bill-wave" id="green-dollar"></i> Cash
                Only
              </div>
            ) : null}
          </div>
        </div>

        <label className="save-space-2">${rent}</label>

        <label className="save-space-2">{gross_yield.toFixed(1)}%</label>

        <label className="save-space-2">{cap_rate.toFixed(1)}%</label>

        <label className="save-space-3">
          ${this.addCommas(total_return_5yrs)}
        </label>

        <label className="save-space-4">{annualized_return.toFixed(1)}%</label>

        <label className="save-space-2">{year_built}</label>

        <label className="save-space-2">For Sale</label>

        <div className="item-save-heart-grid">
          <span
            className="fa-stack"
            id="padding-save"
            onClick={this.handleSave}
          >
            {this.props.isFavorited ? (
              <i className="fas fa-heart fa-stack-1x" id="blue-heart"></i>
            ) : (
              <i className="fas fa-heart fa-stack-1x" id="opacity-heart"></i>
            )}
            <i className="far fa-heart fa-stack-1x"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(PropertyItem2);



