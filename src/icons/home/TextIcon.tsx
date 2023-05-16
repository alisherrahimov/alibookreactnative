import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={116} height={19} viewBox="0 0 116 19" fill="none" {...props}>
    <Path
      d="M0.328125 18H4.04297L5.32031 13.8984H11.2969L12.5742 18H16.2891L10.3945 1.08984H6.23438L0.328125 18ZM8.27344 4.37109H8.34375L10.4766 11.25H6.14062L8.27344 4.37109ZM21.5859 18.2578C23.4844 18.2578 24.7734 17.3672 25.418 15.9258H25.4883V18H28.9102V5.4375H25.4883V12.6562C25.4883 14.2969 24.5156 15.4219 22.9805 15.4219C21.4453 15.4219 20.6719 14.4727 20.6719 12.832V5.4375H17.25V13.5469C17.25 16.4883 18.8203 18.2578 21.5859 18.2578ZM35.7891 18.2578C37.6055 18.2578 38.9883 17.3438 39.6562 15.8555H39.7266V18H43.1484V1.08984H39.7266V7.61719H39.6562C38.9766 6.09375 37.5703 5.17969 35.7891 5.17969C32.625 5.17969 30.6797 7.61719 30.6797 11.707V11.7188C30.6797 15.7969 32.625 18.2578 35.7891 18.2578ZM36.9375 15.4219C35.2266 15.4219 34.1602 14.0039 34.1602 11.7188V11.707C34.1602 9.41016 35.2383 8.01562 36.9375 8.01562C38.5898 8.01562 39.7383 9.44531 39.7383 11.707V11.7188C39.7383 13.9922 38.6016 15.4219 36.9375 15.4219ZM47.2148 3.82031C48.2461 3.82031 49.043 3.01172 49.043 2.03906C49.043 1.06641 48.2461 0.257812 47.2148 0.257812C46.1836 0.257812 45.3867 1.06641 45.3867 2.03906C45.3867 3.01172 46.1836 3.82031 47.2148 3.82031ZM45.5039 18H48.9258V5.4375H45.5039V18ZM51.6914 18H57.7031C61.4531 18 63.5273 16.2422 63.5273 13.3711V13.3477C63.5273 11.0156 61.8516 9.42188 59.4609 9.14062V9.10547C61.3359 8.80078 62.6484 7.14844 62.6484 5.28516V5.26172C62.6484 2.76562 60.6914 1.08984 57.7148 1.08984H51.6914V18ZM57.375 2.50781C59.6719 2.50781 61.0312 3.59766 61.0312 5.41406V5.4375C61.0312 7.44141 59.4961 8.60156 56.9297 8.60156H53.2852V2.50781H57.375ZM57.3398 9.98438C60.2109 9.98438 61.8867 11.168 61.8867 13.2891V13.3125C61.8867 15.3867 60.3984 16.582 57.4805 16.582H53.2852V9.98438H57.3398ZM70.5234 18.2227C73.8398 18.2227 76.0781 15.7852 76.0781 11.9062V11.8828C76.0781 8.00391 73.8281 5.58984 70.5234 5.58984C67.207 5.58984 64.9688 8.01562 64.9688 11.8828V11.9062C64.9688 15.7734 67.1953 18.2109 70.5234 18.2227ZM70.5352 16.8398C68.1328 16.8281 66.5625 15 66.5625 11.9062V11.8828C66.5625 8.8125 68.1445 6.97266 70.5234 6.97266C72.9023 6.97266 74.4961 8.80078 74.4961 11.8828V11.9062C74.4961 14.9883 72.9141 16.8398 70.5352 16.8398ZM83.0859 18.2227C86.4023 18.2227 88.6406 15.7852 88.6406 11.9062V11.8828C88.6406 8.00391 86.3906 5.58984 83.0859 5.58984C79.7695 5.58984 77.5312 8.01562 77.5312 11.8828V11.9062C77.5312 15.7734 79.7578 18.2109 83.0859 18.2227ZM83.0977 16.8398C80.6953 16.8281 79.125 15 79.125 11.9062V11.8828C79.125 8.8125 80.707 6.97266 83.0859 6.97266C85.4648 6.97266 87.0586 8.80078 87.0586 11.8828V11.9062C87.0586 14.9883 85.4766 16.8398 83.0977 16.8398ZM90.8555 18H92.4023V13.2773L93.7617 12.0117L98.6367 18H100.465L94.875 11.0625L100.348 5.8125H98.4258L92.4492 11.5547H92.4023V1.08984H90.8555V18ZM105.715 18.2227C108.387 18.2227 110.32 16.7578 110.32 14.6836V14.6719C110.32 12.9609 109.395 12.0117 106.969 11.4258L105.129 10.9922C103.523 10.6055 102.867 9.98438 102.867 9.01172V9C102.867 7.75781 103.969 6.90234 105.621 6.90234C107.32 6.90234 108.398 7.82812 108.598 9.24609L108.609 9.32812H110.098L110.086 9.19922C109.887 7.10156 108.223 5.58984 105.621 5.58984C103.078 5.58984 101.285 7.03125 101.285 9.05859V9.07031C101.285 10.7578 102.387 11.7656 104.684 12.3164L106.523 12.7617C108.152 13.1484 108.738 13.7227 108.738 14.7773V14.7891C108.738 16.0664 107.566 16.9102 105.727 16.9102C103.887 16.9102 102.75 15.9961 102.504 14.5898L102.48 14.4844H100.934L100.945 14.5898C101.18 16.7461 102.949 18.2227 105.715 18.2227Z"
      fill="#4838D1"
    />
    <Path
      d="M113.848 18.1875C114.797 18.1875 115.535 17.4375 115.535 16.4883C115.535 15.5508 114.797 14.8008 113.848 14.8008C112.898 14.8008 112.148 15.5508 112.148 16.4883C112.148 17.4375 112.898 18.1875 113.848 18.1875Z"
      fill="#F77A55"
    />
  </Svg>
);
export default SVGComponent;
