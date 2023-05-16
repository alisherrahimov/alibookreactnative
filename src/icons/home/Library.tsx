import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill={props.color}
    viewBox="0 0 512 512"
    {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="Combined-Shape"
        fill={props.color}
        transform="translate(42.666667, 85.333333)">
        <Path d="M3.55271368e-14,298.666667 L426.666667,298.666667 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,298.666667 Z M42.6666667,1.42108547e-14 L106.666667,1.42108547e-14 L106.666667,277.333333 L42.6666667,277.333333 L42.6666667,1.42108547e-14 Z M128,21.3333333 L192,21.3333333 L192,277.333333 L128,277.333333 L128,21.3333333 Z M288.933802,36.9522088 L351.961498,25.8387255 L399.909944,277.333333 L330.641827,277.70319 L288.933802,36.9522088 Z M213.333333,21.3333333 L277.333333,21.3333333 L277.333333,277.333333 L213.333333,277.333333 L213.333333,21.3333333 Z" />
      </G>
    </G>
  </Svg>
);
export default SVGComponent;
