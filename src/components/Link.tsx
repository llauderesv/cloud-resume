import {styled} from 'styled-components';

type StyledLinkProp = {fontSize?: string; margin?: string; color?: string};

const StyledLink = styled.a<StyledLinkProp>`
  display: inline-block;
  font-weight: 500;
  line-height: 25px;
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  color: ${props => props.color || '#000'};
`;

type LinkProp = {
  children: React.ReactNode;
  href: string;
};

export function Link({children, href}: LinkProp): JSX.Element {
  return (
    <p>
      <StyledLink href={href}>{children}</StyledLink>
    </p>
  );
}
