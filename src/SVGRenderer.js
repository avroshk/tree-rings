import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// variable for the namespace
const svgns = "http://www.w3.org/2000/svg";
const dx = 3;
const dy = 3;
const SVGRenderer = () => {
  const [open, toggle] = useState(false);
  const [h, setH] = useState(1);
  const [v, setV] = useState(1);

  const { freq, verticalM, horizontalM, opacity } = useSpring({
    reverse: open,
    from: { verticalM: 200+dy*v, horizontalM: 200+dx*h, freq: '28.0'},
    to: { verticalM: 200-dy*v, horizontalM: 200-dx*h, freq: '15.0'},
    config: { duration:3000 },
    onRest: () => {
      toggle(!open);
      setH(h > 0 ? 0 : 1);
      setV(v > 0 ? 0 : 1);
    }
  });

  return (
    <div>
      <animated.svg xmlns={svgns} width="400" height="400" viewBox="0 0 400 400">
        <animated.circle cx={200} cy={200} r={10} fill="#DA251D" stroke="#DA251D" strokeWidth={2} />
        <animated.circle cx={200} cy={200} r={freq} fill="none" stroke="#DA251D" strokeWidth={2} />
      </animated.svg>
    </div>

  );
}

export default SVGRenderer;
