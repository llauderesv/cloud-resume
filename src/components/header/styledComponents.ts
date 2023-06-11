import {styled} from 'styled-components';

export const Name = styled.h1`
  font-family: 'Roboto-Regular';
  letter-spacing: 1px;
  font-size: 1.8rem;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;

  div:first-child {
    flex: 5;
  }
`;
