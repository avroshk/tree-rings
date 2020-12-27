import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';
import SVGCircle from './SVGCircle';

// variable for the namespace
const svgns = "http://www.w3.org/2000/svg";

const SVGRenderer = ({
  loop = false,
  width = 600, height = 600,
  cx = 300, cy = 300,
  r1 = 10, r2 = 50,
  dr1 = 10, dr2 = 5,
  numRings = 10,
  scale1 = 0, scale2 = 50,
  baseFreq1 = 0.01, baseFreq2 = 0.1,
  numOctaves1 = 1, numOctaves2 = 5,
  scale = 8,
  numOctaves = 3, baseFreq = 0.02
}) => {
  const [direction, toggleDirection] = useState(false);
  const [reset, setReset] = useState(false);
  const [filterId, setFilterId] = useState(1);

  return (
    <div onClick={() => { setFilterId(filterId > 0 ? 0 : filterId+1);} }>
      <Spring
        config={config.slow}
        reset={reset}
        reverse={direction}
        from={{ dr: dr1, cx: cx, cy: cy, r: r1, scale: scale1, baseFreq: baseFreq1, numOctaves: numOctaves1  }}
        to={{ dr: dr2, cx: cx, cy: cy, r: r2, scale: scale2, baseFreq: baseFreq2, numOctaves: numOctaves2 }}
        config={{ duration: 2000 }}
        onRest={() => { toggleDirection(!direction && loop); setReset(true); }}>
        {(props) => (
            <svg xmlns={svgns} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
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
                  <feTurbulence id="turbulence" baseFrequency={baseFreq} numOctaves={numOctaves} result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale={scale} />
                </filter>
              </defs>
              {
                Array.from({length: numRings}, (val, index) => index).map(id => {
                    return <SVGCircle cx={props.cx} cy={props.cy} r={props.r+props.dr*id} filter={`squiggly-${filterId}`} />
                })
              }
            </svg>
          )}
      </Spring>
    </div>
  );
}

export default SVGRenderer;
