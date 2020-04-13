import "!style-loader!css-loader!rc-slider/assets/index.css"; 
import "rc-tooltip/assets/bootstrap.css";
import React from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 320, margin: 50 };

const DoubleBarSlider = () => {
    return (

        <div style={wrapperStyle}>
          <Range
            min={0}
            max={5000}
            pushable={true}
            defaultValue={[0, 5000]}
            tipFormatter={(value) => `${value}K`}
          />
        </div>
    );


}


export default DoubleBarSlider;