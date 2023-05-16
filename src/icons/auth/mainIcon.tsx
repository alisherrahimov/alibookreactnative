import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 120}
    height={props.height || 120}
    viewBox="0 0 120 120"
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.4 74.4C63.6548 74.4 74.4 63.6548 74.4 50.4C74.4 37.1452 63.6548 26.4 50.4 26.4C37.1452 26.4 26.4 37.1452 26.4 50.4C26.4 63.6548 37.1452 74.4 50.4 74.4ZM50.4 86.4C70.2823 86.4 86.4 70.2822 86.4 50.4C86.4 30.5177 70.2823 14.4 50.4 14.4C30.5178 14.4 14.4 30.5177 14.4 50.4C14.4 70.2822 30.5178 86.4 50.4 86.4Z"
      fill="#4838D1"
    />
    <Path
      d="M103.2 91.2C103.2 97.8274 97.8274 103.2 91.2 103.2C84.5726 103.2 79.2 97.8274 79.2 91.2C79.2 84.5726 84.5726 79.2 91.2 79.2C97.8274 79.2 103.2 84.5726 103.2 91.2Z"
      fill="#F77A55"
    />
  </Svg>
);
export default SVGComponent;
