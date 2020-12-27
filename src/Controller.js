import React, { useState, useEffect } from 'react';

import Slider from 'rc-slider';
import SVGRenderer from './SVGRenderer';
import styled from 'styled-components';

import 'rc-slider/assets/index.css';


const Controls = styled.section`
  position: absolute;
  left: 0px;
  width: 100px;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 10px;
`;

export default Controller => {
  const [loop, _loop] = useState(0);
  const [numRings, _numRings] = useState(5);
  const [cx, _cx] = useState(300);
  const [cy, _cy] = useState(300);
  const [width, _width] = useState(600);
  const [height, _height] = useState(600);
  const [r1, _r1] = useState(10);
  const [r2, _r2] = useState(50);
  const [dr1, _dr1] = useState(10);
  const [dr2, _dr2] = useState(5);
  const [scale, _scale] = useState(8);
  const [numOctaves, _numOctaves] = useState(3);
  const [baseFreq, _baseFreq] = useState(0.02);


  return ([
    <Controls>
      <div>
        <span>loop</span>
        <Slider
          value={loop}
          min={0}
          max={1}
          onChange={_loop} />
      </div>
      <div>
        <span>width</span>
        <Slider
          value={width}
          min={400}
          max={800}
          onChange={_width} />
      </div>
      <div>
        <span>height</span>
        <Slider
          value={height}
          min={400}
          max={800}
          onChange={_height} />
      </div>
      <div>
        <span>cx</span>
        <Slider
          value={cx}
          min={0}
          max={800}
          onChange={_cx} />
      </div>
      <div>
        <span>cy</span>
        <Slider
          value={cy}
          min={0}
          max={800}
          onChange={_cy} />
      </div>
      <div>
        <span>r1</span>
        <Slider
          value={r1}
          min={1}
          max={100}
          onChange={_r1} />
      </div>
      <div>
        <span>r2</span>
        <Slider
          value={r2}
          min={1}
          max={100}
          onChange={_r2} />
      </div>
      <div>
        <span>dr1</span>
        <Slider
          value={dr1}
          min={1}
          max={20}
          onChange={_dr1} />
      </div>
      <div>
        <span>dr2</span>
        <Slider
          value={dr2}
          min={1}
          max={20}
          onChange={_dr2} />
      </div>
      <div>
        <span>numRings</span>
        <Slider
          value={numRings}
          min={1}
          max={20}
          onChange={_numRings} />
      </div>
      <div>
        <span>scale</span>
        <Slider
          value={scale}
          min={1}
          max={30}
          onChange={_scale} />
      </div>
      <div>
        <span>numOctaves</span>
        <Slider
          value={numOctaves}
          min={1}
          max={8}
          onChange={_numOctaves} />
      </div>
      <div>
        <span>baseFreq</span>
        <Slider
          value={baseFreq}
          min={0.01}
          max={0.1}
          step={0.01}
          onChange={_baseFreq} />
      </div>
    </Controls>,
    <SVGRenderer
      loop={loop}
      width={width}
      height={height}
      cx={cx}
      cy={cy}
      r1={r1}
      r2={r2}
      dr1={dr1}
      dr1={dr2}
      numRings={numRings}
      scale={scale}
      numOctaves={numOctaves}
      baseFreq={baseFreq} />
  ]);
}
