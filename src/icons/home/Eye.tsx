import * as React from 'react';
import Svg, {SvgProps, G, Path, Circle} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    fill={props.color}
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    {...props}>
    <G id="read">
      <G>
        <Path d="M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z" />
        <Path d="M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z" />
        <Circle cx={12} cy={12} r={2.028} />
      </G>
    </G>
  </Svg>
);
export default SVGComponent;
