import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.color}
    {...props}>
    <Path
      d="M22 20V12.1735C22 11.0734 21.5469 10.0218 20.7473 9.26624L13.3737 2.29812C12.6028 1.56962 11.3972 1.56962 10.6263 2.29812L3.25265 9.26624C2.45308 10.0218 2 11.0734 2 12.1735V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
