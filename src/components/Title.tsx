import {styled} from 'styled-components';

export const Title = styled.h3<{margin?: string}>`
  font-family: 'Roboto-Regular';
  text-transform: uppercase;
  text-decoration: underline;
  margin: ${props => props.margin || '10px 0'};
`;
