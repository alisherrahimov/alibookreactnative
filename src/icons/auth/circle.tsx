import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={85} height={135} viewBox="0 0 85 135" fill="none" {...props}>
    <Path
      d="M134 67.5C134 104.779 104.003 135 67 135C29.9969 135 0 104.779 0 67.5C0 30.2208 29.9969 0 67 0C104.003 0 134 30.2208 134 67.5Z"
      fill="#F77A55"
    />
  </Svg>
);
export default SVGComponent;
