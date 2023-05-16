import * as React from 'react';
import Svg, {SvgProps, Line} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Line x1={8} y1={6} x2={21} y2={6} />
    <Line x1={8} y1={12} x2={21} y2={12} />
    <Line x1={8} y1={18} x2={21} y2={18} />
    <Line x1={3} y1={6} x2={3.01} y2={6} />
    <Line x1={3} y1={12} x2={3.01} y2={12} />
    <Line x1={3} y1={18} x2={3.01} y2={18} />
  </Svg>
);
export default SVGComponent;
