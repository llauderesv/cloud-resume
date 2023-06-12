import {styled} from 'styled-components';

type Prop = {fontSize?: string; margin?: string; color?: string};

export const Text = styled.p<Prop>`
  font-weight: 500;
  line-height: 25px;
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  color: ${props => props.color || '#000'};
`;
