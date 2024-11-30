import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: local('Roboto-Regular'), url(${require('./fonts/Roboto/Roboto-Regular.ttf')}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: local('Roboto-Medium'), url(${require('./fonts/Roboto/Roboto-Medium.ttf')}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Thin';
    src: local('Roboto-Thin'), url(${require('./fonts/Roboto/Roboto-Thin.ttf')}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Light';
    src: local('Roboto-Light'), url(${require('./fonts/Roboto/Roboto-Light.ttf')}) format('opentype');
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: local('Roboto-Bold'), url(${require('./fonts/Roboto/Roboto-Bold.ttf')}) format('opentype');
  }

  * {
    font-family: 'Roboto-Regular';
  }

  body {
    background-color: ${({theme}) => theme.body} !important;
    transition: background-color 0.3s ease, color 0.3s ease;
    color: ${({theme}) => theme.text} !important;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p,
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`;
