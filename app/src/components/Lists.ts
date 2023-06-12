import {styled} from 'styled-components';

export const Default = styled.ul<{display?: string}>`
  text-align: justify;
  padding-left: 20px;

  li {
    line-height: 25px;
    margin-bottom: 15px;
    display: ${props => props.display || 'list-item'};
  }
`;

export const Inline = styled.ul`
  padding: 0;
  margin: 0;
  display: block;

  li {
    line-height: 30px;
    display: inline-block;
    text-decoration: underline;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #e8e8e8;
    }
  }
`;
