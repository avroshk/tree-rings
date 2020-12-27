import React from 'react';

const SVGCircle = ({cx, cy, r, filter, strokeWidth = 1, stroke = "#DA251D", pathLength = 100}) => {
  return (
    <circle
      style={{"filter": `url(#${filter})`}}
      stroke={stroke}
      strokeWidth={strokeWidth}
      cx={cx}
      cy={cy}
      r={r}
      pathLength={pathLength}
      fill="none"
    />
  );
}

export default SVGCircle;
