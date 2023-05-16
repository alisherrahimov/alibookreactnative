import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={224} height={157} viewBox="0 0 224 157" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 82.3333C82.4745 82.3333 149.333 15.4745 149.333 -67C149.333 -149.475 82.4745 -216.333 0 -216.333C-82.4745 -216.333 -149.333 -149.475 -149.333 -67C-149.333 15.4745 -82.4745 82.3333 0 82.3333ZM0 157C123.712 157 224 56.7118 224 -67C224 -190.712 123.712 -291 0 -291C-123.712 -291 -224 -190.712 -224 -67C-224 56.7118 -123.712 157 0 157Z"
      fill="#4838D1"
    />
  </Svg>
);
export default SVGComponent;
