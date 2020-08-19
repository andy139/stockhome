import React from 'react';
import PropTypes from 'prop-types';
import { closeModal, openModal } from "../../actions/modal_actions";
import useTransition from './transitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


const mSTP = (state, { match }) => {

  return {

  };
}

const mDTP = dispatch => {

  return {

    closeModal: () => dispatch(closeModal()),
    openModal: (type, data) => dispatch(openModal(type, data)),
   

  }

};


function Carousel({ children, width, unit, bedrooms, bathrooms, sqft, year_built, openModal }) {

  const {
    translate,
    items,
    setAction,
  } = useTransition(width, children);



  const handleNext = () => setAction('next');
  const handlePrev = () => setAction('prev');

  return (
    
    <div
      className="parent"
      style={{
        width: `${width}${unit}`,
      }}
    >
      <div className="container">
        <div
          className="inner"
          style={{
            width: `${width * items.length}${unit}`,
            transform: `translateX(-${translate}${unit})`,
          }}
        >
          {
            items.map(item => (
              <div
                className="item"
                style={{
                  width: `${width}${unit}`,
                }}
              >
                {item}
              </div>
            ))
          }

  
        </div>

        <div
          className="inner"
          style={{
            width: `${width * items.length}${unit}`,
            transform: `translateX(-${translate}${unit})`,
          }}
        >
          {
            items.map(item => (
              <div
                className="item"
                style={{
                  width: `${width}${unit}`,
                }}
              >
                {item}
              </div>
            ))
          }


        </div>
      </div>
{/* 
      <div className="modal-button" onClick={() => openModal("carouselModal", { children, width, unit, bedrooms, bathrooms, sqft, year_built})}>
        <i className="fas fa-expand-alt expand-box"></i>

      </div> */}
      <div className="controls">

        <button
          className="carousel-button"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="button-hover" />
        </button>
        <button
          className="carousel-button"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronRight} className="button-hover" />
        </button>

      </div>

      <div className="transparent-text-property">
        <div id="text">{bedrooms} beds, {bathrooms} baths | {sqft} sqft | Built in {year_built}</div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  width: PropTypes.number,
  unit: PropTypes.string,
};

Carousel.defaultProps = {
  width: 670,
  unit: 'px',
};

export default connect(mSTP,mDTP)(Carousel);