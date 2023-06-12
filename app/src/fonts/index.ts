import {createGlobalStyle} from 'styled-components';
import RobotoRegular from './Roboto/Roboto-Regular.ttf';
import RobotoMedium from './Roboto/Roboto-Medium.ttf';
import RobotoThin from './Roboto/Roboto-Thin.ttf';
import RobotoLight from './Roboto/Roboto-Light.ttf';
import RobotoBold from './Roboto/Roboto-Bold.ttf';

const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: local('Roboto-Regular'), url(${RobotoRegular}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: local('Roboto-Medium'), url(${RobotoMedium}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Thin';
    src: local('Roboto-Thin'), url(${RobotoThin}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Light';
    src: local('Roboto-Light'), url(${RobotoLight}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: local('Roboto-Bold'), url(${RobotoBold}) format('opentype');
  }
`;

export {GlobalFontStyle};
