import React from 'react';

const SVGCircle = ({cx, cy, r, filter, strokeWidth = 1, stroke = "#DA251D"}) => {
  return (
    <circle
      style={{"filter": `url(#${filter})`}}
      stroke={stroke}
      strokeWidth={strokeWidth}
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
    />
  );
}

export default SVGCircle;
