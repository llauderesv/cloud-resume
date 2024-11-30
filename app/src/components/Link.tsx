import React, {FC} from 'react';
import {styled} from 'styled-components';

const StyledLink = styled.a<{fontSize?: string; margin?: string; color?: string}>`
  display: inline-block;
  font-weight: 500;
  line-height: 25px;
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  color: ${props => props.color || props.theme.text};
`;

interface LinkProp extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: string;
  href: string;
}

const Link: FC<LinkProp> = ({children, href, ...restProps}): JSX.Element => {
  return (
    <p>
      <StyledLink href={href} {...restProps}>
        {children}
      </StyledLink>
    </p>
  );
};
export default Link;
