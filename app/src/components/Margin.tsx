import {styled} from 'styled-components';

interface Prop {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const Margin = styled.div<Prop>`
  margin-top: ${prop => prop.top}px;
  margin-right: ${prop => prop.right}px;
  margin-bottom: ${prop => prop.bottom}px;
  margin-left: ${prop => prop.left}px;
`;
