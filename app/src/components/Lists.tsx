import React, {FC, ReactElement, useState} from 'react';
import {styled} from 'styled-components';
import {Text} from './Text';

interface StyleProps {
  display?: string;
}

interface Props extends StyleProps {
  children: ReactElement | ReactElement[];
  maximumItems?: number;
}

const MAXIMUM_ITEMS = 5;
const Default: FC<Props> = ({
  children,
  maximumItems = MAXIMUM_ITEMS,
  ...restProps
}): any => {
  const [toggle, setToggle] = useState(false);
  const count = React.Children.count(children);

  return (
    <StyledDefault {...restProps}>
      {toggle ? children : React.Children.toArray(children).slice(0, maximumItems)}
      <div>
        {count > maximumItems && (
          <Text
            color='#2789ae'
            cursor='pointer'
            onClick={() => setToggle(prevState => !prevState)}>
            {toggle ? 'See less' : 'See more'}
          </Text>
        )}
      </div>
    </StyledDefault>
  );
};

const StyledDefault = styled.ul<StyleProps>`
  text-align: justify;
  padding-left: 20px;

  li {
    line-height: 25px;
    margin-bottom: 10px;
    display: ${props => props.display || 'list-item'};
    color: ${props => props.theme.light};
  }
`;

const Inline = styled.ul`
  padding: 0;
  margin: 0;
  display: block;

  li {
    font-family: 'Roboto-Regular';
    line-height: 10px;
    display: inline-block;
    margin-bottom: 10px;
    padding: 8px;
    background-color: ${props => props.theme.tagsBg};
    color: ${props => props.theme.tagsText};
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 5px;
    }

    &:hover {
      background-color: #bababa;
    }
  }
`;

export {Default, Inline};
