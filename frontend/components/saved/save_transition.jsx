import React from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const SaveTransition = (props) => {
 

  const unfavorite = (
    <div id="unfavorite" key={2}>
      <div>Removed from favorites</div>
    </div>
  );

  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {unfavorite}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default SaveTransition;
