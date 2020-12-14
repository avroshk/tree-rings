import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';

// variable for the namespace
const svgns = "http://www.w3.org/2000/svg";

const SVGRenderer = () => {
  const [direction, toggleDirection] = useState(false);
  const [reset, setReset] = useState(false);
  const [filterId, setFilterId] = useState(1);
  const pathRef = useRef();



  return (
    <div onClick={() => { setFilterId(filterId > 0 ? 0 : filterId+1);} }>
      <Spring
        config={config.slow}
        reset={reset}
        reverse={direction}
        from={{ dr: 20, cx: 200, cy: 200, r: 100, scale: 0, baseFreq: 0.01, numOctaves: 1  }}
        to={{ dr: 5, cx: 175, cy: 175, r: 150, scale: 50, baseFreq: 0.1, numOctaves: 5 }}
        config={{ duration: 2000 }}
        onRest={() => { toggleDirection(!direction); setReset(true); }}>
        {(props) => (
            <svg xmlns={svgns} width="400" height="400" viewBox="0 0 400 400">
              <defs>
                <filter id="squiggly-0">
                  <feTurbulence id="turbulence"
                    baseFrequency={props.baseFreq}
                    numOctaves={props.numOctaves}
                    result="noise"
                    seed={0} />
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale={props.scale} />
                </filter>
                <filter id="squiggly-1">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>
              </defs>
              <circle
                style={{"filter": `url(#squiggly-${filterId})`}}
                stroke={"#DA251D"}
                strokeWidth={2}
                cx={props.cx}
                cy={props.cy}
                r={props.r}
                ref={pathRef}
                fill="none"
              />
              <circle
                style={{"filter": `url(#squiggly-${filterId})`}}
                stroke={"#DA251D"}
                strokeWidth={2}
                cx={props.cx}
                cy={props.cy}
                r={props.r+props.dr}
                ref={pathRef}
                fill="none"
              />
              <circle
                style={{"filter": `url(#squiggly-${filterId})`}}
                stroke={"#DA251D"}
                strokeWidth={2}
                cx={props.cx}
                cy={props.cy}
                r={props.r+2*props.dr}
                ref={pathRef}
                fill="none"
              />
            </svg>
          )}
      </Spring>
    </div>
  );
}

export default SVGRenderer;
